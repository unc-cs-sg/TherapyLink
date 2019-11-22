import React, {Fragment} from 'react';

import {
  Button,
  Dimensions,
  View,
  Text,
} from 'react-native';

import {
  LineChart
} from 'react-native-chart-kit';


class Graphs extends React.Component {
  static navigationOptions = {
    title: 'Graphs',
  };

  render() {

    return(

        <View>
          <Button title="Go home" onPress={() => navigate('MainScreen')} />
          <Text>Progress Chart</Text>
          <LineChart
            data={{
              labels: ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"],
              datasets: [
                {
                  data: [
                    Math.random() * 5,
                    Math.random() * 5,
                    Math.random() * 5,
                    Math.random() * 5,
                    Math.random() * 5,
                    Math.random() * 5,
                    Math.random() * 5
                  ]
                }
              ]
            }}
            width={Dimensions.get("window").width} // from react-native
            height={220}

            chartConfig={{
              backgroundColor: "#50B9FF",
              backgroundGradientFrom: "#50B9FF",
              backgroundGradientTo: "#B0E6FF",
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 32
              },
              propsForDots: {
                r: "5",
                strokeWidth: "1",
                stroke: "#5698F5"
              }
            }}

          />
        </View>
    );
  }
}

export default Graphs;
