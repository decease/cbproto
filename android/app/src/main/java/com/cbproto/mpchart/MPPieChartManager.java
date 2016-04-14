package com.cbproto.mpchart;

import android.graphics.Color;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

import com.github.mikephil.charting.animation.Easing;
import com.github.mikephil.charting.formatter.ValueFormatter;
import com.github.mikephil.charting.charts.PieChart;
import com.github.mikephil.charting.components.Legend;
import com.github.mikephil.charting.components.Legend.LegendPosition;
import com.github.mikephil.charting.data.PieData;
import com.github.mikephil.charting.data.PieDataSet;
import com.github.mikephil.charting.data.Entry;

import java.util.ArrayList;

public class MPPieChartManager extends SimpleViewManager<PieChart> {
    private String CLASS_NAME="MPPieChart";
    private ArrayList<String> mLabels = new ArrayList<>();

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
        if (rm.hasKey("highlightPerTapEnabled")) {
            boolean highlightPerTapEnabled = rm.getBoolean("highlightPerTapEnabled");
            chart.setHighlightPerTapEnabled(highlightPerTapEnabled || true);
        }

        if (rm.hasKey("animateY")) {
            ReadableMap animateY = rm.getMap("animateY");
            int duration = 1400;
            Easing.EasingOption easing = Easing.EasingOption.EaseInOutQuad;

            if (animateY.hasKey("duration")) duration = animateY.getInt("duration");
            if (animateY.hasKey("easing")) easing = Easing.EasingOption.valueOf(animateY.getString("easing"));

            chart.animateY(duration, easing);
        }

        if (rm.hasKey("usePercentValues")) {
            boolean usePercentValues = rm.getBoolean("usePercentValues");
            chart.setUsePercentValues(usePercentValues);
        }

        if (rm.hasKey("labels")) {
            ReadableArray labels = rm.getArray("labels");
            setLabels(chart, labels);
        }

        if (rm.hasKey("description")) {
            String description = rm.getString("description");
            chart.setDescription(description);
        }

        if (rm.hasKey("centerText")) {
            String centerText = rm.getString("centerText");
            chart.setCenterText(centerText);
        }

        String description = "";
        if (rm.hasKey("description")) {
            description = rm.getString("description");
        }
        chart.setDescription(description);

        if (rm.hasKey("legend")) {
            ReadableMap legend = rm.getMap("legend");
            setLegend(chart, legend);
        }

