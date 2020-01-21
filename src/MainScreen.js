import React from 'react';
import {View, Button, Image} from 'react-native';

class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Therapy Link',
    drawerLabel: 'Home',
  };
  componentDidMount = () => {};
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
        <Button title="Information" onPress={() => navigate('Information')} />
        <Button title="Graphs" onPress={() => navigate('Graphs')} />
        <Button title="Mood Rating" onPress={() => navigate('MoodRating')} />
        <Button title="Resources" onPress={() => navigate('Resources')} />
        <Button title="Checkup" onPress={() => navigate('Checkup')} />
        <Button title="Self-Care Plan" onPress={() => navigate('Goals')} />
      </View>
    );
  }
}

export default MainScreen;
