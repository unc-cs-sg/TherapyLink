import React from 'react';
import {ScrollView, Button} from 'react-native';
import MenuButton from '../../../Components/MenuButton.js';
import {createStackNavigator} from 'react-navigation-stack';
import Treatments from './Treatments.js';
import Tips from './Tips.js';

class Info extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Managing Anxiety',
    title: 'Managing Anxiety',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={{flex: 1}}>
        <MenuButton />
        <Button title="Tips" onPress={() => navigate('Tips')} />
        <Button title="Treatments" onPress={() => navigate('Treatments')} />
      </ScrollView>
    );
  }
}

const InfoStack = createStackNavigator(
  {
    Info: Info,
    Tips: Tips,
    Treatments: Treatments,
  },
  {
    navigationOptions: {
      title: 'Managing Anxiety',
    },
  },
);

export default InfoStack;
