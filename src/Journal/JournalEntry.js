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
import moment from 'moment';

class JournalEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entryTitle: '',
      userComment: '',
      momentDate: moment(new Date()).format('MMMM DD'),
      entryID: 0,
      emotionData: [],
    };
    this.baseState = this.state;
  }

  static navigationOptions = {
    title: 'JournalEntry',
  };

  // If this is an existing entry we are reading from the main group
  // and not a new entry, then we update the input boxes with the
  // existing values
  readSelectedEntry = () => {
    const {navigation} = this.props;
    let title = navigation.getParam('title', '');
    let comment = navigation.getParam('comment', '');
    let id = navigation.getParam('id', 0);
    let emotions = navigation.getParam('emotionData', []);
    console.log('entry_id: ' + id);
    if (id !== 0) {
      this.setState({
        entryTitle: title,
        userComment: comment,
        entryID: id,
        emotionData: emotions,
      });
    } else {
      this.resetEntry();
    }
  };

  resetEntry = () => {
    this.setState(this.baseState);
  };

  // Is this necessary after we separate into new
  // emotions panel?
  onSubmit = () => {
    const {navigation} = this.props;
    const {navigate} = this.props.navigation;

    navigate('JournalOptions', {
      emotionData: this.state.emotionData,
      JournalEntry: this,
    });
  };

  // componentDidMount will be called after all the DOM elements
  // are rendered correctly on the page. This will only be called
  // once

  componentWillUnmount = () => {
    this.willFocusSubscription.remove();
  };

  componentDidMount = () => {
    this.willFocusSubscription = this.props.navigation.addListener(
      'willFocus',
      payload => {
        this.readSelectedEntry();
      },
    );
  };

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
            {/* <Button title="Feelings" onPress={() => navigate('JournalOptions', { JournalEntry: this })} /> */}
          </View>

          {/* Hack-ey way of updating the journal entry index when we
          return */}
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
        <View>
          {/* Will have to call addEntry in the JournalSummary panel later */}
          <Button
            title="Next"
            onPress={() => {
              this.onSubmit();
            }}
          />
        </View>
      </View>
    );
  }
}

export default JournalEntry;
