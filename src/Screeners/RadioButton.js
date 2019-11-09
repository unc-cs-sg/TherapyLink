import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, SectionList, Alert } from "react-native";
import RadioForm, {RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

const radio_props = [
    {label: 'Not at all', value: 0 },
    {label: 'Several Days', value: 1 },
    {label: 'More than half the days', value: 2 },
    {label: 'Nearly every day', value: 3 }
  ];

export default class RadioButton extends Component {
    constructor(props) {
        super(props)
    }

    update(value){
        this.setState({value:value});
        this.props.handleChange(this.props.index, value);
    }

    render() {
    return (
        <View>
            <RadioForm
            radio_props={radio_props}
            initial={0}
            onPress={(value) => this.update(value)}
            />
        </View>
        );
    }

}