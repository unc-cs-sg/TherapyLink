import React, { Fragment } from 'react';
import Slider from '@react-native-community/slider';
import SQLite from "react-native-sqlite-2";

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

const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
var dateString;

const moodMessages = [
  "Sorry to hear you're not having a great day. Hang in there!",
  "Things might be a little rough right now, but you got it!",
  "Hope your day gets even better from here!",
  "Glad things are going well! Keep killing it!",
  "It's awesome that you're having such a great day! Let's make tomorrow even better!"
]

const db = SQLite.openDatabase("test.db", "1.0", "Mood Ratings Test Database", 1);

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

  updateMoodLocal(value) {
    this.setState({mood: value});
  }

  saveMood(mood) {
    db.transaction(function (txn) {
      txn.executeSql(
        "INSERT INTO DailyMoods (mood, date) VALUES (?, ?)", [mood, dateString]
      );
    })
    this.generateSaveMessage(mood, "saved");
  }

  updateMoodDB(mood) {
    db.transaction(tx => {
      tx.executeSql(
        "UPDATE DailyMoods SET mood = ?, WHERE date = ?", [mood, dateString]
      );
    })
    this.generateSaveMessage(mood, "updated");
  }

  addOrUpdate(mood) {
    const mr = this;
    db.transaction(function(txn) {
      // TODO: Delete the drop table part. Currently using this for testing.
//      txn.executeSql(
//        "DROP TABLE IF EXISTS DailyMoods"
//      );
      txn.executeSql(
        "CREATE TABLE IF NOT EXISTS DailyMoods(mood_id INTEGER PRIMARY KEY NOT NULL, mood INTEGER, date TEXT)",
        []
      );
      txn.executeSql("SELECT * FROM DailyMoods WHERE date = ?", [dateString], function (tx, res) {
        if (res.rows.length > 0) {
          mr.updateMoodDB(mood);
        } else {
          mr.saveMood(mood);
        }
      });
    })
  }

  async generateSaveMessage(value, saved) {
    // Date
    var date = new Date();
    dateString = months[date.getMonth()] + " " + date.getDate().toString() + ", " + (date.getYear() + 1900);

    // Message based on mood
    Alert.alert("Your " + dateString + " mood has been " + saved + ".",
        moodMessages[this.state.mood - 1],
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
            onValueChange={value => this.updateMoodLocal(value)}
          />
          <Text>{ blankLine }</Text>
          <View style={{width: 100}}>
            <Button
              title="Save"
              color={colors.trackTint}
              onPress={() => this.addOrUpdate(this.state.mood)}
            />
          </View>
        </View>
      </View>
    </View>
    );
  }

}

export default MoodRating;
