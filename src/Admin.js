import React from 'react';
import {View, Button} from 'react-native';
import {db, scenarioOne, scenarioTwo, selectAllCheckup} from './Database.js';

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
          title="Scenario 1"
          onPress={() => {
            db.transaction(t => scenarioOne(t));
          }}
        />
        <Button
          title="Scenario 2"
          onPress={() => {
            db.transaction(t => scenarioTwo(t));
          }}
        />
        <Button
          title="Select All Checkup"
          onPress={() => {
            db.transaction(t => selectAllCheckup(t, res => ({})));
          }}
        />
      </View>
    );
  }
}

export default Admin;
