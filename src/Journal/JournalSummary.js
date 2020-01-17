import React, { Fragment, Component } from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import SQLite from "react-native-sqlite-2";
import { NavigationEvents } from 'react-navigation';

const db = SQLite.openDatabase("test.db", "1.0", "Test Database", 1);

// Idea may be to move all the emotion state from
// summary into a previously empty state of the 
// JournalEntry component

class JournalSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isYes: false,
            data: {
                title: '',
                comment: '',
                emotions: [],
            }
        };
    }

    createMessage = () => {
        return (
            this.state.isYes ?
                <Text>
                    Having a plan is the first step in improving or avoiding negative experiences. Good job on thinking through what you can do to make the situation better or avoid it from happening in the future.
            </Text> :
                <Text>
                    There are some things in life that are out of your control, you can only choose how you respond to them. However, there are some situations that you can improve or avoid in the future, possibly with help from others. Take some time to reflect on if this situation is one that needs further action.
            </Text>
        );
    }

    errorCB = err => {
        console.log("SQL Error: " + err);
    }

    addEntry = () => {
        const entry = this.props.navigation.getParam('JournalEntry', null);
        const { entryTitle, userComment, momentDate, emotionState } = entry.state;
        console.log("JournalSummary emotionState: " + emotionState);

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
                "INSERT INTO Entries(title, date_added, user_comment, emotions) VALUES (?, ?, ?, ?)", [entryTitle, momentDate, userComment, emotionState.toString()]
            );
        });

    }

    createSummary = () => {
        let { data } = this.state;
        console.log(data.emotions);
        let emotionArr = data.emotions.map(emotionInfo => (
            <Text>{emotionInfo.name}</Text>
        ));
        return (
            <Text>
                Title: {data.title}{"\n"}
                Comment: {data.comment}{"\n"}
                Emotions: {emotionArr}
            </Text>
        )
    }

    componentDidMount = () => {
        const { navigation } = this.props;
        this.setState({
            isYes: this.props.navigation.getParam('isYes', false),
            data: {
                title: navigation.getParam('JournalEntry', null).state.entryTitle,
                comment: navigation.getParam('JournalEntry', null).state.userComment,
                emotions: navigation.getParam('emotionData', []),
            }
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        const { JournalEntry } = this.props.navigation.state.params;
        const { JournalIndex } = JournalEntry.props.navigation.state.params;
        return (
            <View>
                {this.createMessage()}
                {this.createSummary()}
                <Button title="Save" onPress={() => {
                    this.addEntry(); navigate('Journal')
                }} />
            </View>
        )
    }
}

export default JournalSummary;