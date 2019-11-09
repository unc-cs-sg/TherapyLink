import React, {Fragment} from 'react';
import {
  Button,
  View,
  Text,
  Slider,
  Modal,
  StyleSheet
} from 'react-native';

import { moodRatingStyles } from './styles/MoodRatingStyles.js';

class MoodRating extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            mood: 1
        }
    }
  static navigationOptions = {
    title: 'Mood Rating',
  };
  render() {
    const {navigate} = this.props.navigation;
    const userName = "Temp";
    const greeting = "Hi, " + { userName } + "! It's nice to see you again!";
    const feeling = "How are you feeling today?";
    return (
      <View>
        <Button title="Go Home" onPress={() => navigate('MainScreen')} />
        <View style={moodRatingStyles.container}>
            <Text>{ greeting }</Text>
            <Text>{ feeling }</Text>
            <Slider
              step={1}
              minimumValue={1}
              maximumValue={5}
              value={this.state.mood}
              onValueChange={val => this.setState({ mood: val })}
            />
        </View>
      </View>
    );

  }
}

export default MoodRating;
