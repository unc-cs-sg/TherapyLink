import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Therapy Link',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Image
          style={{
            width: 200,
            height: 200,
            margin: 10,
            resizeMode: 'center',
            alignSelf: 'center',
          }}
          source={require('./TherapyLink_Logo.png')}
        />
        <Button title="Journal" onPress={() => navigate('Journal')} />
        <Button title="Education" onPress={() => navigate('Education')} />
        <Button title="Graphs" onPress={() => navigate('Graphs')} />
        <Button title="Mood Rating" onPress={() => navigate('MoodRating')} />
        <Button title="Resources" onPress={() => navigate('Resources')} />
        <Button title="Checkup" onPress={() => navigate('Checkup')} />
        <Button title="Self-Care Plan" onPress={() => navigate('Goals')} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default MainScreen;
