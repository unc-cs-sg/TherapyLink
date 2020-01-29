import React from 'react';
import {ScrollView, Text} from 'react-native';
import {styles} from '../../../styles/InformationStyles.js';
import MenuButton from '../../../Components/MenuButton.js';

class Treatments extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Treatments',
    title: 'Treatments',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={{flex: 1}}>
        <MenuButton />
        <Text style={styles.p}>
          The most effective types of treatment for anxiety are psychotherapy
          and medication.
        </Text>
        <Text style={styles.italic}>Psychotherapy</Text>
        <Text style={styles.p}>
          Psychotherapy is also known as talk therapy or psychological
          counseling. In psychological counseling you will work with a therapist
          to reduce your anxiety symptoms. Cognitive behavioral therapy (CBT) is
          the most effective form of psychotherapy for anxiety disorders. CBT
          specifically targets your thoughts, physical symptoms and behaviors,
          and focuses on teaching you specific skills to improve your symptoms.
          Mindfulness based approaches and Acceptance Commitment Therapy have
          also been shown to have positive outcomes.
        </Text>
        <Text style={styles.italic}>Medications</Text>
        <Text style={styles.p}>
          There are many types of medications that are used to effectively
          relieve anxiety symptoms. Antidepressants such as SSRIs, may be
          prescribed to reduce symptoms of anxiety over a longer period of time.
          Benzodiazepines or beta blockers may be prescribed for short-term use
          to relieve anxiety symptoms.
        </Text>
        <Text style={styles.italic}>Alternative Treatments</Text>
        <Text style={styles.p}>
          Relaxation techniques, meditation, yoga, exercise, and other
          alternative treatments may also be recommended to relieve anxiety
          symptoms.
        </Text>
      </ScrollView>
    );
  }
}

export default Treatments;
