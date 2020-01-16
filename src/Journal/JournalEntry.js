import React, { Fragment } from 'react';
import {
  Button,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';
import { diaryStyles } from '../styles/DiaryStyles.js';
import SQLite from "react-native-sqlite-2";
import moment from 'moment';
import { bool } from 'prop-types';

const db = SQLite.openDatabase("test.db", "1.0", "Test Database", 1);

class JournalEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entryTitle: '',
      userComment: '',
      momentDate: moment(new Date()).format("MMMM DD"),
      entryID: 0,
    };
  }

  static navigationOptions = {
    title: 'JournalEntry',
  };

  addEntry = () => {
    const { entryTitle, userComment, momentDate } = this.state;
    let emotionData = this.props.navigation.getParam('emotions', 'default');
    let emotionsArray = [];
    console.log("emotions: " + this.props.navigation.getParam('emotions', 'default'));

    if (emotionData !== 'default') {
      for (let i = 0; i < emotionData.length; ++i) {
        emotionsArray.push(emotionData[i].name);
      }
      console.log("emotionsArray: " + emotionsArray);
    }

    db.transaction(function (txn) {
      // To be removed later to actually maintain a persistent database later on
      // txn.executeSql(
      //   "DROP TABLE Entries"
      // );
      txn.executeSql(
        "CREATE TABLE IF NOT EXISTS Entries(entry_id INTEGER PRIMARY KEY NOT NULL, title VARCHAR(40), date_added TEXT, user_comment TEXT, emotions TEXT)",
        []
      );

      txn.executeSql(
        "INSERT INTO Entries(title, date_added, user_comment, emotions) VALUES (?, ?, ?, ?)", [entryTitle, momentDate, userComment, emotionsArray.toString()]
      );
    });

  }

  updateEntry = id => {
    const { entryTitle, userComment } = this.state;

    db.transaction(tx => {
      tx.executeSql(
        "UPDATE Entries SET title = ?, user_comment = ? WHERE entry_id = ?", [entryTitle, userComment, id]
      );
    })
  }

  hasNegativeEmotion = () => {
    const { navigation } = this.props;
    let data = navigation.getParam('emotions', 'default');
    console.log("hasNegativeEmotion.data: " + data);
    for (let i = 0; i < data.length; ++i) {
      if (data[i].isNeg) {
        return true;
      }
    }
    return false;
  }

  // If this is an existing entry we are reading from the main group
  // and not a new entry, then we update the input boxes with the
  // existing values
  readSelectedEntry = () => {
    const { navigation } = this.props;
    let title = navigation.getParam('title', '');
    let comment = navigation.getParam('comment', '');
    let id = navigation.getParam('id', 0);
    console.log("entry_id: " + id);
    this.setState({
      entryTitle: title,
      userComment: comment,
      entryID: id
    });
  }

  // componentDidMount will be called after all the DOM elements
  // are rendered correctly on the page. This will only be called
  // once
  componentDidMount = () => {
    this.readSelectedEntry();
  }

  // TODO: Add input validation to make sure there are no null entries
  render() {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;

    return (
      <View>
        <TextInput style={diaryStyles.title} placeholder="Title" onChangeText={(text) => this.setState({ entryTitle: text })} value={this.state.entryTitle} />
        <View style={diaryStyles.buttonContainer}>
          <View style={diaryStyles.optionsButtons}>
            <Button title="Feelings" onPress={() => navigate('JournalOptions', { JournalEntry: this })} />
          </View>

          {/* Hack-ey way of updating the journal entry index when we
          return */}
          <View style={diaryStyles.optionsButtons}>
            <Button title="Submit" onPress={() => {
              if (this.state.entryID !== 0) {
                this.updateEntry(this.state.entryID);
              } else {
                this.addEntry();
              }

              navigation.state.params.JournalIndex.refreshComponent();

              if (this.hasNegativeEmotion()) {
                console.log("Negative emotion.");
                navigate('NegativeEmotionPanel');
              } else {
                navigation.goBack();
              }

            }} />

          </View>
        </View>
        <Text style={{ paddingHorizontal: 10 }}>Thoughts</Text>
        <TextInput style={diaryStyles.userComment} placeholder="Describe your thoughts and how you felt." multiline={true} numberOfLines={10} onChangeText={(text) => this.setState({ userComment: text })} value={this.state.userComment} />
      </View>
    );
  }
}

export default JournalEntry;
