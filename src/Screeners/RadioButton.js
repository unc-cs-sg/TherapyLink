import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, SectionList, Alert } from "react-native";
import RadioForm, {RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

var radio_props = [
    {label: 'param1', value: 0 },
    {label: 'param2', value: 1 }
  ];

export default class RadioButton extends Component {

  render() {
    return (
        <View>
          <RadioForm
            radio_props={radio_props}
            initial={0}
            onPress={(value) => {this.setState({value:value})}}
          />
        </View>
      );
  }
}