import React from 'react';
import {ScrollView, Text} from 'react-native';
import {styles} from '../../../styles/InformationStyles';
import MenuButton from '../../../Components/MenuButton';

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
        <Text style={styles.p}>Common anxiety signs and symptoms include:</Text>
        <Text style={styles.li}>
          {'\u2022'}
          Feeling nervous, restless or tense
        </Text>
        <Text style={styles.li}>
          {'\u2022'}
          Having a sense of impending danger, panic or doom{' '}
        </Text>
        <Text style={styles.li}>
          {'\u2022'}
          Having an increased heart rate{' '}
        </Text>
        <Text style={styles.li}>
          {'\u2022'}
          Breathing rapidly (hyperventilation){' '}
        </Text>
        <Text style={styles.li}>
          {'\u2022'}
          Sweating
        </Text>
        <Text style={styles.li}>
          {'\u2022'}
          Trembling
        </Text>
        <Text style={styles.li}>
          {'\u2022'}
          Feeling weak or tired
        </Text>
        <Text style={styles.li}>
          {'\u2022'}
          Trouble concentrating or thinking about anything other than what you
          are worried about
        </Text>
        <Text style={styles.li}>
          {'\u2022'}
          Having trouble sleeping
        </Text>
        <Text style={styles.li}>
          {'\u2022'}
          Experiencing gastrointestinal (GI) problems{' '}
        </Text>
        <Text style={styles.li}>
          {'\u2022'}
          Having difficulty controlling worry
        </Text>
        <Text style={styles.li}>
          {'\u2022'}
          Having difficulty controlling worry Having the urge to avoid things
          that trigger anxiety
        </Text>
      </ScrollView>
    );
  }
}

export default Symptoms;
