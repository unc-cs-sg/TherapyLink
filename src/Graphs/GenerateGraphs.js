import React, {Fragment} from 'react';

import {Button, Dimensions, View, Text} from 'react-native';

import {LineChart} from 'react-native-chart-kit';

import {graphStyles} from '../styles/GraphStyles.js';

import {db} from '../Database.js';

import {withNavigation} from 'react-navigation';

class GenerateGraphs extends React.Component {
  static navigationOptions = {
    title: 'Graphs',
  };

  constructor(props) {
    super(props);

    this.state = {data: [0], labels: [0], show: false};
  }

  componentWillUnmount = () => {
    this.willFocusSubscription.remove();
  };

  componentDidMount = () => {
    this.willFocusSubscription = this.props.navigation.addListener(
      'willFocus',
      payload => {
        db.transaction(t => {
          this.props.cb(t, results => {
            if (results.data.length > 0) {
              this.setState({...results, show: true});
            }
          });
        });
      },
    );
  };

  render = () => {
    return (
      this.state.show && (
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
      )
    );
  };
}

export default withNavigation(GenerateGraphs);
