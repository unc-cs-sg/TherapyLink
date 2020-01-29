import React from 'react';
import {ScrollView, Text} from 'react-native';
import {styles} from '../../../styles/InformationStyles';
import MenuButton from '../../../Components/MenuButton';

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
          Although the causes of anxiety disorders aren't completely understood,
          life experiences such as traumatic events appear to trigger anxiety
          disorders in people who are already prone to anxiety. Anxiety may also
          be linked to an underlying health issue. In some cases, anxiety signs
          and symptoms are the first signs of a physical illness (e.g. thyroid
          problems, such as hyperthyroidism).
        </Text>
        <Text style={styles.p}>Did you know?</Text>
        <Text style={styles.blockquote}>
          Many of the pressures that Black women experience, such as caregiving
          responsibilities for primary and extended family, financial hardship,
          as well as racism and sexism may cause extreme stress and lead to
          increased anxiety.
        </Text>
      </ScrollView>
    );
  }
}

export default Causes;
