import React, {Fragment} from 'react';

class Resources extends React.Component {
  static navigationOptions = {
    title: 'Resources',
  };
  render() {
    const {navigate} = this.props.navigation;
    return <Button title="Go home" onPress={() => navigate('MainScreen')} />;
  }
}

export default Resources;
