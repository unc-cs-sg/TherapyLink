import React, {Fragment} from 'react';
import {ScrollView} from 'react-native';
import RadioForm, {RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import {
  Button,
  View,
  Text,
  Slider,
  Modal,
  StyleSheet,
  Dimensions
} from 'react-native';

import RadioButton from './RadioButton.js';
import { moodRatingStyles } from '../styles/MoodRatingStyles.js';

class MoodRating extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mood: 1
        }
    }
  static navigationOptions = {
    title: 'Mood Rating',
  };

  updateMood(value) {
    this.setState({mood:value});
  }

  render(){
    const {navigate} = this.props.navigation;
    const userName = "Temp";
    const greeting = "Hi, " + userName + "! It's nice to see you again!";
    const feeling = "How are you feeling today?";

    return (
    <View>
      <Button title="Go Home" onPress={() => navigate('MainScreen')} />
      <View style={moodRatingStyles.container}>
        <Text>{ greeting }</Text>
        <Text>{ feeling }</Text>
        <View style={moodRatingStyles.moodScale}>
          <RadioButton index={2} handleChange={this.updateMood}/>
        </View>
      </View>
    </View>
    );
  }

  //    const screenWidth = Dimensions.get('window').width;
  //      const left = 12 + ((this.state.mood - 1) * ((screenWidth - 52)/4));
  //      <View>
  //        <Button title="Go Home" onPress={() => navigate('MainScreen')} />
  //        <View style={moodRatingStyles.container}>
  //            <Text>{ greeting }</Text>
  //            <Text>{ feeling }</Text>
  ////            <Text style={ { width: 50, left: left } }>
  ////                {Math.floor( this.state.mood )}
  ////            </Text>
  //            <View style={moodRatingStyles.moodScale}>
  //              <Text>Just checking.</Text>
  //            </View>
  ////            <Slider
  ////                step={1}
  ////                minimumValue={1}
  ////                maximumValue={5}
  ////                value={this.state.mood}
  ////                onValueChange={val => this.setState({ mood: val })}
  ////            />
  ////            <View style={moodRatingStyles.sliderBounds}>
  ////                <Text>1</Text>
  ////                <Text style={ { right: 0 } }>5</Text>
  ////            </View>
  //        </View>
  //      </View>

}

export default MoodRating;
