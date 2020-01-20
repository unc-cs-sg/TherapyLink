import React, {Fragment} from 'react';
import {Button, View} from 'react-native';

class Information extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Information',
    title: 'Information',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <Button title="Go home" onPress={() => navigate('MainScreen')} />
        <Button title="Anxiety Info" onPress={() => navigate('Anxiety')} />
        <Button
          title="Depression Info"
          onPress={() => navigate('Depression')}
        />
      </View>
    );
  }
}

export default Information;
