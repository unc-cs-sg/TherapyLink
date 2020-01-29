import React from 'react';

import {Button, View, Text} from 'react-native';

import {selectAllAnxietyCheckup} from '../Database.js';
import GenerateGraphs from './GenerateGraphs.js';
import MenuButton from '../Components/MenuButton.js';

class AnxietyCheckupGraph extends React.Component {
  static navigationOptions = {
    title: 'Anxiety Checkups',
  };

  render = () => {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <MenuButton />
        <Text>Anxiety Checkups</Text>
        <GenerateGraphs cb={selectAllAnxietyCheckup} />
      </View>
    );
  };
}

export default AnxietyCheckupGraph;
