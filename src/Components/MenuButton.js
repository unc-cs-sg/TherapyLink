import React from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import {withNavigation} from 'react-navigation';

// the add modal function should be passed in by goal setter. it will provide a way to get all of the info out
// of this modal and create a goalcard
class MenuButton extends React.Component {
  render() {
    return (
      <View
        style={{
          width: 50,
          height: 50,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Icon
          name="menu"
          size={24}
          color="black"
          onPress={() => this.props.navigation.toggleDrawer()}
        />
      </View>
    );
  }
}

export default withNavigation(MenuButton);
