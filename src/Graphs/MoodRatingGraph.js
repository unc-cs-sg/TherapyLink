import React, {Fragment} from 'react';

import {Button, Dimensions, View, Text, FlatList} from 'react-native';

import {LineChart} from 'react-native-chart-kit';

import {db, selectAllDailyMoods} from '../Database.js';

class MoodRatingGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [''],
      moods: [0],
    };
  }
  static navigationOptions = {
    title: 'MoodRatingGraph',
  };

  componentDidMount = () => {
    db.transaction(t => {
      selectAllDailyMoods(t, results => {
        if (results.moods.length > 0) {
          this.setState({...results, show: true});
        }
      });
    });
  };

  render() {
    return (
      <View>
        <Text>Mood History</Text>
        <LineChart
          data={{
            labels: this.state.dates,
            datasets: [
              {
                data: this.state.moods,
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
      </View>
    );
  }
}

export default MoodRatingGraph;
