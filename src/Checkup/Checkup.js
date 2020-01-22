import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import QuestionList from './QuestionList.js';
import {db, today, createCheckup, insertCheckup} from '../Database.js';
import MenuButton from '../Components/MenuButton.js';

let options = [
  'Not at all',
  'Several days',
  'More than half the days',
  'Nearly every day',
];

let anxietyQuestions = [
  'Feeling nervous, anxious or on edge',
  'Not being able to stop or control worrying',
  'Worrying too much about different things',
  'Trouble relaxing',
  'Being so restless that it is hard to sit still',
  'Becoming easily annoyed or irritable',
  'Feeling afraid as if something awful might happen',
];

let depressionQuestions = [
  'Little interest or pleasure in doing things',
  'Feeling down, depressed, or hopeless',
  'Trouble falling or staying asleep, or sleeping too much',
  'Feeling tired or having little energy',
  'Poor appetite or overeating',
  'Feeling bad about yourself - or that you are a failure or have let yourself or your family down',
  'Trouble concentrating on things, such as reading the newspaper or watching television',
  'Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual',
  'Thoughts that you would be better off dead or of hurting yourself in some way',
];

function anxietyRange(v) {
  if (v < 5) {
    return 'minimal';
  } else if (v < 10) {
    return 'mild';
  } else if (v < 15) {
    return 'moderate';
  } else {
    return 'severe';
  }
}

function depressionRange(v) {
  if (v < 5) {
    return 'minimal';
  } else if (v < 10) {
    return 'mild';
  } else if (v < 15) {
    return 'moderate';
  } else if (v < 20) {
    return 'moderately severe';
  } else {
    return 'severe';
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
  },
  pa: {
    padding: 20,
  },
  parent: {
    flex: 1,
  },
  one: {
    flex: 1,
  },
});

export default class Checkup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {result: 0, screen: 'Main', checkup: ''};
  }

  static navigationOptions = {
    title: 'Checkup',
  };

  handleFinish = total => {
    this.setState({screen: 'Finished', result: total});

    db.transaction(t => {
      createCheckup(t);
      insertCheckup(t, today(), this.state.checkup, total);
    });
  };

  render() {
    const {navigate} = this.props.navigation;

    var screen;
    if (
      this.state.screen == 'Checkup' &&
      (this.state.checkup == 'Anxiety' || this.state.checkup == 'Depression')
    ) {
      screen = (
        <View style={styles.parent}>
          <MenuButton />
          <Text style={styles.pa}>
            Please answer the questions to the best of your ability. You will be
            provided with your results after the questionnaire.
          </Text>
          <Text style={styles.pa}>
            Over the past two weeks, how often have you been bothered by the
            following problems?
          </Text>
          <QuestionList
            questions={
              this.state.checkup == 'Anxiety'
                ? anxietyQuestions
                : depressionQuestions
            }
            options={options}
            handleFinish={this.handleFinish}
          />
        </View>
      );
    } else if (this.state.screen == 'Finished') {
      if (this.state.checkup == 'Anxiety') {
        screen = (
          <View style={{flex: 1}}>
            <MenuButton />
            <View style={styles.one}>
              <Text style={{padding: 5}}>
                This self-assessment is used for screening and measuring
                severity of generalized anxiety disorder (GAD). However, it
                cannot be used as replacement for clinical assessment, and
                additional evaluation by a licensed health professional is
                needed to confirm a diagnosis of GAD. The results of this
                assessment can be used to help you track symptom changes, and
                make decisions about your health.
              </Text>
              <Text style={{padding: 5}}>
                The assessment is scored on a scale of 0-21. No matter your
                results, if you have any concern about your level of anxiety
                please contact a health professional.
              </Text>
              <Text style={{padding: 5}}>
                Your result is {this.state.result} indicating a{' '}
                {anxietyRange(this.state.result)} level of anxiety.
              </Text>
            </View>
            <View style={{flex: 1, justifyContent: 'space-around'}}>
              <View style={styles.row}>
                <Text style={styles.cell}>Minimal</Text>
                <Text style={styles.cell}>0-4</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.cell}>Mild</Text>
                <Text style={styles.cell}>5-9</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.cell}>Moderate</Text>
                <Text style={styles.cell}>10-14</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.cell}>Moderately Severe</Text>
                <Text style={styles.cell}>15-21</Text>
              </View>
            </View>
          </View>
        );
      } else if (this.state.checkup == 'Depression') {
        screen = (
          <View style={{flex: 1}}>
            <MenuButton />
            <View style={styles.one}>
              <Text style={{padding: 5}}>
                This self-assessment is used for screening and measuring
                severity of depression. However, it cannot be used as
                replacement for clinical assessment, and additional evaluation
                by a licensed health professional is needed to confirm a
                diagnosis of depression. The results of this assessment may be
                useful to help you track symptom changes, and assist you in
                making decisions about your health.
              </Text>
              <Text style={{padding: 5}}>
                The assessment is scored on a scale of 0-27. No matter your
                results, if you have any concern about your level of depression
                please contact a health professional.
              </Text>
              <Text style={{padding: 5}}>
                Your result is {this.state.result} indicating a{' '}
                {depressionRange(this.state.result)} level of depression.
              </Text>
            </View>
            <View style={{flex: 1, justifyContent: 'space-around'}}>
              <View style={styles.row}>
                <Text style={styles.cell}>Minimal</Text>
                <Text style={styles.cell}>0-4</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.cell}>Mild</Text>
                <Text style={styles.cell}>5-9</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.cell}>Moderate</Text>
                <Text style={styles.cell}>10-14</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.cell}>Moderately Severe</Text>
                <Text style={styles.cell}>15-19</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.cell}>Severe</Text>
                <Text style={styles.cell}>20-27</Text>
              </View>
            </View>
          </View>
        );
      }
    } else {
      screen = (
        <View style={styles.parent}>
          <MenuButton />
          <Button
            title="Anxiety Checkup"
            onPress={() =>
              this.setState({screen: 'Checkup', checkup: 'Anxiety'})
            }
          />
          <Button
            title="Depression Checkup"
            onPress={() =>
              this.setState({screen: 'Checkup', checkup: 'Depression'})
            }
          />
        </View>
      );
    }
    return screen;
  }
}
