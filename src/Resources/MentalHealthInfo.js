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


class MentalHealthInfo extends React.Component {


    static navigationOptions = {
        title: 'Mental Health Information',
    };

    render() {
        const {navigate} = this.props.navigation;

        return (
          <ScrollView>
            <View style={resourcesStyles.resourceContainer}>
              <View style={resourcesStyles.resourceButtons}>
                <Button color="#333CEA" title="The Boris Lawerence Henson Foundation" onPress={() => Linking.openURL('https://borislhensonfoundation.org/')} />
              </View>
              <View style={resourcesStyles.resourceButtons}>
                <Button color="#333CEA" title="Therapy for Black Girls" onPress={() => Linking.openURL('https://www.therapyforblackgirls.com/')} />
              </View>
              <View style={resourcesStyles.resourceButtons}>
                <Button color="#333CEA" title="National Alliance on Mental Illness" onPress={() => Linking.openURL('https://www.nami.org/find-support/diverse-communities/african-americans')} />
              </View>
              <View style={resourcesStyles.resourceButtons}>
                <Button color="#333CEA" title="National Institute of Mental Health" onPress={() => Linking.openURL('https://www.nimh.nih.gov/health/topics/index.shtml')} />
              </View>
            </View>
          </ScrollView>
        );
      };

}

export default MentalHealthInfo;