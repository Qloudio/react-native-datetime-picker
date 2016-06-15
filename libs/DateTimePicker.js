'use strict';

import React from 'react';
import {Platform} from 'react-native';

const DateTimePicker = Platform.OS === 'android' ?
  require('./android/DateTimePicker.js') : require('./ios/DateTimePicker.js');


module.exports = DateTimePicker;
