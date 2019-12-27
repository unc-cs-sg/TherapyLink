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



class MentalHealthInfo extends React.Component {
    /*constructor(props) {
        super(props);
        this.state = { }
    }*/

    static navigationOptions = {
        title: 'Mental Health Information',
    };

    render() {
        const {navigate} = this.props.navigation;
       // const {selectedItems} = this.state;

        return (
          <ScrollView>

            <Button title="Mental Health Information" onPress={() => navigate('MentalHealthInfo')} />

            <Text style={styles.sectionTitle}>Mental Health Information</Text>
            <Button title="The Boris Lawerence Henson Foundation" onPress={() => Linking.openURL('https://borislhensonfoundation.org/')} />
            <Button title="Therapy for Black Girls" onPress={() => Linking.openURL('https://www.therapyforblackgirls.com/')} />
            <Button title="National Alliance on Mental Illness" onPress={() => Linking.openURL('https://www.nami.org/find-support/diverse-communities/african-americans')} />
            <Button title="National Institute of Mental Health" onPress={() => Linking.openURL('https://www.nimh.nih.gov/health/topics/index.shtml')} />

          </ScrollView>
        );
      };
}

export default MentalHealthInfo;