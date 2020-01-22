import React, {Fragment} from 'react';
import {
  Linking,
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MenuButton from '../Components/MenuButton';

class CounselingBenefits extends React.Component {
  static navigationOptions = {
    title: 'Employer Sponsored Counseling Benefits',
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <ScrollView>
        <MenuButton />
        <Text style={styles.body}>
          Employee Assistance Program (EAP) is a voluntary, work-based program
          that offers free and confidential assessments, short-term counseling,
          referrals, and follow-up services to employees who have personal
          and/or work-related problems.
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    fontSize: 18,
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default CounselingBenefits;
