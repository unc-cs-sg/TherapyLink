import React from 'react';
import {ScrollView, Text} from 'react-native';
import {styles} from '../../../styles/InformationStyles.js';
import MenuButton from '../../../Components/MenuButton.js';

class Tips extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Tips',
    title: 'Tips',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={{flex: 1}}>
        <MenuButton />
        <Text style={styles.p}>7 Tips to Help You Manage Anxiety</Text>
        <Text style={styles.li}>
          1. Fact-check your thoughts: Don’t fixate on worst-case scenarios,
          instead think about how realistic your fears are. Getting into the
          habit of challenging your thoughts and rethinking your fears helps
          train your mind to come up with a rational way to deal with your
          anxious thoughts.
        </Text>
        <Text style={styles.li}>
          2. Get good sleep: Aim for at least seven hours of sleep each night.
          Lack of sleep may affect your mood and concentration.
        </Text>
        <Text style={styles.li}>
          3. Exercise: Exercise for at least 30 minutes every day. Regular
          exercise has been shown to reduce stress, and improve mood and sleep.
        </Text>
        <Text style={styles.li}>
          4. Connect: Make time to connect with your friends. Many studies have
          shown that social support improves women’s mental well-being, helping
          to reduce stress.
        </Text>
        <Text style={styles.li}>
          5. Eat well: Healthy meals and snacks help keep your energy levels
          balanced, helping you better manage your daily activities.
        </Text>
        <Text style={styles.li}>
          6. Set boundaries: When possible, decline or delay response to
          requests that create unnecessary stress. Setting boundaries like not
          responding to email after work hours can help reduce stress.
        </Text>
        <Text style={styles.li}>
          7. Pray and Meditate: Prayer and meditation may help to improve
          anxiety symptoms by calming the mind.
        </Text>
      </ScrollView>
    );
  }
}

export default Tips;
