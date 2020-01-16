import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
  AsyncStorage
} from 'react-native';
import GoalCard from '../GoalCard/GoalCard'
import CreateGoalCardModal from '../GoalCard/CreateGoalCardModal'

class GoalHistory extends React.Component {
  static navigationOptions = {
    title: 'Self Care History',
  };

  constructor(props) {
    super(props)
    this.state = {
        displayModal: false,
        plans: []
    }
    this.getPlans()
  }

  componentDidMount() {
    this.getPlans();
  }

   getPlans = async () => {
  //  AsyncStorage.clear();
      AsyncStorage.getItem('plans', (err, plansJSON) => {
          let plans = JSON.parse(plansJSON);
          let plansToRender = [];
          for ( endDate in plans) {
              let newEndDate = new Date(endDate);
              let newDate = new Date();
              newEndDate.setHours(0,0,0,0);
              newDate.setHours(0,0,0,0);
              if (newEndDate < newDate) {
                  for ( startDate in plans[endDate]) {
                      plans[endDate][startDate].plans.forEach((planObj, i) => {
                          let plan = planObj.items;
                          let newPlan = {plan, startDate, endDate, index: i};
                          plansToRender.push(newPlan);
                      })
                  }
              }
          }
          this.setState({
              plans: plansToRender
          })
      })
    }

  render() {
    const {navigate} = this.props.navigation;
    return (
        <View>
        <ScrollView>
        <Text> Plan History </Text>
        {
            (this.state.plans == null || this.state.plans == undefined || this.state.plans.length == 0) ?
                <Text> You currently do not have any past plans. </Text>
            :
            this.state.plans.map((planObj, i) => {
                return <GoalCard key={i} plan={planObj.plan} startDate={planObj.startDate} endDate={planObj.endDate} index = {planObj.index} showEditButton = {false}/>
            })

        }
        </ScrollView>
        </View>
    );
  }

}

const styles = StyleSheet.create({
sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
});

export default GoalHistory;