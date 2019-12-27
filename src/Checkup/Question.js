import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  SectionList,
  Alert,
} from 'react-native';

export default class Question extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const buttons = this.props.options.map((option, index) => (
      <Button
        key={index}
        title={option}
        onPress={() => this.props.handleChange(index)}
      />
    ));
    return (
      <View>
        <Text>{this.props.question}</Text>
        {buttons}
      </View>
    );
  }
}
