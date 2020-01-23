import React, {Fragment} from 'react';
import Slider from '@react-native-community/slider';
import {
  db,
  createDailyMoods,
  today,
  addOrUpdateDailyMoods,
} from '../Database.js';

import {
  Button,
  View,
  Text,
  Modal,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';

import {colors, moodRatingStyles} from '../styles/MoodRatingStyles.js';
import MenuButton from '../Components/MenuButton.js';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
var dateString;

const moodMessages = [
  "Sorry to hear you're not having a great day. Hang in there!",
  'Things might be a little rough right now, but you got it!',
  'Hope your day gets even better from here!',
  'Glad things are going well! Keep killing it!',
  "It's awesome that you're having such a great day! Let's make tomorrow even better!",
];

class MoodRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mood: 0,
    };
  }
  static navigationOptions = {
    title: 'Mood Rating',
  };

  updateMoodLocal(value) {
    this.setState({mood: value});
  }

  addOrUpdate = mood => {
    db.transaction(t => {
      createDailyMoods(t);
      addOrUpdateDailyMoods(t, today(), mood);
    });
    this.generateSaveMessage(mood);
  };

  async generateSaveMessage(mood) {
    Alert.alert(
      'Your mood has been saved.',
      moodMessages[mood - 1],
      [{text: 'OK'}],
    );
  }

  render() {
    const {navigate} = this.props.navigation;
    const userName = 'Temp'; /* TODO: Get the user's actual name */
    const greeting = 'Hi, ' + userName + "! It's nice to see you today!";
    const feeling = 'How are you feeling today?';
    const blankLine = '';

    return (
      <View>
        <MenuButton />
        <View style={moodRatingStyles.container}>
          <Text>{greeting}</Text>
          <Text>{feeling}</Text>
          <Text>{blankLine}</Text>

          <View style={{alignItems: 'center'}}>
            <View style={moodRatingStyles.emojiRow}>
              <Image
                style={[moodRatingStyles.emoji, moodRatingStyles.invisible]}
                source={require('../assets/MoodRating/1_Emoji.png')}
              />
              <Image
                style={moodRatingStyles.emoji}
                source={require('../assets/MoodRating/1_Emoji.png')}
              />
              <Image
                style={moodRatingStyles.emoji}
                source={require('../assets/MoodRating/2_Emoji.png')}
              />
              <Image
                style={moodRatingStyles.emoji}
                source={require('../assets/MoodRating/3_Emoji.png')}
              />
              <Image
                style={moodRatingStyles.emoji}
                source={require('../assets/MoodRating/4_Emoji.png')}
              />
              <Image
                style={moodRatingStyles.emoji}
                source={require('../assets/MoodRating/5_Emoji.png')}
              />
            </View>
            <View style={moodRatingStyles.row}>
              <Text style={moodRatingStyles.invisible}>0</Text>
              <Text>1</Text>
              <Text>2</Text>
              <Text>3</Text>
              <Text>4</Text>
              <Text>5</Text>
            </View>
            <Slider
              style={moodRatingStyles.moodScale}
              value={this.state.mood}
              minimumValue={0}
              maximumValue={5}
              minimumTrackTintColor={colors.trackTint}
              step={1}
              onValueChange={value => this.updateMoodLocal(value)}
            />
            <Text>{blankLine}</Text>
            <View style={{width: 100}}>
              <Button
                disabled={this.state.mood == 0}
                title="Save"
                color={colors.trackTint}
                onPress={() => this.addOrUpdate(this.state.mood)}
              />
              <Text> </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default MoodRating;
