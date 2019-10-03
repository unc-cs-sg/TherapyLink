import React, {Fragment} from 'react';

class MoodRating extends React.Component {
  static navigationOptions = {
    title: 'Mood Rating',
  };
  render() {
    const {navigate} = this.props.navigation;
    return <Button title="Go home" onPress={() => navigate('MainScreen')} />;
  }
}

export default MoodRating;
