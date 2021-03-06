/*
* (The MIT License)
* Copyright (c) 2015-2016 YunJiang.Fang <42550564@qq.com>
* @providesModule ActionSheet1
* @flow-weak
*/
'use strict';

import React, {Component} from 'react';
import {StyleSheet, View, DatePickerIOS, TouchableOpacity, TouchableHighlight, Navigator, Dimensions, Text} from 'react-native';

var Overlay = require('./overlay.js');

class DP extends Component {

    constructor(props, context) {
      super(props, context)

      this.state = {
        visible: false,
        mode: 'date',
        date: new Date(),
      };
    }

    showDatePicker(date, callback) {
        this.callback = callback;
        date = date || new Date();

        this.setState({
            mode: 'date',
            visible: true,
            date: date,
        });
    }

    showTimePicker(date, callback) {
        this.callback = callback;
        date = date || new Date();

        this.setState({
            mode: 'time',
            visible: true,
            date: date,
        });
    }

    onClose() {
        this.setState({
            visible: false,
        });
    }

    onComplete() {
        this.setState({
            visible: false,
        });
        this.callback(this.state.date);
    }

    onDateChange(date) {
        this.setState({date: date});
    }

    render() {
        return this.state.visible && (
            <Overlay visible={this.state.visible}>
                <View style={styles.actionSheetContainer}>
                    <TouchableOpacity
                        style={styles.touchableOpacity}
                        activeOpacity={1}
                        onPress={this.onClose.bind(this)} />
                    <DatePickerIOS
                        date={this.state.date}
                        mode={this.state.mode}
                        onDateChange={this.onDateChange.bind(this)}
                        style = {styles.datePicker}
                        />
                    <View style={styles.separator}/>
                    <TouchableHighlight
                        onPress={this.onComplete.bind(this)}
                        underlayColor="#f4f7f7"
                        style={styles.button}>
                        <Text style={styles.buttonText}>Select</Text>
                    </TouchableHighlight>
                    <TouchableOpacity
                        style={styles.touchableOpacity}
                        activeOpacity={1}
                        onPress={this.onClose.bind(this)} />
                </View>
            </Overlay>
        );
    }
}

var styles = StyleSheet.create({
    actionSheetContainer: {
        height: Dimensions.get('window').height,
        justifyContent: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    datePicker: {
        backgroundColor: 'white',
    },
    touchableOpacity: {
        flex: 1,
    },
    button: {
        paddingVertical: 10,
        backgroundColor: 'white',
    },
    buttonText: {
        color: '#295bac',
        fontSize: 20,
        textAlign: 'center'
    },
    separator: {
        height: 1,
        backgroundColor: '#CCC'
    },
});

module.exports = DP
