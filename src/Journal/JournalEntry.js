import React, {Fragment} from 'react';
import {
  Button,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {diaryStyles} from '../styles/DiaryStyles.js';
import {createEntries, insertEntries, updateEntries} from '../Database.js';

class JournalEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entryTitle: '',
      userComment: '',
      entryID: 0,
    };
  }

  static navigationOptions = {
    title: 'JournalEntry',
  };

  addEntry = () => {
    let emotionData = this.props.navigation.getParam('emotions', 'default');
    let emotionsArray = [];

    if (emotionData !== 'default') {
      for (let i = 0; i < emotionData.length; ++i) {
        emotionsArray.push(emotionData[i].name);
      }
    }

    db.transaction(t => {
      createEntries(t);
      insertEntries(
        t,
        this.state.entryTitle,
        today(),
        this.state.userComment,
        emotionsArray,
      );
    });
  };

  updateEntry = id => {
    db.transaction(t => {
      updateEntries(t, id, this.state.entryTitle, this.state.userComment);
    });
  };

  hasNegativeEmotion = () => {
    let data = this.props.navigation.getParam('emotions', 'default');
    for (let i = 0; i < data.length; ++i) {
      if (data[i].isNeg) {
        return true;
      }
    }
    return false;
  };

  // If this is an existing entry we are reading from the main group
  // and not a new entry, then we update the input boxes with the
  // existing values
  readSelectedEntry = () => {
    const {navigation} = this.props;
    let title = navigation.getParam('title', '');
    let comment = navigation.getParam('comment', '');
    let id = navigation.getParam('id', 0);
    this.setState({
      entryTitle: title,
      userComment: comment,
      entryID: id,
    });
  };

  // componentDidMount will be called after all the DOM elements
  // are rendered correctly on the page. This will only be called
  // once
  componentDidMount = () => {
    this.readSelectedEntry();
  };

  // TODO: Add input validation to make sure there are no null entries
  render() {
    const {navigate} = this.props.navigation;
    const {navigation} = this.props;

    return (
      <View>
        <TextInput
          style={diaryStyles.title}
          placeholder="Title"
          onChangeText={text => this.setState({entryTitle: text})}
          value={this.state.entryTitle}
        />
        <View style={diaryStyles.buttonContainer}>
          <View style={diaryStyles.optionsButtons}>
            <Button
              title="Feelings"
              onPress={() => navigate('JournalOptions', {JournalEntry: this})}
            />
          </View>

          {/* Hack-ey way of updating the journal entry index when we
          return */}
          <View style={diaryStyles.optionsButtons}>
            <Button
              title="Submit"
              onPress={() => {
                if (this.state.entryID !== 0) {
                  this.updateEntry(this.state.entryID);
                } else {
                  this.addEntry();
                }

                navigation.state.params.JournalIndex.refreshComponent();

                if (this.hasNegativeEmotion()) {
                  console.log('Negative emotion.');
                  navigate('NegativeEmotionPanel');
                } else {
                  navigation.goBack();
                }
              }}
            />
          </View>
        </View>
        <Text style={{paddingHorizontal: 10}}>Thoughts</Text>
        <TextInput
          style={diaryStyles.userComment}
          placeholder="Describe your thoughts and how you felt."
          multiline={true}
          numberOfLines={10}
          onChangeText={text => this.setState({userComment: text})}
          value={this.state.userComment}
        />
      </View>
    );
  }
}

export default JournalEntry;
