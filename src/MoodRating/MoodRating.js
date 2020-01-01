import React, { Fragment } from 'react';
import Slider from '@react-native-community/slider';

import {
  Button,
  View,
  Text,
  Modal,
  StyleSheet,
  Alert,
  Image
} from 'react-native';

import { colors, moodRatingStyles } from '../styles/MoodRatingStyles.js';

class MoodRating extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          mood: 3
      }
  }
  static navigationOptions = {
    title: 'Mood Rating',
  };

  updateMood(value) {
    this.setState({mood:value});
  }

  generateSaveMessage(value) {
    // Date
    const months = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    var date = new Date();
    var dateString = months[date.getMonth()] + " " + date.getDate().toString();

    // Message based on mood
    var moodMessage;
    switch (value) {
      case 1:
        moodMessage = "Sorry to hear you're not having a great day. Hang in there!";
        break;
      case 2:
        moodMessage = "Things might be a little rough right now, but you got it!";
        break;
      case 3:
        moodMessage = "Hope your day gets even better from here!";
        break;
      case 4:
        moodMessage = "Glad things are going well! Keep killing it!";
        break;
      case 5:
        moodMessage = "It's awesome that you're having such a great day! Let's make tomorrow even better!";
        break;
    }
    Alert.alert("Your " + dateString + " mood has been saved.",
        moodMessage,
        [{text: 'OK'}]
    );
  }

  render(){
    const {navigate} = this.props.navigation;
    const userName = "Temp"; /* TODO: Get the user's actual name */
    const greeting = "Hi, " + userName + "! It's nice to see you again!";
    const feeling = "How are you feeling today?";
    const blankLine = "";

    return (
    <View>
      <Button title="Go Home" onPress={() => navigate('MainScreen')} />
      <View style={moodRatingStyles.container}>
        <Text>{ greeting }</Text>
        <Text>{ feeling }</Text>
        <Text>{ blankLine}</Text>

        <View style={{alignItems: "center"}}>
          <View style={moodRatingStyles.emojiRow}>
            <Image source={require('../assets/MoodRating/Emoji_1.png')} />
            <Image source={require('../assets/MoodRating/Emoji_2.png')} />
            <Image source={require('../assets/MoodRating/Emoji_3.png')} />
            <Image source={require('../assets/MoodRating/Emoji_4.png')} />
            <Image source={require('../assets/MoodRating/Emoji_5.png')} />
          </View>
          <View style={moodRatingStyles.row}>
            <Text>1</Text>
            <Text>2</Text>
            <Text>3</Text>
            <Text>4</Text>
            <Text>5</Text>
          </View>
          <Slider style={moodRatingStyles.moodScale}
            value={this.state.mood}
            minimumValue={1}
            maximumValue={5}
            minimumTrackTintColor={colors.trackTint}
            step={1}
            onValueChange={value => this.setState({ mood: value })}
          />
          <Text>{ blankLine }</Text>
          <View style={{width: 100}}>
            <Button
              title="Save"
              color={colors.trackTint}
              onPress={() => this.generateSaveMessage(this.state.mood)}
            />
          </View>
        </View>
      </View>
    </View>
    );
  }

}

export default MoodRating;
