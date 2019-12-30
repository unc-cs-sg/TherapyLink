import React, { Fragment } from 'react';
import {
  Button,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
  FlatList,
  PushNotificationIOS,
} from 'react-native';
import { diaryStyles } from '../styles/DiaryStyles.js';
import SQLite from "react-native-sqlite-2";
import moment from 'moment';
import Icon from '../../node_modules/react-native-ionicons';

const db = SQLite.openDatabase("test.db", "1.0", "Test Database", 1);

class Journal extends React.Component {
  constructor(props) {
    super(props);
    // When we navigate to a stored entry, populate the journal entry page with
    // the information from the database
    this.state = {
      data: [],
    };
  }

  ListSeparator = () => {
    return (
      <View style={{ height: 0.2, width: '100%', backgroundColor: '#34c0eb', padding: 5 }} />
    );
  }

  static navigationOptions = {
    title: 'Journal',
  }

  render() {
    const { navigate } = this.props.navigation;
    db.transaction(tx => {
      tx.executeSql("SELECT * FROM Entries", [], (tx, res) => {
        console.log("Query completed.");
        var temp = [];
        for (let i = 0; i < res.rows.length; ++i) {
          temp.push(res.rows.item(i));
        }
        console.log(temp);
        this.setState({
          data: temp,
        });
      });
    });
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#34c0eb' }}>
        <TouchableOpacity style={{ alignSelf: 'flex-end', alignSelf: 'center', position: 'absolute', bottom: 35, width: 50, height: 50, borderRadius: 50 / 2, backgroundColor: '#34ebd6', alignItems: 'center', justifyContent: 'center', zIndex: 1, }} onPress={() => navigate('JournalEntry')}>
          <Icon name="add" color={'#FFF'} />
        </TouchableOpacity>

        <FlatList data={this.state.data}
          ItemSeparatorComponent={this.ListSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{ padding: 10, marginTop: 10, elevation: 5, marginHorizontal: 10, backgroundColor: 'white' }} key={item.entry_id}>
              <Text>Title: {item.title}</Text>
              <Text>Date Added: {item.date_added}</Text>
              <Text>Comment: {item.user_comment}</Text>
            </View>
          )}
        />
      </View>
    )

  }
}

export default Journal;