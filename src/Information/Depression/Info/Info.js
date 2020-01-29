import React from 'react';
import {View, ScrollView, Text, Button} from 'react-native';
import {styles} from '../../../styles/InformationStyles.js';
import MenuButton from '../../../Components/MenuButton.js';
import {createStackNavigator} from 'react-navigation-stack';
import Causes from './Causes.js';
import Symptoms from './Symptoms.js';
import What from './What.js';

class Info extends React.Component {
  static navigationOptions = {
    title: 'Depression Info',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={{flex: 1}}>
        <MenuButton />
        <Button title="What is Depression?" onPress={() => navigate('What')} />
        <Button title="Symptoms" onPress={() => navigate('Symptoms')} />
        <Button title="Causes" onPress={() => navigate('Causes')} />
      </ScrollView>
    );
  }
}

const InfoStack = createStackNavigator({
  Info: Info,
  What: What,
  Symptoms: Symptoms,
  Causes: Causes,
});

export default InfoStack;
