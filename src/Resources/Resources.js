import React, {Fragment} from 'react';
import {
  Linking,
  View,
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

import {resourcesStyles} from '../styles/ResourcesStyles.js';
import MenuButton from '../Components/MenuButton.js';

class Resources extends React.Component {
  static navigationOptions = {
    title: 'Resources',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView>
        <MenuButton />
        <View style={resourcesStyles.categoryContainer}>
          <View style={resourcesStyles.categoryButtons}>
            <Button
              title="Mental Health Information"
              onPress={() => navigate('MentalHealthInfo')}
            />
          </View>

          <View style={resourcesStyles.categoryButtons}>
            <Button
              title="Find a Therapist"
              onPress={() => navigate('FindATherapist')}
            />
          </View>

          <View style={resourcesStyles.categoryButtons}>
            <Button title="Podcasts" onPress={() => navigate('Podcasts')} />
          </View>

          <View style={resourcesStyles.categoryButtons}>
            <Button
              title="Financial Assistance"
              onPress={() => navigate('FinancialAssist')}
            />
          </View>

          <View style={resourcesStyles.categoryButtons}>
            <Button
              title="Employer Sponsored Counseling Benefits"
              onPress={() => navigate('CounselingBenefits')}
            />
          </View>

          <View style={resourcesStyles.categoryButtons}>
            <Button
              title="Suicide Crisis"
              onPress={() => navigate('SuicideCrisis')}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
export default Resources;
