import React from 'react';
import {ScrollView, Text} from 'react-native';
import {styles} from '../../../styles/InformationStyles.js';
import MenuButton from '../../../Components/MenuButton.js';

class Tips extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Tips',
    title: 'Tips',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={{flex: 1}}>
        <MenuButton />
        <Text style={styles.p}>5 Tips to Help You Manage Depression</Text>
        <Text style={styles.li}>
          1. Connect: Reach out to a trusted family member or friend. You don’t
          have to deal with depression alone. Let someone know what you are
          going through so that they can offer emotional support.
        </Text>
        <Text style={styles.li}>
          2. Exercise: Exercise for at least 30 minutes every day. Regular
          exercise has been shown to reduce stress, and improve mood and sleep.
        </Text>
        <Text style={styles.li}>
          3. Journal: Write down your thoughts before bed to clear your mind.
          Journaling may improve your mood by allowing you to express sadness,
          pain, anger, fear or other emotions.
        </Text>
        <Text style={styles.li}>
          4. Self-care: Make time for self-care. Self-care is any activity that
          you do deliberately in order to take care of your mental, emotional,
          or physical health. It can be as simple as taking a nap, going to a
          yoga class, or reading a good book.
        </Text>
        <Text style={styles.li}>
          5. Pray and Meditate: Prayer and meditation may help to improve
          depression symptoms by calming the mind.
        </Text>
      </ScrollView>
    );
  }
}

export default Tips;
