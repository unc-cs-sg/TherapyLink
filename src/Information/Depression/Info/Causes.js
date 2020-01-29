import React from 'react';
import {Linking, ScrollView, Text} from 'react-native';
import {styles} from '../../../styles/InformationStyles.js';
import MenuButton from '../../../Components/MenuButton.js';

class Causes extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Causes',
    title: 'Causes',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={{flex: 1}}>
        <MenuButton />
        <Text style={styles.p}>
          A combination of biological, psychological, social and environmental
          factors may be involved in causing someone to have a major depressive
          episode. People who have a family history of depression are at an
          increased risk of depression. Hormonal changes in the body may also be
          involved in causing or triggering depression. Hormone changes can
          occur during pregnancy and during the months after delivery (
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL(
                'https://www.mayoclinic.org/diseases-conditions/postpartum-depression/symptoms-causes/syc-20376617',
              )
            }>
            postpartum depression
          </Text>
          ), from thyroid problems, menopause or other health conditions. Major
          life changes, trauma and stress can also trigger an episode of
          depression.
        </Text>
        <Text style={styles.p}>Did you know?</Text>
        <Text style={styles.blockquote}>
          The “Strong Black Woman” stereotype has led to harmful expectations
          that Black women present an image of strength and suppress their
          emotions. Feeling that you have to handle everything on your own and
          cannot show weakness can cause feelings of sadness and hopelessness,
          which increases the likelihood of triggering a major depressive
          episode.
        </Text>
      </ScrollView>
    );
  }
}

export default Causes;
