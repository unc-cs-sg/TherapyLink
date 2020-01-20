import React from 'react';

import {Button, View, Text} from 'react-native';

import {selectAllDepressionCheckup} from '../Database.js';
import GenerateGraphs from './GenerateGraphs.js';

class DepressionCheckupGraph extends React.Component {
  static navigationOptions = {
    title: 'Depression Checkups',
  };

  render = () => {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Button title="Go home" onPress={() => navigate('MainScreen')} />
        <Text>Depression Checkups</Text>
        <GenerateGraphs cb={selectAllDepressionCheckup} />
      </View>
    );
  };
}

export default DepressionCheckupGraph;
