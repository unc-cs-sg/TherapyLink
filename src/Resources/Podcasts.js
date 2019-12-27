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


class Podcasts extends React.Component {

    static navigationOptions = {
        title: 'Podcasts',
    };

    render() {
        const {navigate} = this.props.navigation;

        return (
          <ScrollView>
            <View style={resourcesStyles.resourceContainer}>
              <View style={resourcesStyles.resourceButtons}>
                <Button color="#333CEA" title="Therapy for Black Girls" onPress={() => Linking.openURL('https://www.therapyforblackgirls.com/podcast/')} />
              </View>
              <View style={resourcesStyles.resourceButtons}>
                <Button color="#333CEA" title="Oprah’s SuperSoul Conversations" onPress={() => Linking.openURL('http://www.supersoul.tv/')} />
              </View>
              <View style={resourcesStyles.resourceButtons}>
                <Button color="#333CEA" title="Affirm" onPress={() => Linking.openURL('https://www.redefineenough.com/affirmpodcast')} />
              </View>
              <View style={resourcesStyles.resourceButtons}>
                <Button color="#333CEA" title="Balanced Black Girl" onPress={() => Linking.openURL('https://balancedblackgirl.libsyn.com/')} />
              </View>
            </View>

          </ScrollView>
        );
      };

}

export default Podcasts;