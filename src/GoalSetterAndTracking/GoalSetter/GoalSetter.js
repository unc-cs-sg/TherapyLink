import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';
import GoalCard from '../GoalCard/GoalCard'
import CreateGoalCardModal from '../GoalCard/CreateGoalCardModal'
//import datetimepicker for the calendar stuff
class GoalSetter extends React.Component {
  static navigationOptions = {
    title: 'Goal Setter',
  };


  constructor(props) {
      super(props)
      this.state = {
        displayModal: false,
        goalCards: {},
        editDetails: {
            title: '',
            date: '',
            content: '',
            hash: '',
            edit: false
        },
      }
  }

  displayModal = () => {
    this.setState({
        displayModal: !this.state.displayModal,
    })
  }

  addGoalCard = (title, content, date) => {
    let i = 0;
    let h = this.hash(date + title + i);
    while (this.state.goalCards[h]) {
        i++;
        h = this.hash(date+title+i);
    }

    let replacement = {title: title, content: content, date: date, hash: h};
    let goalCardsReplacement = Object.assign({}, this.state.goalCards, {[h]: replacement});
    this.setState({
        goalCards: goalCardsReplacement
    });
  }

  hash = (string) => {
    let h = 7;
    for (let i = 0; i < string.length; i++) {
        h = h*31 + string.charCodeAt(i);
    }
    return h;
  }

  removeGoalCard = (hash) => {
    const {[hash]:value, ...goalCardsReplacement } = this.state.goalCards;
    this.setState({
        goalCards : goalCardsReplacement
    })
  }

  displayEditModal = (h) => {
    let newEditDetails = {
        hash: h,
        content: this.state.goalCards[h].content,
        title: this.state.goalCards[h].title,
        date: this.state.goalCards[h].date,
        edit: true
    }
    this.setState({
        displayModal: !this.state.displayModal,
        editDetails: newEditDetails
    })
  }

  editGoalCard = (title, content, date, oldHash) => {
    const {[oldHash]:value, ...goalCardsTrimmed } = this.state.goalCards;
    let i = 0;
    let h = this.hash(date + title + i);
    while (this.state.goalCards[h]) {
        i++;
        h = this.hash(date+title+i);
    }
    let replacement = {title: title, content: content, date: date, hash: h};
    let goalCardsReplacement = Object.assign({}, goalCardsTrimmed, {[h]: replacement});
    let newEditDetails = {
        title: '',
        date: '',
        content: '',
        hash: '',
        edit: false,
    }
    this.setState({
        editDetails: newEditDetails,
        goalCards: goalCardsReplacement,
    });
  }

  setFinished = (hash) => {
    console.log('finished' + hash);
  }


  componentDidMount() {
    // fetch() to get all the current goals from server and then add them to the state

  }


  render() {
    // return a goal card for each goal that was obtained from the server in componentDidMount
    const {navigate} = this.props.navigation;
    return (
        <View>
            {(this.state.displayModal)
                ?
                    <CreateGoalCardModal displayModal = {() => this.displayModal()} setModalVisible = {this.state.displayModal} addCardFunction = {(title, content, date) => this.addGoalCard(title, content, date)} title={this.state.editDetails.title} content={this.state.editDetails.content} date={this.state.editDetails.date} edit = {this.state.editDetails.edit} oldHash= {this.state.editDetails.hash} editCardFunction = {(title, content, date, oldHash) => this.editGoalCard(title, content, date, oldHash)}/>
                :
                    null
            }
            <Button title="Go Home" onPress={() => navigate('MainScreen')} />
            <Button title="Create Goal" onPress={this.displayModal} />
            <Text style={styles.sectionTitle}>Relax</Text>
            {Object.keys(this.state.goalCards).map((i) => {
                return (
                    <GoalCard key={this.state.goalCards[i].hash} title={this.state.goalCards[i].title} content = {this.state.goalCards[i].content} date = {this.state.goalCards[i].date} hash = {this.state.goalCards[i].hash} editCardFunction={(hash) => this.displayEditModal(hash)} setFinishedFunction = {(hash) => this.setFinished(hash)} deleteCardFunction = {(hash) => this.removeGoalCard(hash)} />
                );
            })}
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
})

export default GoalSetter;
