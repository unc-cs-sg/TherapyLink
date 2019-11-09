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


class Resources extends React.Component {
  static navigationOptions = {
    title: 'Resources',
  };
  // render() {
  //   const {navigate} = this.props.navigation;
  //   return <Button title="Go Home" onPress={() => navigate('MainScreen')}/>;
  // }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <Text style={styles.sectionTitle}>Find a Therapist</Text>
        <Button title="Therapy for Black Girls Therapist Directory" onPress={() => Linking.openURL('https://www.therapyforblackgirls.com/gd_therapist/')} />
        <Button title=" Psychology Today" onPress={() => Linking.openURL('https://www.psychologytoday.com/us')} />
        <Button title="SAMHSA Treatment Locator" onPress={() => Linking.openURL('https://www.findtreatment.samhsa.gov/')} />
        
        <Text style={styles.sectionTitle}>Mental Health Information</Text>
        <Button title="The Boris Lawerence Henson Foundation" onPress={() => Linking.openURL('https://borislhensonfoundation.org/')} />
        <Button title="Therapy for Black Girls" onPress={() => Linking.openURL('https://www.therapyforblackgirls.com/')} />
        <Button title="National Alliance on Mental Illness" onPress={() => Linking.openURL('https://www.nami.org/find-support/diverse-communities/african-americans')} />
        <Button title="National Institute of Mental Health" onPress={() => Linking.openURL('https://www.nimh.nih.gov/health/topics/index.shtml')} />
        
        <Text style={styles.sectionTitle}>Podcasts</Text>
        <Button title="Therapy for Black Girls" onPress={() => Linking.openURL('https://www.therapyforblackgirls.com/podcast/')} />
        <Button title="Oprah’s SuperSoul Conversations" onPress={() => Linking.openURL('http://www.supersoul.tv/')} />
        <Button title="Affirm" onPress={() => Linking.openURL('https://www.redefineenough.com/affirmpodcast')} />
        <Button title="Balanced Black Girl" onPress={() => Linking.openURL('https://balancedblackgirl.libsyn.com/')} />

        
        <Text style={styles.sectionTitle}>Financial Assistance</Text>
        <Button title=" US Department of Health & Human Services - Social Services" onPress={() => Linking.openURL('https://www.hhs.gov/programs/social-services/index.html')} />
        <Button title="HealthCare.gov" onPress={() => Linking.openURL('https://www.healthcare.gov/')} />
        <Button title="Needhelppayingbills.com" onPress={() => Linking.openURL('https://www.needhelppayingbills.com/')} />
        <Button title=" Medicine Assistance Tool " onPress={() => Linking.openURL('https://medicineassistancetool.org/')} />
        <Button title="Scholarships.com" onPress={() => Linking.openURL('https://www.scholarships.com/')} />

        <Text style={styles.sectionTitle}>Sucicide Crisis</Text>
        <Button title="The American Foundation for Suicide Prevention " onPress={() => Linking.openURL('https://afsp.org/')} />
        <Button title="The National Domestic Violence Hotline " onPress={() => Linking.openURL('https://www.thehotline.org/')} />
        <Button title="The Suicide Prevention Lifeline" onPress={() => Linking.openURL('https://suicidepreventionlifeline.org/')} />

        <Text style={styles.sectionTitle}>Counseling Benefits through your Employer</Text>
        <Text style={styles.body}>
        Employee Assistance Program (EAP) is a voluntary, work-based program that offers free and 
        confidential assessments, short-term counseling, referrals, 
        and follow-up services to employees who have personal and/or work-related problems</Text>
      </ScrollView>
    );
  };

  
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


export default Resources;
