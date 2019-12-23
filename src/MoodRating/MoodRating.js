import React, { Fragment } from 'react';
import Slider from '@react-native-community/slider';
import RadioForm, { RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

import {
  Button,
  View,
  Text,
  Modal,
  StyleSheet,
  Alert
} from 'react-native';

import RadioButton from './RadioButton.js';
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

  render(){
    const {navigate} = this.props.navigation;
    const userName = "Temp"; /* TODO: Get the user's actual name */
    const greeting = "Hi, " + userName + "! It's nice to see you again!";
    const feeling = "How are you feeling today?";
    const blankLine = "";
    const months = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"]
    var date = new Date();
    var dateString = months[date.getMonth()] + " " + date.getDate().toString();

    /* TODO: Use the emojis instead of placeholder text icons */
    return (
    <View>
      <Button title="Go Home" onPress={() => navigate('MainScreen')} />
      <View style={moodRatingStyles.container}>
        <Text>{ greeting }</Text>
        <Text>{ feeling }</Text>
        <Text>{ blankLine}</Text>

        <View style={{alignItems: "center"}}>
          <View style={moodRatingStyles.row}>
            <Text>D:</Text>
            <Text>:(</Text>
            <Text>:|</Text>
            <Text>:)</Text>
            <Text>:D</Text>
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
            onValueChange={value => this.setState({ value })}
          />
          <Text>{ blankLine }</Text>
          <View style={{width: 100}}>
            <Button
              title="Save"
              color={colors.trackTint}
              onPress={() => Alert.alert("Your " + dateString + " mood has been saved.")}
            />
          </View>
        </View>
      </View>
    </View>
    );
  }

}

export default MoodRating;
