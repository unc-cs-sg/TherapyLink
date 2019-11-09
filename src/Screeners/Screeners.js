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
        <Text style={styles.Header}> 
          Over the past two weeks, how often have you been bothered by the following problems?
        </Text>
        <QuestionList ref={list => {this.list = list}}/>
        <Button title="submit" onPress={() => navigate('MainScreen')} />   
      </ScrollView>

    );
  };
}

const styles = StyleSheet.create({
  Header:{
    fontSize : 20,
    padding: 6,
    marginBottom: 2,
    color: '#000',
    backgroundColor : '#F5F5F5'
}
});

export default Screeners;

