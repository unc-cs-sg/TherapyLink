import React, {Fragment} from 'react';
import {Button} from 'react-native';

class Education extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Information',
    title: 'Information',
  };
  render() {
    const {navigate} = this.props.navigation;
    return <Button title="Go home" onPress={() => navigate('MainScreen')} />;
  }
}

export default Education;
