import React, {Fragment} from 'react';

import {Button, Dimensions, View, Text} from 'react-native';

import {LineChart} from 'react-native-chart-kit';

import { graphStyles } from './styles/GraphStyles.js';

import SQLite from 'react-native-sqlite-2';

const db = SQLite.openDatabase('test.db', '1.0', '', 1);

class Graphs extends React.Component {
  static navigationOptions = {
    title: 'Graphs',
  };

  constructor(props) {
    super(props);

    this.state = {data: [0], labels: [0]};
  }

  all = () => {
    db.transaction(txn => {
      txn.executeSql('SELECT * FROM Checkups', [], (tx, res) => {
        data = [];
        labels = [];
        for (let i = 0; i < res.rows.length; ++i) {
          let it = res.rows.item(i);
          labels.push(it.date);
          data.push(it.score);
          this.setState({data, labels});
        }
      });
    });
  };

  componentDidMount = () => {
    this.all();
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Button title="Go home" onPress={() => navigate('MainScreen')} />
        <Text>Progress Chart</Text>
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
        <View style={graphStyles.navButtons}>
          <Button title="Mood History" onPress={() => navigate('MoodRatingGraph')} />
        </View>
      </View>
    );
  }
}

export default Graphs;
