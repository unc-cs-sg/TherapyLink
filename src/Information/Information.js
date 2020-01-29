import React from 'react';
import {Button, View} from 'react-native';
import MenuButton from '../Components/MenuButton';

class Information extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Information',
    title: 'Information',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <MenuButton />
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
