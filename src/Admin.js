import React from 'react';
import {View, Button} from 'react-native';
import {db, selectAllCheckup} from './Database.js';

class Admin extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Admin',
    title: 'Admin',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Button title="Go home" onPress={() => navigate('MainScreen')} />
        <Button
          title="Test Checkup Select"
          onPress={() => {
            db.transaction(t => selectAllCheckup(t));
          }}
        />
        <Button title="Go home" onPress={() => navigate('MainScreen')} />
      </View>
    );
  }
}

export default Admin;
