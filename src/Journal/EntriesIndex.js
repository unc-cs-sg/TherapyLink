import React, {Fragment} from 'react';
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
import {diaryStyles} from '../styles/DiaryStyles.js';
import SQLite from "react-native-sqlite-2";
import moment from 'moment';

const db = SQLite.openDatabase("test.db", "1.0", "Test Database", 1);

class EntriesIndex extends React.Component {
    constructor(props) {
        super(props);
        // When we navigate to a stored entry, populate the journal entry page with
        // the information from the database
        this.state = {
            data: [],
        };
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
    }

    ListSeparator = () => {
        return (
            <View style={{ height: 0.2, width: '100%', backgroundColor: '#808080' }} />
        );
    }

    static navigationOptions = {
        title: 'EntriesIndex',
    }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View>
                <FlatList data={this.state.data}
                ItemSeparatorComponent={this.ListSeparator}
                keyExtractor={(item, index) => index.toString()}
                renderItem ={({item}) => (
                    <View key={item.entry_id}>
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

export default EntriesIndex;
