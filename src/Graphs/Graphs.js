import React from 'react';

import {Button, View, Text} from 'react-native';

class Graphs extends React.Component {
  static navigationOptions = {
    title: 'Graphs',
  };

  render = () => {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Button title="Go home" onPress={() => navigate('MainScreen')} />
        <Button
          title="Mood History"
          onPress={() => navigate('MoodRatingGraph')}
        />
        <Button
          title="Anxiety Checkup History"
          onPress={() => navigate('AnxietyCheckupGraph')}
        />
        <Button
          title="Depression Checkup History"
          onPress={() => navigate('DepressionCheckupGraph')}
        />
      </View>
    );
  };
}

export default Graphs;
