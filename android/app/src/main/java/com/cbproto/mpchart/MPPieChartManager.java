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
    public void setConfig(PieChart chart, ReadableMap config) {
        super.setPieRadarChartBaseProps(chart, config);

        if (config.hasKey("holeColor")) {
            chart.setHoleColor(Color.parseColor(config.getString("holeColor")));
        }

        if (config.hasKey("drawHoleEnabled")) {
            chart.setDrawHoleEnabled(config.getBoolean("drawHoleEnabled"));
        }

        if (config.hasKey("centerText")) {
            chart.setCenterText(config.getString("centerText"));
        }

        if (config.hasKey("drawCenterTextEnabled")) {
            chart.setDrawCenterText(config.getBoolean("drawCenterTextEnabled"));
        }

        if (config.hasKey("holeRadiusPercent")) {
            chart.setHoleRadius((float)config.getDouble("holeRadiusPercent"));
        }

        if (config.hasKey("transparentCircleRadiusPercent")) {
            chart.setTransparentCircleRadius((float)config.getDouble("transparentCircleRadiusPercent"));
        }

        if (config.hasKey("drawSliceTextEnabled")) {
            chart.setDrawSliceText(config.getBoolean("drawSliceTextEnabled"));
        }

        if (config.hasKey("usePercentValuesEnabled")) {
            chart.setUsePercentValues(config.getBoolean("usePercentValuesEnabled"));
        }

        if (config.hasKey("centerTextRadiusPercent")) {
            chart.setCenterTextRadiusPercent((float)config.getDouble("centerTextRadiusPercent"));
        }

        if (config.hasKey("maxAngle")) {
            chart.setMaxAngle((float)config.getDouble("maxAngle"));
        }

        if (config.hasKey("labels")) {
            mLabels = Helpers.ToStringArray(config.getArray("labels"));
        }

        if (config.hasKey("valueFormatter")) {
            mValueFormatter = getFormatter(config.getMap("valueFormatter"));
        }

        if (config.hasKey("dataSets")) {
            ReadableArray dataSetsArr = config.getArray("dataSets");
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
                colorValues[i] = Color.parseColor(colors.getString(i));
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
            dataSet.setValueTextColor(Color.parseColor(rm.getString("valueTextColor")));
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
