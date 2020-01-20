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

  // updateEntry = id => {
  //   const { entryTitle, userComment } = this.state;

  //   db.transaction(tx => {
  //     tx.executeSql(
  //       "UPDATE Entries SET title = ?, user_comment = ? WHERE entry_id = ?", [entryTitle, userComment, id]
  //     );
  //   })
  // }

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

  // Is this necessary after we separate into new
  // emotions panel?
  onSubmit = () => {
    const { navigation } = this.props;
    const { navigate } = this.props.navigation;
    let emotionData = navigation.getParam('emotionData', []);

    navigate('JournalOptions', { emotionData: emotionData, JournalEntry: this });
  }

  // componentDidMount will be called after all the DOM elements
  // are rendered correctly on the page. This will only be called
  // once
  componentDidMount = () => {
    this.readSelectedEntry();
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
        <Text style={{ paddingHorizontal: 10 }}>Thoughts</Text>
        <TextInput style={diaryStyles.userComment} placeholder="Describe your thoughts and how you felt." multiline={true} numberOfLines={10} onChangeText={(text) => this.setState({ userComment: text })} value={this.state.userComment} />
        <View>
          {/* Will have to call addEntry in the JournalSummary panel later */}
          <Button title="Next" onPress={() => {
            this.onSubmit();
          }} />

        </View>
      </View>
    );
  }
}

export default JournalEntry;
