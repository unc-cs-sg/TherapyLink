import React from 'react';
import {ScrollView, Button, Text} from 'react-native';
import {styles} from '../../../styles/InformationStyles.js';
import MenuButton from '../../../Components/MenuButton.js';
import Tips from './Tips.js';
import Treatments from './Treatments.js';
import {createStackNavigator} from 'react-navigation-stack';

class OvercomingDepression extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Overcome Depression',
    title: 'Overcome Depression',
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
    OvercomingDepression: OvercomingDepression,
    Tips: Tips,
    Treatments: Treatments,
  },
  {
    navigationOptions: {
      title: 'Overcome Depression',
    },
  },
);

export default InfoStack;
