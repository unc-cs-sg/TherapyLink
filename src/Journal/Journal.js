import React, {Fragment} from 'react';
import {
  Button,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';
import {diaryStyles} from '../styles/DiaryStyles.js';
import SQLite from "react-native-sqlite-2";
import moment from 'moment';

const db = SQLite.openDatabase("test.db", "1.0", "Test Database", 1);

class Journal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entryTitle: '', 
      userComment: '',
      momentDate: moment(new Date()).format("MMMM DD"),
    };
  }
  
  static navigationOptions = {
    title: 'Journal',
  };

  addEntry = () => {
    console.log("Adding Entry...");
    const {entryTitle} = this.state;
    const { userComment } = this.state;
    const { momentDate } = this.state;

    db.transaction(function(txn) {
      console.log(txn);
      // To be removed later to actually maintain a persistent database later on
      txn.executeSql("DROP TABLE IF EXISTS Users", []);
      txn.executeSql("DROP TABLE IF EXISTS Entries", []);

      txn.executeSql(
          "CREATE TABLE IF NOT EXISTS Users(user_id INTEGER PRIMARY KEY NOT NULL, name VARCHAR(30))",
          []
      );
      txn.executeSql(
          "CREATE TABLE IF NOT EXISTS Entries(entry_id INTEGER PRIMARY KEY NOT NULL, title VARCHAR(40), date_added TEXT, user_comment TEXT)",
          []
      );

      txn.executeSql("INSERT INTO Entries (title, date_added, user_comment) VALUES (?, ?, ?)", [entryTitle, momentDate, userComment]);

      txn.executeSql("SELECT * FROM Entries", [], function(tx, res) {
          for (let i = 0; i < res.rows.length; ++i) {
              console.log("entry: ", res.rows.item(i));
          }
      });
    })

  }

  // TODO: Add input validation to make sure there are no null entries
  render() {
    const {navigate} = this.props.navigation;
    return (
        <View>
            <TextInput style={diaryStyles.title} placeholder="Title" onChangeText={(text) => this.setState({entryTitle: text})} value={this.state.entryTitle} />
            <View style={diaryStyles.buttonContainer}>
                <View style={diaryStyles.optionsButtons}>
                    <Button title="Feelings" onPress={() => navigate('JournalOptions')} />
                </View>
                <View style={diaryStyles.optionsButtons}>
                <Button title="Submit" onPress={() => {this.addEntry(); navigate('MainScreen');}} />
                </View>
            </View>
            <Text style={{paddingHorizontal: 10}}>Thoughts</Text>
            <TextInput style={diaryStyles.userComment} placeholder="Describe your thoughts and how you felt." multiline={true} numberOfLines = {10} onChangeText={(text) => this.setState({userComment: text})} value={this.state.userComment}/>
        </View>
    );
  }
}

export default Journal;
