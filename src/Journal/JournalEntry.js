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
    };
  }

  static navigationOptions = {
    title: 'JournalEntry',
  };

  addEntry = () => {
    console.log("Adding Entry...");
    const { entryTitle } = this.state;
    const { userComment } = this.state;
    const { momentDate } = this.state;

    db.transaction(function (txn) {
      console.log(txn);
      // To be removed later to actually maintain a persistent database later on
      // txn.executeSql(
      //   "DROP TABLE IF EXISTS Entries"
      // );
      txn.executeSql(
        "CREATE TABLE IF NOT EXISTS Entries(entry_id INTEGER PRIMARY KEY NOT NULL, title VARCHAR(40), date_added TEXT, user_comment TEXT)",
        []
      );

      txn.executeSql("INSERT INTO Entries (title, date_added, user_comment) VALUES (?, ?, ?)", [entryTitle, momentDate, userComment]);

      txn.executeSql("SELECT * FROM Entries", [], function (tx, res) {
        for (let i = 0; i < res.rows.length; ++i) {
          console.log("entry: ", res.rows.item(i));
        }
      });
    })

  }

  hasNegativeEmotion = () => {
    const { navigation } = this.props;
    let data = navigation.getParam('emotions', 'default');
    let hasNegative = false;
    for (let i = 0; i < data.length; ++i) {
      if (data[i] == "1") {
        hasNegative = true;
      }
    }

    if (hasNegative) {
      return <Text>Will move to second prompt.</Text>;
    } else {
      return <Text>Default Submit</Text>;
    }
  }

  // If this is an existing entry we are reading from the main group
  // and not a new entry, then we update the input boxes with the
  // existing values
  readSelectedEntry = () => {
    const { navigation } = this.props;
    let title = navigation.getParam('title', '');
    let comment = navigation.getParam('comment', '');
    this.setState({ entryTitle: title });
    this.setState({ userComment: comment });
  }

  componentDidMount = () => {
    this.readSelectedEntry();
  }

  // TODO: Add input validation to make sure there are no null entries
  render() {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    let negativeString = this.hasNegativeEmotion();
    return (
      <View>
        <TextInput style={diaryStyles.title} placeholder="Title" onChangeText={(text) => this.setState({ entryTitle: text })} value={this.state.entryTitle} />
        <View style={diaryStyles.buttonContainer}>
          <View style={diaryStyles.optionsButtons}>
            <Button title="Feelings" onPress={() => navigate('JournalOptions')} />
          </View>

          {/* Hack-ey way of updating the journal entry index when we
          return */}
          <View style={diaryStyles.optionsButtons}>
            <Button title="Submit" onPress={() => { this.addEntry(); navigation.state.params.JournalIndex.refreshComponent(); navigation.goBack(); }} />
          </View>
        </View>
        <Text style={{ paddingHorizontal: 10 }}>Thoughts</Text>
        <TextInput style={diaryStyles.userComment} placeholder="Describe your thoughts and how you felt." multiline={true} numberOfLines={10} onChangeText={(text) => this.setState({ userComment: text })} value={this.state.userComment} />
        <View>{negativeString}</View>
      </View>
    );
  }
}

export default JournalEntry;
