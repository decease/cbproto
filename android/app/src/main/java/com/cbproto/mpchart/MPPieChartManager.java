package com.cbproto.mpchart;

import android.graphics.Color;

import android.graphics.Typeface;
import com.cbproto.mpchart.utils.Helpers;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.ThemedReactContext;

import com.github.mikephil.charting.animation.Easing;
import com.github.mikephil.charting.formatter.DefaultValueFormatter;
import com.github.mikephil.charting.formatter.PercentFormatter;
import com.github.mikephil.charting.formatter.StackedValueFormatter;
import com.github.mikephil.charting.formatter.ValueFormatter;
import com.github.mikephil.charting.charts.PieChart;
import com.github.mikephil.charting.components.Legend;
import com.github.mikephil.charting.components.Legend.LegendPosition;
import com.github.mikephil.charting.data.PieData;
import com.github.mikephil.charting.data.PieDataSet;
import com.github.mikephil.charting.data.Entry;

import java.util.ArrayList;

public class MPPieChartManager extends MPPieRadarChartBase<PieChart> {
    private String CLASS_NAME="MPPieChart";

    private String[] mLabels = null;
    private ValueFormatter mValueFormatter = null;

    @Override
    public String getName() {
        return this.CLASS_NAME;
    }

    @Override
    protected PieChart createViewInstance(ThemedReactContext reactContext) {
        PieChart chart= new PieChart(reactContext);
        return chart;
    }

    @ReactProp(name="config")
    public void setConfig(PieChart chart, ReadableMap rm) {
        super.setPieRadarChartBaseProps(chart, rm);

        if (rm.hasKey("holeColor")) {
            chart.setHoleColor(Color.parseColor(rm.getString("holeColor")));
        }

        if (rm.hasKey("drawHoleEnabled")) {
            chart.setDrawHoleEnabled(rm.getBoolean("drawHoleEnabled"));
        }

        if (rm.hasKey("centerText")) {
            chart.setCenterText(rm.getString("centerText"));
        }

        if (rm.hasKey("drawCenterTextEnabled")) {
            chart.setDrawCenterText(rm.getBoolean("drawCenterTextEnabled"));
        }

        if (rm.hasKey("holeRadiusPercent")) {
            chart.setHoleRadius((float)rm.getDouble("holeRadiusPercent"));
        }

        if (rm.hasKey("transparentCircleRadiusPercent")) {
            chart.setTransparentCircleRadius((float)rm.getDouble("transparentCircleRadiusPercent"));
        }

        if (rm.hasKey("drawSliceTextEnabled")) {
            chart.setDrawSliceText(rm.getBoolean("drawSliceTextEnabled"));
        }

        if (rm.hasKey("usePercentValuesEnabled")) {
            chart.setUsePercentValues(rm.getBoolean("usePercentValuesEnabled"));
        }

        if (rm.hasKey("centerTextRadiusPercent")) {
            chart.setCenterTextRadiusPercent((float)rm.getDouble("centerTextRadiusPercent"));
        }

        if (rm.hasKey("maxAngle")) {
            chart.setMaxAngle((float)rm.getDouble("maxAngle"));
        }

        if (rm.hasKey("labels")) {
            mLabels = Helpers.ToStringArray(rm.getArray("labels"));
        }

        if (rm.hasKey("valueFormatter")) {
            mValueFormatter = getFormatter(rm.getMap("valueFormatter"));
        }

        if (rm.hasKey("dataSets")) {
            ReadableArray dataSetsArr = rm.getArray("dataSets");
            PieData data = new PieData(this.mLabels);

            for (int i = 0; i < dataSetsArr.size(); i++) {
                PieDataSet dataSet = this.getDataSet(dataSetsArr.getMap(i));
                data.addDataSet(dataSet);
            }

            chart.setData(data);
        }
    }

    private PieDataSet getDataSet(ReadableMap rm) {
        String label = rm.getString("label");
        ReadableArray values = rm.getArray("values");

        ArrayList<Entry> dataEntries = new ArrayList<>();
        for (int j = 0; j < values.size(); j++){
            Entry entry = new Entry((float)values.getDouble(j), j);
            dataEntries.add(entry);
        }

        PieDataSet dataSet = new PieDataSet(dataEntries, label);

        if (rm.hasKey("sliceSpace")) {
            dataSet.setSliceSpace((float)rm.getDouble("sliceSpace"));
        }

        if (rm.hasKey("selectionShift")) {
            dataSet.setSelectionShift((float) rm.getDouble("selectionShift"));
        }

        if (rm.hasKey("colors")) {
            ReadableArray colors = rm.getArray("colors");
            int[] colorValues = new int[colors.size()];
            for (int i = 0; i < colors.size(); i++) {
                //colorValues[i] = Color.parseColor(colors.getString(i));
                colorValues[i] = Color.parseColor(String.format("#%06X", (0xFFFFFF & colors.getInt(i))));
            }

            dataSet.setColors(colorValues);
        }

        if (rm.hasKey("drawValues")) {
            dataSet.setDrawValues(rm.getBoolean("drawValues"));
        }

        if (rm.hasKey("highlightEnabled")) {
            dataSet.setHighlightEnabled(rm.getBoolean("highlightEnabled"));
        }

        if (rm.hasKey("valueTextFontName")) {
            dataSet.setValueTypeface(Typeface.create(rm.getString("valueTextFontName"), Typeface.NORMAL));
        }

        if (rm.hasKey("valueTextFontSize")) {
            dataSet.setValueTextSize((float)rm.getDouble("valueTextFontSize"));
        }

        if (rm.hasKey("valueTextColor")) {
            dataSet.setValueTextColor(Color.parseColor(String.format("#%06X", (0xFFFFFF & rm.getInt("valueTextColor")))));
        }

        if (mValueFormatter != null) {
            dataSet.setValueFormatter(mValueFormatter);
        }

        return dataSet;
    }

    // TODO: Not implemented yet
    private ValueFormatter getFormatter(ReadableMap rm) {
        ValueFormatter valueFormatter = null;

        return valueFormatter;
    }
}
