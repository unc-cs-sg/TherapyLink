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
      emotionState: [],
    };
  }

  static navigationOptions = {
    title: 'JournalEntry',
  };

  updateEntry = id => {
    const { entryTitle, userComment } = this.state;

    db.transaction(tx => {
      tx.executeSql(
        "UPDATE Entries SET title = ?, user_comment = ? WHERE entry_id = ?", [entryTitle, userComment, id]
      );
    })
  }

  // hasNegativeEmotion = () => {
  //   const { navigation } = this.props;
  //   let data = navigation.getParam('emotions', 'default');
  //   console.log("hasNegativeEmotion.data: " + data);
  //   for (let i = 0; i < data.length; ++i) {
  //     if (data[i].isNeg) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }

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
      entryID: id,
    });
  }

  // Is this necessary after we separate into new
  // emotions panel?
  onSubmit = () => {
    const { navigation } = this.props;
    const { navigate } = this.props.navigation;
    let emotionData = navigation.getParam('emotions', []);

    if (emotionData !== null) {
      for (let i = 0; i < emotionData.length; ++i) {
        this.setState(prevState => ({
          emotionState: [...prevState.emotionState, emotionData[i].name]
        }));
      }
    }
    navigate('JournalOptions', { emotionData: emotionData, JournalEntry: this });
  }

  // componentDidMount will be called after all the DOM elements
  // are rendered correctly on the page. This will only be called
  // once
  componentDidMount = () => {
    this.readSelectedEntry();
  }

  // Going to have to move this logic to new
  // feelings page
  // componentDidUpdate = (prevProps, prevState) => {
  //   const { navigate } = this.props.navigation;
  //   if (prevState.emotionState !== this.state.emotionState) {
  //     console.log("emotionState updated!");
  //     if (this.hasNegativeEmotion()) {
  //       console.log("Negative emotion.");
  //       navigate('NegativeEmotionPanel', { JournalEntry: this });
  //     } else {
  //       navigate('JournalSummary', { JournalEntry: this });
  //     }
  //   }
  // }

  // TODO: Add input validation to make sure there are no null entries
  render() {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;

    return (
      <View>
        <TextInput style={diaryStyles.title} placeholder="Title" onChangeText={(text) => this.setState({ entryTitle: text })} value={this.state.entryTitle} />
        <View style={diaryStyles.buttonContainer}>
          <View style={diaryStyles.optionsButtons}>
            {/* <Button title="Feelings" onPress={() => navigate('JournalOptions', { JournalEntry: this })} /> */}
          </View>

          {/* Hack-ey way of updating the journal entry index when we
          return */}
        </View>
        <Text style={{ paddingHorizontal: 10 }}>Thoughts</Text>
        <TextInput style={diaryStyles.userComment} placeholder="Describe your thoughts and how you felt." multiline={true} numberOfLines={10} onChangeText={(text) => this.setState({ userComment: text })} value={this.state.userComment} />
        <View>
          {/* Will have to call addEntry in the JournalSummary panel later */}
          <Button title="Next" onPress={() => {
            if (this.state.entryID !== 0) {
              this.updateEntry(this.state.entryID);
            }

            this.onSubmit();
            navigation.state.params.JournalIndex.refreshComponent();
          }} />

        </View>
      </View>
    );
  }
}

export default JournalEntry;
