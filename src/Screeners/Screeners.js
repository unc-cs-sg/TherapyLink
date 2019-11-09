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
  constructor(props) {
    super(props);
    this.state = {
      needScreener: null,
      daysUntilNext: null,
      lastDate: new Date("October 1, 2019")
    };
    this.isItTimeForScreener = this.isItTimeForScreener.bind(this);
    this.getContent = this.getContent.bind(this);
}

  static navigationOptions = {
    title: 'Screeners',
  };

  componentDidMount(){
    this.setState({
      needScreener: this.isItTimeForScreener()
    });
  }

  isItTimeForScreener(){
    let currentTime = new Date().getTime();
    let lastTime = this.state.lastDate.getTime();
    let daysSince = Math.floor((currentTime - lastTime) / (1000 * 60 * 60 * 24));
    this.setState({
      daysUntilNext: 14-daysSince
    })
    if(daysSince < 14){
      return false;
    }
    else{
      return true;
    }
  }

  getContent(){
    const {navigate} = this.props.navigation;
    if(this.state.needScreener){
      return(
        <View>
          <Text style={styles.Header}>
            Over the past two weeks, how often have you been bothered by the following problems?
          </Text>
          <QuestionList ref={list => {this.list = list}}/>
          <Button title="submit" onPress={() => navigate('MainScreen')} />   
        </View>
      );
    }
    else{
      return(
        <View>
          <Text style={styles.Header}>
              Come back in {this.state.daysUntilNext} {this.state.daysUntilNext > 1 ? 'days' : 'day'} to take your next screener! 
          </Text>
        </View>
      )
    }
  }

  render() {
    return (
       <ScrollView>{this.getContent()}</ScrollView>
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

