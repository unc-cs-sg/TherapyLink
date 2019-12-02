import React, { Component } from "react";
import { View } from "react-native";
import RadioForm, {RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

const radio_props = [
    {label: 'D:', value: 1 },
    {label: ':(', value: 2 },
    {label: ':|', value: 3 },
    {label: ':)', value: 4 },
    {label: ':D', value: 5 }
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
            initial={3}
            onPress={(value) => this.update(value)}
            />
        </View>
        );
    }

}