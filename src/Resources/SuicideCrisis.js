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


class SuicideCrisis extends React.Component {

    static navigationOptions = {
        title: 'Suicide Crisis',
    };

    render() {
        const {navigate} = this.props.navigation;

        return (

          <ScrollView>
            <View style={resourcesStyles.resourceContainer}>
              <View style={resourcesStyles.resourceButtons}>
                  <Button color="#333CEA" title="The American Foundation for Suicide Prevention " onPress={() => Linking.openURL('https://afsp.org/')} />
              </View>
              <View style={resourcesStyles.resourceButtons}>
                  <Button color="#333CEA" title="The National Domestic Violence Hotline " onPress={() => Linking.openURL('https://www.thehotline.org/')} />
              </View>
              <View style={resourcesStyles.resourceButtons}>
                  <Button color="#333CEA" title="The Suicide Prevention Lifeline" onPress={() => Linking.openURL('https://suicidepreventionlifeline.org/')} />
              </View>
            </View>
          </ScrollView>
        );
      };

}

export default SuicideCrisis;