import React from 'react';
import {Linking, ScrollView, Text} from 'react-native';
import {styles} from '../../../styles/InformationStyles';
import MenuButton from '../../../Components/MenuButton';

class What extends React.Component {
  static navigationOptions = {
    drawerLabel: 'What is Anxiety?',
    title: 'What is Anxiety?',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={{flex: 1}}>
        <MenuButton />
        <Text style={styles.p}>
          Anxiety is an emotion characterized by feelings of tension, worried
          thoughts and physical changes like increased blood pressure. Most
          people feel anxious at some point in life, for example, right before a
          presentation. However, anxiety that lasts a long period of time, or is
          so overwhelming that it interferes with daily activities may become a
          serious problem.
        </Text>
        <Text style={styles.p}>
          Anxiety disorders are common, they affect 1 in 5 people every year.
          Examples of anxiety disorders include{' '}
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL(
                'https://adaa.org/understanding-anxiety/generalized-anxiety-disorder-gad',
              )
            }>
            generalized anxiety disorder (GAD)
          </Text>
          ,{' '}
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL(
                'https://adaa.org/understanding-anxiety/panic-disorder',
              )
            }>
            panic disorder and panic attacks
          </Text>
          ,{' '}
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL(
                'https://adaa.org/understanding-anxiety/social-anxiety-disorder',
              )
            }>
            social anxiety disorder (social phobia)
          </Text>
          , and{' '}
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL(
                'https://adaa.org/understanding-anxiety/specific-phobias',
              )
            }>
            specific phobias
          </Text>
          .
        </Text>
        <Text style={styles.p}>Did you know?</Text>
        <Text style={styles.blockquote}>
          Approximately 16% of Black women reported having generalized anxiety
          disorder in their lifetime. However, due to underreporting and
          misdiagnosis the true rate may be a lot higher.
        </Text>
      </ScrollView>
    );
  }
}

export default What;
