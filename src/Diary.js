import React, {Fragment} from 'react';
import {
  Button,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native';
import {diaryStyles} from './styles/DiaryStyles.js';

class Diary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: ''};
  }
  static navigationOptions = {
    title: 'Diary',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={diaryStyles.container}>
            <TextInput style={{height: 40, fontSize: 20, padding: 10}} placeholder="Title" onChangeText={(title) => this.setState({title})} value={this.state.title} />
            <View style={diaryStyles.buttonContainer}>
                <View style={{width: "50%"}}>

                <Button title="Current Emotions" onPress={() => navigate('MainScreen')} />
                </View>
                <View style={{width: "50%"}}>
                <Button title="Testing" onPress={() => navigate('MainScreen')} />
                </View>
            </View>
        </View>
    );
  }
}

export default Diary;
