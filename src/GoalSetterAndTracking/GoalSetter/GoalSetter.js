//Ram Sudarsan 2019

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  StatusBar,
  AsyncStorage,
  ToastAndroid,
} from 'react-native';
import GoalCard from '../GoalCard/GoalCard';
import CreateGoalCardModal from '../GoalCard/CreateGoalCardModal';
import GoalChecker from '../GoalChecker/GoalChecker';
//import datetimepicker for the calendar stuff
class GoalSetter extends React.Component {
  static navigationOptions = {
    title: 'Self Care Plan',
  };

  constructor(props) {
    super(props);
    this.state = {
      displayModal: false,
      editMode: false,
      plans: [],
      verify: [],
      editDetails: {},
    };
    this.getPlans();
  }

  getPlans = async () => {
    AsyncStorage.getItem('plans', (err, plansJSON) => {
      let plans = JSON.parse(plansJSON);
      let plansToRender = [];
      let verifyPlans = [];
      for (endDate in plans) {
        let newEndDate = new Date(endDate);
        let newDate = new Date();
        newEndDate.setHours(0, 0, 0, 0);
        newDate.setHours(0, 0, 0, 0);
        if (newEndDate >= newDate) {
          for (startDate in plans[endDate]) {
            plans[endDate][startDate].plans.forEach((planObj, i) => {
              //                    plans[endDate][startDate].plans.forEach((plan, i) => {
              let plan = planObj.items;
              let newPlan = {plan, startDate, endDate, index: i};
              plansToRender.push(newPlan);
            });
          }
        } else {
          for (startDate in plans[endDate]) {
            plans[endDate][startDate].plans.forEach((planObj, i) => {
              if (!planObj.finished) {
                verifyPlans.push({
                  plan: planObj.items,
                  startDate,
                  endDate,
                  index: i,
                  finished: planObj.finished,
                });
              }
            });
          }
        }
      }
      //        console.log(verifyPlans);
      this.setState({
        plans: plansToRender,
        verify: verifyPlans,
      });
    });
  };

  displayModal = () => {
    this.setState({
      displayModal: !this.state.displayModal,
      editMode: false,
      editDetails: {},
    });
  };

  addPlan = async (items, startDate, endDate) => {
    AsyncStorage.getItem('plans', (err, plansJSON) => {
      let newPlans = JSON.parse(plansJSON);
      if (newPlans == null || newPlans == undefined) {
        newPlans = {};
        newPlans[endDate] = {};
        newPlans[endDate][startDate] = {};
        newPlans[endDate][startDate].plans = [];
      }
      if (!newPlans.hasOwnProperty(endDate)) {
        newPlans[endDate] = {};
        newPlans[endDate][startDate] = {};
        newPlans[endDate][startDate].plans = [];
      }
      if (!newPlans[endDate].hasOwnProperty(startDate)) {
        newPlans[endDate][startDate] = {};
        newPlans[endDate][startDate].plans = [];
      }
      newPlans[endDate][startDate].plans.push({items, finished: false});
      //        newPlans[endDate][startDate].plans.push(items);
      AsyncStorage.setItem('plans', JSON.stringify(newPlans));
      this.getPlans();
      ToastAndroid.show(
        'Way to go! You have created a plan for self-care.',
        ToastAndroid.LONG,
      );
    });
  };

  editPlan = async (
    items,
    startDate,
    endDate,
    newStartDate,
    newEndDate,
    index,
  ) => {
    AsyncStorage.getItem('plans', (err, plansJSON) => {
      let newPlans = JSON.parse(plansJSON);
      newPlans[endDate][startDate].plans.splice(index, 1);
      if (newPlans[endDate][startDate].plans == null) {
        delete newPlans[endDate][startDate];
        if (newPlans[endDate] == null || newPlans[endDate] == {}) {
          delete newPlans[endDate];
        }
      }

      if (newPlans == null || newPlans == undefined) {
        newPlans = {};
        newPlans[newEndDate] = {};
        newPlans[newEndDate][newStartDate] = {};
        newPlans[newEndDate][newStartDate].plans = [];
      }
      if (!newPlans.hasOwnProperty(newEndDate)) {
        newPlans[newEndDate] = {};
        newPlans[newEndDate][newStartDate] = {};
        newPlans[newEndDate][newStartDate].plans = [];
      }
      if (!newPlans[newEndDate].hasOwnProperty(newStartDate)) {
        newPlans[newEndDate][newStartDate] = {};
        newPlans[newEndDate][newStartDate].plans = [];
      }
      newPlans[newEndDate][newStartDate].plans.push({items, finished: false});

      AsyncStorage.setItem('plans', JSON.stringify(newPlans));
      this.getPlans();
    });
    this.setState({
      editDetails: {},
      editMode: false,
      displayModal: false,
    });
  };

