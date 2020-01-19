import React, {Fragment} from 'react';
import {
  Button,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
  FlatList,
  PushNotificationIOS,
} from 'react-native';
import {diaryStyles} from '../styles/DiaryStyles.js';
import Icon from '../../node_modules/react-native-ionicons';
import {db, selectAllEntries, removeEntry} from '../Database.js';

class Journal extends React.Component {
  constructor(props) {
    super(props);
    // When we navigate to a stored entry, populate the journal entry page with
    // the information from the database
    this.state = {
      data: [],
    };
  }

  ListSeparator = () => {
    return (
      <View
        style={{
          height: 0.2,
          width: '100%',
          backgroundColor: '#34c0eb',
          padding: 5,
        }}
      />
    );
  };

  static navigationOptions = {
    title: 'Journal',
  };

  removeEntry = id => {
    db.transaction(t => {
      removeEntry(t, id);
    });
  };

  // Workaround to make sure entry list refreshes when we go back from journal entry
  refreshComponent = () => {
    db.transaction(t => {
      selectAllEntries(t, results => this.setState(results));
    });
  };

  componentDidMount = () => {
    db.transaction(t => {
      selectAllEntries(t, results => this.setState(results));
    });
  };

  // Don't call setState() in render! This causes an infinite loop xD
  render() {
    const {navigate} = this.props.navigation;
    const {navigation} = this.props;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: '#34c0eb',
          paddingVertical: 10,
          paddingBottom: 100,
        }}>
        <TouchableOpacity
          style={{
            alignSelf: 'flex-end',
            alignSelf: 'center',
            position: 'absolute',
            bottom: 35,
            width: 50,
            height: 50,
            borderRadius: 50 / 2,
            backgroundColor: '#34ebd6',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
          }}
          onPress={() => navigate('JournalEntry', {JournalIndex: this})}>
          <Icon name="add" color={'#FFF'} />
        </TouchableOpacity>

        <FlatList
          data={this.state.data}
          ItemSeparatorComponent={this.ListSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View
              style={{
                padding: 10,
                marginTop: 10,
                elevation: 5,
                marginHorizontal: 10,
                backgroundColor: 'white',
              }}
              key={item.entry_id}>
              <Text>Title: {item.title}</Text>
              <Text>Date Added: {item.date_added}</Text>
              <Text>Comment: {item.user_comment}</Text>
              <Text>Emotions: {item.emotions}</Text>
              <Button
                title=">"
                onPress={() =>
                  navigate('JournalEntry', {
                    JournalIndex: this,
                    title: item.title,
                    comment: item.user_comment,
                    id: item.entry_id,
                  })
                }
              />
              <Button
                title="x"
                onPress={() => {
                  this.removeEntry(item.entry_id);
                  this.refreshComponent();
                }}
              />
            </View>
          )}
        />
      </View>
    );
  }
}

export default Journal;
