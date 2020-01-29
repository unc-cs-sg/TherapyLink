import React from 'react';
import {Linking, ScrollView, Text} from 'react-native';
import {styles} from '../../../styles/InformationStyles.js';
import MenuButton from '../../../Components/MenuButton.js';

class What extends React.Component {
  static navigationOptions = {
    drawerLabel: 'What is Depression?',
    title: 'What is Depression?',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={{flex: 1}}>
        <MenuButton />
        <Text style={styles.p}>
          Everyone experiences sadness at some point in life, however depression
          is more than feeling sad for a day or two. Depression, also known as
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL(
                'https://www.mayoclinic.org/diseases-conditions/depression/symptoms-causes/syc-20356007',
              )
            }>
            major depressive disorder
          </Text>{' '}
          or clinical depression, is overwhelming sadness or despair that lasts
          more than a few days. Depression affects how you feel, think, and
          which can interfere with your daily activities. For example, you may
          find yourself canceling social activities with friends to stay home
          alone.
        </Text>
        <Text style={styles.p}>
          Depression is one of the most common mental disorders in the United
          States. It’s estimated that 15.7 million adults in the U.S.
          experienced at least one major depressive episode. Depression isn't a
          weakness and you can't simply "snap out" of it. Don't get discouraged,
          you can overcome depression and you don’t have to do it alone.
        </Text>
        <Text style={styles.p}>Did you know?</Text>
        <Text style={styles.blockquote}>
          Approximately 27% of Black women reported experiencing depression in
          their lifetime.
        </Text>
      </ScrollView>
    );
  }
}

export default What;
