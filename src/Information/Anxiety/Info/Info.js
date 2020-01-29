import React from 'react';
import {ScrollView, Button} from 'react-native';
import MenuButton from '../../../Components/MenuButton.js';
import What from './What.js';
import Symptoms from './Symptoms.js';
import Causes from './Causes.js';
import {createStackNavigator} from 'react-navigation-stack';

class Info extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Info',
    title: 'Info',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={{flex: 1}}>
        <MenuButton />
        <Button title="What is Anxiety?" onPress={() => navigate('What')} />
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
