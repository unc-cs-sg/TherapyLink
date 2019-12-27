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


class FindATherapist extends React.Component {


    static navigationOptions = {
        title: 'Find a Therapist',
    };

    render() {
        const {navigate} = this.props.navigation;

        return (
          <ScrollView>
            <View style={resourcesStyles.resourceContainer}>
              <View style={resourcesStyles.resourceButtons}>
                  <Button color="#333CEA" title="Therapy for Black Girls Therapist Directory" onPress={() => Linking.openURL('https://www.therapyforblackgirls.com/gd_therapist/')} />
              </View>
              <View style={resourcesStyles.resourceButtons}>
                  <Button color="#333CEA" title=" Psychology Today" onPress={() => Linking.openURL('https://www.psychologytoday.com/us')} />
              </View>
              <View style={resourcesStyles.resourceButtons}>
                  <Button color="#333CEA" title="SAMHSA Treatment Locator" onPress={() => Linking.openURL('https://www.findtreatment.samhsa.gov/')} />
              </View>
            </View>
          </ScrollView>
        );
      };

}

export default FindATherapist;