  showEditModal = (plan, sd, ed, i) => {
    let items = {};
    let startDate = new Date(sd);
    let endDate = new Date(ed);
    let index = i;
    let lastUsedKey = Math.max(plan.length, 3);
    plan.forEach(p => {
      let newObj = {[p.key]: p};
      items = Object.assign({}, items, newObj);
    });
    let editDetails = {items, startDate, endDate, lastUsedKey, index};
    this.setState({
      editMode: true,
      displayModal: true,
      editDetails,
    });
  };

  finishedGoalVerification = completedItemCount => {
    if (completedItemCount > 0)
      ToastAndroid.show('A congratulatory message.', ToastAndroid.LONG);
    else ToastAndroid.show('A supportive message.', ToastAndroid.LONG);
    AsyncStorage.getItem('plans', (err, plansJSON) => {
      let newPlans = JSON.parse(plansJSON);
      this.state.verify.forEach((verifyPlanObj, i) => {
        //            console.log(verifyPlanObj);
        newPlans[verifyPlanObj.endDate][verifyPlanObj.startDate].plans[
          verifyPlanObj.index
        ].finished = true;
      });
      AsyncStorage.setItem('plans', JSON.stringify(newPlans));
      this.getPlans();
    });
  };

  componentDidMount() {
    this.getPlans();
  }

  render() {
    const {navigate} = this.props.navigation;

    return this.state.verify != null &&
      this.state.verify != [] &&
      this.state.verify.length != 0 ? (
      <GoalChecker
        verify={this.state.verify}
        finishedGoalVerification={completedItemCount =>
          this.finishedGoalVerification(completedItemCount)
        }
      />
    ) : (
      <View>
        <ScrollView>
          {this.state.displayModal ? (
            <CreateGoalCardModal
              displayModal={() => this.displayModal()}
              addPlan={(items, startDate, endDate) =>
                this.addPlan(items, startDate, endDate)
              }
              editPlan={(
                items,
                startDate,
                endDate,
                newStartDate,
                newEndDate,
                index,
              ) =>
                this.editPlan(
                  items,
                  startDate,
                  endDate,
                  newStartDate,
                  newEndDate,
                  index,
                )
              }
              edit={this.state.editMode}
              items={this.state.editMode ? this.state.editDetails.items : {}}
              startDate={
                this.state.editMode ? this.state.editDetails.startDate : null
              }
              endDate={
                this.state.editMode ? this.state.editDetails.endDate : null
              }
              lastUsedKey={
                this.state.editMode ? this.state.editDetails.lastUsedKey : 3
              }
              index={this.state.editMode ? this.state.editDetails.index : -1}
            />
          ) : (
            <View>
              <Button title="Go Home" onPress={() => navigate('MainScreen')} />
              <View style={styles.buttonContainer}>
                <Button
                  style={styles.button}
                  title="Create Plan"
                  onPress={this.displayModal}
                />
                <Button
                  style={styles.button}
                  title="History"
                  onPress={() => navigate('GoalHistory')}
                />
              </View>
              <Text> Current Plans </Text>
              {this.state.plans == null ||
              this.state.plans == undefined ||
              this.state.plans.length == 0 ? (
                <Text> You do not currently have any active plans. </Text>
              ) : (
                this.state.plans.map((planObj, i) => {
                  return (
                    <GoalCard
                      key={i}
                      plan={planObj.plan}
                      startDate={planObj.startDate}
                      endDate={planObj.endDate}
                      index={planObj.index}
                      showEditModal={(plan, startDate, endDate, index) =>
                        this.showEditModal(plan, startDate, endDate, index)
                      }
                      showEditButton={true}
                    />
                  );
                })
              )}
            </View>
          )}
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 3,
  },
  button: {
    margin: 3,
  },
});

export default GoalSetter;

//Ram Sudarsan 2019
