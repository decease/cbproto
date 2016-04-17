package com.cbproto.mpchart;

import android.graphics.Color;
import android.graphics.Typeface;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.github.mikephil.charting.animation.Easing;
import com.github.mikephil.charting.charts.Chart;
import com.github.mikephil.charting.components.Legend;
import com.github.mikephil.charting.utils.ColorTemplate;

public abstract class ChartViewBase <T extends Chart> extends SimpleViewManager<T> {
    protected void setChartViewBaseProps(T chart, ReadableMap config) {
        chart.setDescription("");
        chart.setBackgroundColor(ColorTemplate.rgb("FFFFFF"));

        if (config.hasKey("backgroundColor")) {
            chart.setBackgroundColor(Color.parseColor(config.getString("backgroundColor")));
        }

        if (config.hasKey("noDataText")) {
            chart.setNoDataText(config.getString("noDataText"));
        }

        if (config.hasKey("descriptionText")) {
            chart.setDescription(config.getString("descriptionText"));
        }

        if (config.hasKey("descriptionFontName")) {
            String fontName = config.getString("descriptionFontName");
            chart.setDescriptionTypeface(Typeface.create(fontName, Typeface.NORMAL));
        }

        if (config.hasKey("descriptionFontSize")) {
            chart.setDescriptionTextSize((float)config.getDouble("descriptionFontSize"));
        }

        if (config.hasKey("descriptionTextColor")) {
            chart.setDescriptionColor(Color.parseColor(config.getString("descriptionTextColor")));
        }

        if (config.hasKey("descriptionTextPosition")) {
            ReadableMap position = config.getMap("descriptionTextPosition");
            if (position.hasKey("x") && position.hasKey("y")) {
                chart.setDescriptionPosition((float)config.getDouble("x"), (float)config.getDouble("y"));
            }
        }

        if (config.hasKey("drawMarkers")) {
            chart.setDrawMarkerViews(config.getBoolean("drawMarkers"));
        }

        Legend legend = chart.getLegend();
        if (config.hasKey("showLegend")) {
            legend.setEnabled(config.getBoolean("showLegend"));
        }

        if (config.hasKey("legend")) {
            ReadableMap legendConfig = config.getMap("legend");

            if (legendConfig.hasKey("textColor")) {
                legend.setTextColor(Color.parseColor(legendConfig.getString("textColor")));
            }

            if (legendConfig.hasKey("textSize")) {
                legend.setTextSize((float)legendConfig.getDouble("textSize"));
            }

            if (legendConfig.hasKey("textFontName")) {
                String fontName = legendConfig.getString("textFontName");
                legend.setTypeface(Typeface.create(fontName, Typeface.NORMAL));
            }

            if (legendConfig.hasKey("wordWrap")) {
                legend.setWordWrapEnabled(legendConfig.getBoolean("wordWrap"));
            }

            if (legendConfig.hasKey("maxSizePercent")) {
                legend.setMaxSizePercent((float) legendConfig.getDouble("maxSizePercent"));
            }

            if (legendConfig.hasKey("position")) {
                switch (legendConfig.getString("position")) {
                    case "rightOfChart":
                        legend.setPosition(Legend.LegendPosition.RIGHT_OF_CHART);
                        break;
                    case "rightOfChartCenter":
                        legend.setPosition(Legend.LegendPosition.RIGHT_OF_CHART_CENTER);
                        break;
                    case "rightOfChartInside":
                        legend.setPosition(Legend.LegendPosition.RIGHT_OF_CHART_INSIDE);
                        break;
                    case "leftOfChart":
                        legend.setPosition(Legend.LegendPosition.LEFT_OF_CHART);
                        break;
                    case "leftOfChartCenter":
                        legend.setPosition(Legend.LegendPosition.LEFT_OF_CHART_CENTER);
                        break;
                    case "leftOfChartInside":
                        legend.setPosition(Legend.LegendPosition.LEFT_OF_CHART_INSIDE);
                        break;
                    case "belowChartLeft":
                        legend.setPosition(Legend.LegendPosition.BELOW_CHART_LEFT);
                        break;
                    case "belowChartRight":
                        legend.setPosition(Legend.LegendPosition.BELOW_CHART_RIGHT);
                        break;
                    case "belowChartCenter":
                        legend.setPosition(Legend.LegendPosition.BELOW_CHART_CENTER);
                        break;
                    case "aboveChartLeft":
                        legend.setPosition(Legend.LegendPosition.ABOVE_CHART_LEFT);
                        break;
                    case "aboveChartRight":
                        legend.setPosition(Legend.LegendPosition.ABOVE_CHART_RIGHT);
                        break;
                    case "aboveChartCenter":
                        legend.setPosition(Legend.LegendPosition.ABOVE_CHART_CENTER);
                        break;
                    case "pieChartCenter":
                        legend.setPosition(Legend.LegendPosition.PIECHART_CENTER);
                        break;
                    default:
                        legend.setPosition(Legend.LegendPosition.BELOW_CHART_LEFT);
                        break;
                }
            }

            if (legendConfig.hasKey("form")) {
                switch (legendConfig.getString("form")) {
                    case "square":
                        legend.setForm(Legend.LegendForm.SQUARE);
                        break;
                    case "circle":
                        legend.setForm(Legend.LegendForm.CIRCLE);
                        break;
                    case "line":
                        legend.setForm(Legend.LegendForm.LINE);
                        break;
                    default:
                        legend.setForm(Legend.LegendForm.SQUARE);
                        break;
                }
            }

            if (legendConfig.hasKey("formSize")) {
                legend.setFormSize((float)legendConfig.getDouble("formSize"));
            }

            if (legendConfig.hasKey("xEntrySpace")) {
                legend.setXEntrySpace((float)legendConfig.getDouble("xEntrySpace"));
            }

            if (legendConfig.hasKey("yEntrySpace")) {
                legend.setYEntrySpace((float)legendConfig.getDouble("yEntrySpace"));
            }

            if (legendConfig.hasKey("formToTextSpace")) {
                legend.setFormToTextSpace((float)legendConfig.getDouble("formToTextSpace"));
            }

            if (legendConfig.hasKey("colors") && legendConfig.hasKey("labels")) {
                ReadableArray colorsArr = legendConfig.getArray("colors");
                ReadableArray labelsArr = legendConfig.getArray("labels");

                int[] colors = new int[colorsArr.size()];
                String[] labels = new String[labelsArr.size()];

                for (int i = 0; i < colorsArr.size(); i++) {
                    colors[i] = Color.parseColor(colorsArr.getString(i));
                    labels[i] = labelsArr.getString(i);
                }

                legend.setCustom(colors, labels);
            }
        }

        if (config.hasKey("dragDecelerationEnabled")) {
            chart.setDragDecelerationEnabled(config.getBoolean("dragDecelerationEnabled"));
        }

        if (config.hasKey("dragDecelerationFrictionCoef")) {
            chart.setDragDecelerationFrictionCoef((float)config.getDouble("dragDecelerationFrictionCoef"));
        }

        if (config.hasKey("highlightPerTap")) {
            chart.setHighlightPerTapEnabled(config.getBoolean("highlightPerTap"));
        }

        if (config.hasKey("highlightValues")) {
            ReadableArray highlightValues = config.getArray("highlightValues");
            // TODO: Not implemented yet.
        }

        if (config.hasKey("animation")) {
            ReadableMap animationMap = config.getMap("animation");

            int xAxisDuration = 0;
            if (animationMap.hasKey("xAxisDuration")) {
                xAxisDuration = animationMap.getInt("xAxisDuration");
            }
            int yAxisDuration = 0;
            if (animationMap.hasKey("yAxisDuration")) {
                yAxisDuration = animationMap.getInt("yAxisDuration");
            }

            Easing.EasingOption easingOption = Easing.EasingOption.Linear;

            if (animationMap.hasKey("easingOption")) {
                switch(animationMap.getString("easingOption")) {
                    case "linear":
                        easingOption = Easing.EasingOption.Linear;
                        break;
                    case "easeInQuad":
                        easingOption = Easing.EasingOption.EaseInQuad;
                        break;
                    case "easeOutQuad":
                        easingOption = Easing.EasingOption.EaseOutQuad;
                        break;
                    case "easeInOutQuad":
                        easingOption = Easing.EasingOption.EaseInOutQuad;
                        break;
                    case "easeInCubic":
                        easingOption = Easing.EasingOption.EaseInCubic;
                        break;
                    case "easeOutCubic":
                        easingOption = Easing.EasingOption.EaseOutCubic;
                        break;
                    case "easeInOutCubic":
                        easingOption = Easing.EasingOption.EaseInOutCubic;
                        break;
                    case "easeInQuart":
                        easingOption = Easing.EasingOption.EaseInQuart;
                        break;
                    case "easeOutQuart":
                        easingOption = Easing.EasingOption.EaseOutQuart;
                        break;
                    case "easeInOutQuart":
                        easingOption = Easing.EasingOption.EaseInOutQuart;
                        break;
                    case "easeInSine":
                        easingOption = Easing.EasingOption.EaseInSine;
                        break;
                    case "easeOutSine":
                        easingOption = Easing.EasingOption.EaseOutSine;
                        break;
                    case "easeInOutSine":
                        easingOption = Easing.EasingOption.EaseInOutSine;
                        break;
                    case "easeInExpo":
                        easingOption = Easing.EasingOption.EaseInExpo;
                        break;
                    case "easeOutExpo":
                        easingOption = Easing.EasingOption.EaseOutExpo;
                        break;
                    case "easeInOutExpo":
                        easingOption = Easing.EasingOption.EaseInOutExpo;
                        break;
                    case "easeInCirc":
                        easingOption = Easing.EasingOption.EaseInCirc;
                        break;
                    case "easeOutCirc":
                        easingOption = Easing.EasingOption.EaseOutCirc;
                        break;
                    case "easeInOutCirc":
                        easingOption = Easing.EasingOption.EaseInOutCirc;
                        break;
                    case "easeInElastic":
                        easingOption = Easing.EasingOption.EaseInElastic;
                        break;
                    case "easeOutElastic":
                        easingOption = Easing.EasingOption.EaseOutElastic;
                        break;
                    case "easeInBack":
                        easingOption = Easing.EasingOption.EaseInBack;
                        break;
                    case "easeOutBack":
                        easingOption = Easing.EasingOption.EaseOutBack;
                        break;
                    case "easeInOutBack":
                        easingOption = Easing.EasingOption.EaseInOutBack;
                        break;
                    case "easeInBounce":
                        easingOption = Easing.EasingOption.EaseInBounce;
                        break;
                    case "easeOutBounce":
                        easingOption = Easing.EasingOption.EaseOutBounce;
                        break;
                    case "easeInOutBounce":
                        easingOption = Easing.EasingOption.EaseInOutBounce;
                        break;
                    default:
                        easingOption = Easing.EasingOption.Linear;
                        break;
                }
            }

            chart.animateX(xAxisDuration, easingOption);
            chart.animateY(yAxisDuration, easingOption);
        }
    }

    @Override
    public abstract String getName();

    @Override
    protected abstract T createViewInstance(ThemedReactContext reactContext);
}
