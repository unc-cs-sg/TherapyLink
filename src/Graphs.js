import React, {Fragment} from 'react';

class Graphs extends React.Component {
  static navigationOptions = {
    title: 'Graphs',
  };
  render() {
    const {navigate} = this.props.navigation;
    return <Button title="Go home" onPress={() => navigate('MainScreen')} />;
  }
}

export default Graphs;
