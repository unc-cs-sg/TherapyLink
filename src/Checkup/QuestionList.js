import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Question from './Question.js';

export default class QuestionList extends Component {
  constructor(props) {
    super(props);

    this.state = {questionIndex: 0, answers: []};
  }

  handleQuestionChange = optionIndex => {
    this.setState(
      (prevState, props) => {
        let answers = [...prevState.answers];
        answers[prevState.questionIndex] = optionIndex;
        return {questionIndex: prevState.questionIndex + 1, answers};
      },
      () => {
        if (this.state.answers.length == this.props.questions.length) {
          this.props.handleFinish(this.state.answers.reduce((s, i) => s + i));
        }
      },
    );
  };

  render() {
    return (
      <View>
        <Question
          question={this.props.questions[this.state.questionIndex]}
          options={this.props.options}
          handleChange={this.handleQuestionChange}
        />
      </View>
    );
  }
}
