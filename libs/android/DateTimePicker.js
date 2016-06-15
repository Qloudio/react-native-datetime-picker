'use strict';

import React, {Component} from 'react';
import {View} from 'react-native';

const NativeModules = require('NativeModules');
const RCTDateTimePicker = NativeModules.DateTimePicker;



class DP extends Component {

    showDatePicker(date, callback) {
        date = date || new Date();
        var options = {year:date.getFullYear(), month:date.getMonth(), day:date.getDate()};
        RCTDateTimePicker.showDatePicker(options, function (year, month, day) {
            date.setFullYear(year);
            date.setMonth(month);
            date.setDate(day);
            callback(date);
        });
    }

    showTimePicker(date, callback) {
        date = date || new Date();
        var options = {hour:date.getHours(), minute:date.getMinutes()};
        RCTDateTimePicker.showTimePicker(options, function (hour, minute) {
            date.setHours(hour);
            date.setMinutes(minute);
            callback(date);
        });
    }

    render() {
        return (
            null
        )
    }
}

module.exports = DP
