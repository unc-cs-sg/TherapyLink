import React from 'react';
import {ScrollView, Text} from 'react-native';
import {styles} from '../../../styles/InformationStyles.js';
import MenuButton from '../../../Components/MenuButton.js';

class Symptoms extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Symptoms',
    title: 'Symptoms',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={{flex: 1}}>
        <MenuButton />
        <Text style={styles.p}>
          Common signs and symptoms of depression include:
        </Text>
        <Text style={styles.li}>
          {'\u2022'}
          Feelings of sadness, tearfulness, emptiness or hopelessness
        </Text>
        <Text style={styles.li}>
          {'\u2022'}
          Angry outbursts, irritability or frustration, even over small matters
        </Text>
        <Text style={styles.li}>
          {'\u2022'}
          Loss of interest or pleasure in most or all normal activities, such as
          sex, hobbies or sports
        </Text>
        <Text style={styles.li}>
          {'\u2022'}
          Sleep disturbances, including insomnia or sleeping too much
        </Text>
        <Text style={styles.li}>
          {'\u2022'}
          Tiredness and lack of energy, so even small tasks take extra effort
        </Text>
        <Text style={styles.li}>
          {'\u2022'}
          Reduced appetite and weight loss or increased cravings for food and
          weight gain
        </Text>
        <Text style={styles.li}>
          {'\u2022'}
          Anxiety, agitation or restlessness
        </Text>
        <Text style={styles.li}>
          {'\u2022'}
          Slowed thinking, speaking or body movements
        </Text>
        <Text style={styles.li}>
          {'\u2022'}
          Feelings of worthlessness or guilt, fixating on past failures or
          self-blame
        </Text>
        <Text style={styles.li}>
          {'\u2022'}
          Trouble thinking, concentrating, making decisions and remembering
          things
        </Text>
        <Text style={styles.li}>
          {'\u2022'}
          Frequent or recurrent thoughts of death, suicidal thoughts, suicide
          attempts or suicide
        </Text>
        <Text style={styles.li}>
          {'\u2022'}
          Unexplained physical problems, such as back pain or headaches
        </Text>
      </ScrollView>
    );
  }
}

export default Symptoms;
