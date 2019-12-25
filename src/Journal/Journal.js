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

const db = SQLite.openDatabase("test.db", "1.0", "Test Database", 1);

class Journal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {entryTitle: '', userComment: ''};
  }
  
  static navigationOptions = {
    title: 'Journal',
  };

  submitListener = () => {
    const { entryTitle } = this.state;
    const { userComment } = this.state;
    Alert.alert(entryTitle + userComment);
  }

  testDB = () => {
    console.log("Testing SQLite Database...");

    db.transaction(function(txn) {
        // Since we are testing, delete the table if it currently exists in the database
        txn.executeSql("DROP TABLE IF EXISTS Users", []);
        txn.executeSql(
            "CREATE TABLE IF NOT EXISTS Users(user_id INTEGER PRIMARY KEY NOT NULL, name VARCHAR(30))",
            []
        );

        // Insert dummy value names into our database
        txn.executeSql("INSERT INTO Users (name) VALUES (:name)", ["nora"]);
        txn.executeSql("INSERT INTO Users (name) VALUES (:name)", ["yang"]);

        // Print out the entries in our table currently
        txn.executeSql("SELECT * FROM Users", [], function(tx, res) {
            for (let i = 0; i < res.rows.length; ++i) {
                console.log("entry: ", res.rows.item(i));
            }
        });
    });

  }
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
                <Button title="Submit" onPress={() => navigate('MainScreen')} />
                </View>
            </View>
            <Text style={{paddingHorizontal: 10}}>Thoughts</Text>
            <TextInput style={diaryStyles.userComment} placeholder="Describe your thoughts and how you felt." multiline={true} numberOfLines = {10} onChangeText={(text) => this.setState({userComment: text})} value={this.state.userComment}/>
            <Button title="Test DB" onPress={this.testDB()} />
        </View>
    );
  }
}

export default Journal;
