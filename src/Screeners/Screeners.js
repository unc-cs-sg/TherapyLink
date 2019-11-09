import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';
import QuestionList from './QuestionList.js';
import RadioButton from './RadioButton.js';

class Screeners extends React.Component {
  static navigationOptions = {
    title: 'Screeners',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView>
      <Button title="Go home" onPress={() => navigate('MainScreen')} />
        <Text> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec urna libero, volutpat et 
          nibh quis, molestie tristique justo. Quisque finibus vehicula orci, a pharetra ligula suscipit vitae.
        </Text>
        <RadioButton />
        <QuestionList />
      </ScrollView>
    
    );
  };
}

export default Screeners;
