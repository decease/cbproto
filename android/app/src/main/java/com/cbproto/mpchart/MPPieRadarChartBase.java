package com.cbproto.mpchart;

import com.facebook.react.bridge.ReadableMap;
import com.github.mikephil.charting.charts.PieRadarChartBase;

public abstract class MPPieRadarChartBase<T extends PieRadarChartBase> extends ChartViewBase<T> {
    protected void setPieRadarChartBaseProps(T chart, ReadableMap config) {
        super.setChartViewBaseProps(chart, config);

        if (config.hasKey("rotationEnabled")) {
            boolean rotationEnabled = config.getBoolean("rotationEnabled");
            chart.setRotationEnabled(rotationEnabled);
        }

        if (config.hasKey("rotationAngle")) {
            float rotationAngle = (float)config.getDouble("rotationAngle");
            chart.setRotationAngle(rotationAngle);
        }
    }
}
