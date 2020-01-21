import React, { Fragment, Component } from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import SQLite from "react-native-sqlite-2";
import { NavigationEvents } from 'react-navigation';
import { db, insertEntries, updateEntries } from '../Database.js';

// Idea may be to move all the emotion state from
// summary into a previously empty state of the 
// JournalEntry component

class JournalSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPositive: false,
            data: {
                title: '',
                comment: '',
                emotions: [],
                userThought: '',
            }
        };
    }

    createMessage = () => {
        return (
            this.state.isPositive ?
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
        const { navigation } = this.props;
        const entry = navigation.getParam('JournalEntry', null);
        const { entryTitle, userComment, momentDate } = entry.state;
        const emotionData = navigation.getParam('emotionData', []);
        console.log("submitting emotionData: " + emotionData);

        let emotionArr = emotionData.map((
            emotionInfo => emotionInfo.name
        ));
        db.transaction(tx => {
           insertEntries(tx, entryTitle, momentDate, userComment, emotionArr);
        });

    }

    updateEntry = id => {
        let { data } = this.state;
        let emotionArr = data.emotions.map(
            emotionInfo => emotionInfo.name
        );
        db.transaction(tx => {
            updateEntries(tx, id, data.title, data.comment, emotionArr);
        });
    }

    createSummary = () => {
        let { data } = this.state;
        console.log(data.emotions);
        let emotionArr = data.emotions.map(emotionInfo => (
            emotionInfo.name
        ));
        return (
            <Text>
                Title: {data.title}{"\n"}
                Comment: {data.comment}{"\n"}
                Emotions: {emotionArr.join(', ')}{"\n"}
                How will you address the current situation? {data.userThought}
            </Text>
        )
    }

    componentWillUnmount = () => {
        this.willFocusSubscription.remove();
    }

    componentDidMount = () => {
        this.willFocusSubscription = this.props.navigation.addListener(
            'willFocus',
            payload => {
                const { navigation } = this.props;
                this.setState({
                    isPositive: this.props.navigation.getParam('isPositive', false),
                    data: {
                        title: navigation.getParam('JournalEntry', null).state.entryTitle,
                        comment: navigation.getParam('JournalEntry', null).state.userComment,
                        emotions: navigation.getParam('emotionData', []),
                        userThought: navigation.getParam('userThought', ''),
                    }
                });
            }
        );
    }

    render() {
        const { navigation } = this.props;
        const { navigate } = this.props.navigation;
        const JournalEntry = navigation.getParam('JournalEntry', null);
        const { JournalIndex } = JournalEntry.props.navigation.state.params;
        return (
            <View>
                {this.createMessage()}
                {this.createSummary()}
                <Button title="Save" onPress={() => {
                    if (JournalEntry.state.entryID !== 0) {
                        console.log("Updating ENTRY");
                        this.updateEntry(JournalEntry.state.entryID);
                    } else {
                        this.addEntry();
                    }
                    JournalIndex.refreshComponent(); navigate('Journal');
                }} />
            </View>
        )
    }
}

export default JournalSummary;