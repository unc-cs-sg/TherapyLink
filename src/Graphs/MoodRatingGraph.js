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

var selectSuccess = "false";
var results = [];

class MoodRatingGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moodHistory: []
    };
  }
  static navigationOptions = {
    title: 'MoodRatingGraph',
  };

  getMoodHistory() {
    var temp = [];
    db.transaction(tx => {
      tx.executeSql("SELECT * FROM DailyMoods", [], (tx, res) => {
        for (let i = 0; i < res.rows.length; ++i) {
          temp.push(res.rows.item(i));
        }
        this.setState({moodHistory: temp});
      });
    });
  }

  componentDidMount = () => {
    this.getMoodHistory();
  }

  render() {
    const { navigate } = this.props.navigation;

    return(

        <View>
          <Text>Mood History</Text>
          <FlatList style={{height: "100%"}} data={this.state.moodHistory}
            ItemSeparatorComponent={this.ListSeparator}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={{ padding: 10, marginTop: 10, elevation: 5, marginHorizontal: 10, backgroundColor: 'white' }} key={item.mood_id}>
                <Text>Date: {item.date}</Text>
                <Text>Mood: {item.mood}</Text>
              </View>
            )}
          />
        </View>
    );
  }
}

//          <LineChart
//            data={{
//              labels: ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"],
//              datasets: [
//                {
//                  data: { data };
//                }
//              ]
//            }}
//            width={Dimensions.get("window").width} // from react-native
//            height={220}
//
//            chartConfig={{
//              backgroundColor: "#50B9FF",
//              backgroundGradientFrom: "#50B9FF",
//              backgroundGradientTo: "#B0E6FF",
//              decimalPlaces: 2,
//              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//              style: {
//                borderRadius: 32
//              },
//              propsForDots: {
//                r: "5",
//                strokeWidth: "1",
//                stroke: "#5698F5"
//              }
//            }}
//
//          />

export default MoodRatingGraph;