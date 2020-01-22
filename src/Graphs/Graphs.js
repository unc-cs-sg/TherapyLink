import React from 'react';

import {Button, View, Text} from 'react-native';
import MenuButton from '../Components/MenuButton';

class Graphs extends React.Component {
  static navigationOptions = {
    title: 'Graphs',
  };

  render = () => {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <MenuButton />
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
