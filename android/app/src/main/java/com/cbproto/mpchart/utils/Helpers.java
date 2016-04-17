package com.cbproto.mpchart.utils;

import com.facebook.react.bridge.ReadableArray;

public class Helpers {
    public static String[] ToStringArray(ReadableArray inp) {
        String[] array = new String[inp.size()];
        for (int i = 0; i < inp.size(); i++) {
            array[i] = inp.getString(i);
        }

        return array;
    }

    public static float[] ToFloatArray(ReadableArray inp) {
        float[] array = new float[inp.size()];
        for (int i = 0; i < inp.size(); i++) {
            array[i] = (float)inp.getDouble(i);
        }

        return array;
    }

    public static int[] ToIntArray(ReadableArray inp) {
        int[] array = new int[inp.size()];
        for (int i = 0; i < inp.size(); i++) {
            array[i] = inp.getInt(i);
        }

        return array;
    }
}
