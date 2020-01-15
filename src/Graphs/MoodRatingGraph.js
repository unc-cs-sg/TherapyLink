import React, {Fragment} from 'react';

import {
  Button,
  Dimensions,
  View,
  Text,
  FlatList
} from 'react-native';

import {
  LineChart
} from 'react-native-chart-kit';

import { db } from '../MoodRating/MoodRating.js';

class MoodRatingGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [""],
      moods: [0]
    };
  }
  static navigationOptions = {
    title: 'MoodRatingGraph',
  };

  getMoodHistory() {
    var dates = [];
    var moods = [];
    db.transaction(tx => {
      tx.executeSql("SELECT * FROM DailyMoods", [], (tx, res) => {
        for (let i = 0; i < res.rows.length; ++i) {
          dates.push(res.rows.item(i).date);
          moods.push(res.rows.item(i).mood);
        }
        this.setState({dates, moods});
      });
    });
  }

  returnDates() {
    return this.state.dates;
  }

  returnMoods() {
    return this.state.moods;
  }

  componentDidMount = () => {
    this.getMoodHistory();
  }

  render() {
    const { navigate } = this.props.navigation;

    return(

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