        if (rm.hasKey("dataSets")) {
            ReadableArray dataSets = rm.getArray("dataSets");
            for (int i = 0; i < dataSets.size(); i++) {
                this.setDataSets(chart, dataSets.getMap(i));
            }
        }
    }

    private void setLegend(PieChart chart, ReadableMap v){
        Legend legend = chart.getLegend();

        if(v.hasKey("enable")) legend.setEnabled(v.getBoolean("enable"));

        legend.setPosition(LegendPosition.ABOVE_CHART_RIGHT);
        legend.setWordWrapEnabled(true);
        //if(v.hasKey("position")) legend.setPosition(Legend.LegendPosition.valueOf(v.getString("position")));
        //if(v.hasKey("direction")) legend.setDirection(Legend.LegendDirection.valueOf(v.getString("direction")));

        //if(v.hasKey("legendForm"))  legend.setForm(Legend.LegendForm.valueOf(v.getString("legendForm")));

        if(v.hasKey("textColor"))  legend.setTextColor(Color.parseColor(v.getString("textColor")));
        if(v.hasKey("textSize"))  legend.setTextSize((float) v.getDouble("textSize"));
        if(v.hasKey("xOffset"))  legend.setXOffset((float) v.getDouble("xOffset"));
        if(v.hasKey("yOffset"))  legend.setYOffset((float) v.getDouble("yOffset"));

        if(v.hasKey("custom")) {
            ReadableMap custom = v.getMap("custom");
            ReadableArray colors = custom.getArray("colors");
            ReadableArray labels = custom.getArray("labels");
            if(colors.size() == labels.size()) {
                int[] cols = new int[colors.size()];
                String[] labs = new String[colors.size()];
                for (int j = 0; j < colors.size(); j++) {
                    cols[j] = Color.parseColor(colors.getString(j));
                    labs[j] = labels.getString(j);
                }
                legend.setCustom(cols,labs);
            }
        }
    }

    private void setDataSets(PieChart chart, ReadableMap rm) {
        String label = rm.getString("label");
        ReadableArray values = rm.getArray("values");

        ArrayList<Entry> dataEntries = new ArrayList<>();
        for (int j = 0; j < values.size(); j++){
            Entry entry = new Entry((float)values.getDouble(j), j);
            dataEntries.add(entry);
        }

        PieDataSet dataSet = new PieDataSet(dataEntries, label);

        if (rm.hasKey("colors")) {
            ReadableArray colors = rm.getArray("colors");
            int[] colorValues = new int[colors.size()];
            for (int i = 0; i < colors.size(); i++) {
                colorValues[i] = Color.parseColor(colors.getString(i));
            }

            dataSet.setColors(colorValues);
        }

        if (rm.hasKey("valueFormatter")) {
            dataSet.setValueFormatter(getFormatter(rm.getMap("valueFormatter")));
        }

        PieData data = new PieData(this.mLabels, dataSet);
        chart.setData(data);
    }

    // TODO
    private ValueFormatter getFormatter(ReadableMap valueFormatterRM) {
        ValueFormatter valueFormatter = null;

        int minimumDecimalPlaces;
        int maximumDecimalPlaces;

        if (valueFormatterRM.hasKey("minimumDecimalPlaces")) {
            minimumDecimalPlaces = valueFormatterRM.getInt("minimumDecimalPlaces");
        }
        if (valueFormatterRM.hasKey("maximumDecimalPlaces")) {
            maximumDecimalPlaces = valueFormatterRM.getInt("maximumDecimalPlaces");
        }

//        if (valueFormatterRM.hasKey("type")) {
//            switch(valueFormatterRM.getString("type")) {
//                case "regular":
//                    valueFormatter = NSNumberFormatter();
//                    break;
//                case "abbreviated":
//                    valueFormatter = ABNumberFormatter(minimumDecimalPlaces, maximumDecimalPlaces);
//                    break;
//                default:
//                    valueFormatter = NSNumberFormatter();
//            }
//        }
//
//        if (valueFormatter!= null && valueFormatterRM.hasKey("type")) {
//            switch(valueFormatterRM.getString("numberStyle")) {
//                case "CurrencyAccountingStyle":
//                    valueFormatter.numberStyle =.CurrencyAccountingStyle;
//                    break;
//                case "CurrencyISOCodeStyle":
//                    valueFormatter.numberStyle =.CurrencyISOCodeStyle;
//                    break;
//                case "CurrencyPluralStyle":
//                    valueFormatter.numberStyle =.CurrencyPluralStyle;
//                    break;
//                case "CurrencyStyle":
//                    valueFormatter.numberStyle =.CurrencyStyle;
//                    break;
//                case "DecimalStyle":
//                    valueFormatter.numberStyle = DecimalStyle;
//                    break;
//                case "NoStyle":
//                    valueFormatter.numberStyle =.NoStyle;
//                    break;
//                case "OrdinalStyle":
//                    valueFormatter.numberStyle =.OrdinalStyle;
//                    break;
//                case "PercentStyle":
//                    valueFormatter.numberStyle =.PercentStyle;
//                    break;
//                case "ScientificStyle":
//                    valueFormatter.numberStyle =.ScientificStyle;
//                    break;
//                case "SpellOutStyle":
//                    valueFormatter.numberStyle =.SpellOutStyle;
//                    break;
//                default:
//                    valueFormatter.numberStyle =.NoStyle;
//            }
//        }
//
//        if (valueFormatter != null) {
//            valueFormatter.minimumFractionDigits = minimumDecimalPlaces;
//            valueFormatter.maximumFractionDigits = maximumDecimalPlaces;
//        }

        return valueFormatter;
    }

    private void setLabels(PieChart chart, ReadableArray v){
        this.mLabels = new ArrayList<String>(v.size());
        for (int i = 0; i < v.size(); i++) {
            this.mLabels.add(v.getString(i));
        }
    }
}
