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

import {colors, resourcesStyles} from '../styles/ResourcesStyles.js';
import MenuButton from '../Components/MenuButton.js';

class FinancialAssist extends React.Component {
  static navigationOptions = {
    title: 'Financial Assistance',
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <ScrollView>
        <MenuButton />
        <View style={resourcesStyles.resourceContainer}>
          <View style={resourcesStyles.resourceButtons}>
            <Button
              color="#333CEA"
              title=" US Department of Health & Human Services - Social Services"
              onPress={() =>
                Linking.openURL(
                  'https://www.hhs.gov/programs/social-services/index.html',
                )
              }
            />
          </View>

          <View style={resourcesStyles.resourceButtons}>
            <Button
              color="#333CEA"
              title="HealthCare.gov"
              onPress={() => Linking.openURL('https://www.healthcare.gov/')}
            />
          </View>

          <View style={resourcesStyles.resourceButtons}>
            <Button
              color="#333CEA"
              title="Needhelppayingbills.com"
              onPress={() =>
                Linking.openURL('https://www.needhelppayingbills.com/')
              }
            />
          </View>

          <View style={resourcesStyles.resourceButtons}>
            <Button
              color="#333CEA"
              title=" Medicine Assistance Tool "
              onPress={() =>
                Linking.openURL('https://medicineassistancetool.org/')
              }
            />
          </View>

          <View style={resourcesStyles.resourceButtons}>
            <Button
              color="#333CEA"
              title="Scholarships.com"
              onPress={() => Linking.openURL('https://www.scholarships.com/')}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default FinancialAssist;
