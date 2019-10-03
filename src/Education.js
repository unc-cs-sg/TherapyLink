import React, {Fragment} from 'react';

class Education extends React.Component {
  static navigationOptions = {
    title: 'Education',
  };
  render() {
    const {navigate} = this.props.navigation;
    return <Button title="Go home" onPress={() => navigate('MainScreen')} />;
  }
}

export default Education;
