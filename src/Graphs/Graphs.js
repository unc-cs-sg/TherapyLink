import React, {Fragment} from 'react';

import {Button, Dimensions, View, Text} from 'react-native';

import {LineChart} from 'react-native-chart-kit';

import {graphStyles} from '../styles/GraphStyles.js';

import {db, selectAllCheckup} from '../Database.js';

class Graphs extends React.Component {
  static navigationOptions = {
    title: 'Graphs',
  };

  constructor(props) {
    super(props);

    this.state = {data: [0], labels: [0], show: false};
  }

  componentDidMount = () => {
    db.transaction(t => {
      selectAllCheckup(t, results => {
        if (results.data.length > 0) {
          this.setState({...results, show: true});
        }
      });
    });
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Button title="Go home" onPress={() => navigate('MainScreen')} />
        <Text>Progress Chart</Text>
        {this.state.show && (
          <LineChart
            data={{
              labels: this.state.labels,
              datasets: [
                {
                  data: this.state.data,
                },
              ],
            }}
            width={Dimensions.get('window').width} // from react-native
            height={220}
            chartConfig={{
              backgroundColor: '#50B9FF',
              backgroundGradientFrom: '#50B9FF',
              backgroundGradientTo: '#B0E6FF',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 32,
              },
              propsForDots: {
                r: '5',
                strokeWidth: '1',
                stroke: '#5698F5',
              },
            }}
          />
        )}
        <View style={graphStyles.navButtons}>
          <Button
            title="Mood History"
            onPress={() => navigate('MoodRatingGraph')}
          />
        </View>
      </View>
    );
  }
}

export default Graphs;
