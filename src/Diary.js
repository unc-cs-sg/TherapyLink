import React, {Fragment} from 'react';
import {
  Button,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';
import {diaryStyles} from './styles/DiaryStyles.js';

class Diary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {entryTitle: '', userComment: ''};
  }
  
  static navigationOptions = {
    title: 'Diary',
  };

  submitListener = () => {
    const { entryTitle } = this.state;
    const { userComment } = this.state;
    Alert.alert(entryTitle + userComment);
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
        <View>
            <TextInput style={diaryStyles.title} placeholder="Title" onChangeText={(text) => this.setState({entryTitle: text})} value={this.state.entryTitle} />
            <View style={diaryStyles.buttonContainer}>
                <View style={diaryStyles.optionsButtons}>
                    <Button title="Current Emotions" onPress={() => navigate('MainScreen')} />
                </View>
                <View style={diaryStyles.optionsButtons}>
                <Button title="Testing" onPress={() => navigate('MainScreen')} />
                </View>
            </View>
            <Text style={{paddingHorizontal: 10}}>Thoughts</Text>
            <TextInput style={diaryStyles.userComment} placeholder="Describe how you are feeling" multiline={true} numberOfLines = {10} onChangeText={(text) => this.setState({userComment: text})} value={this.state.userComment}/>
            <View style={diaryStyles.submitButton}>
              <Button title="Submit" onPress={this.submitListener} />
            </View>
        </View>
    );
  }
}

export default Diary;
