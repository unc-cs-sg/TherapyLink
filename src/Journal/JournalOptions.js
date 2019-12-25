import React, {Fragment} from 'react';
import {
  Button,
  View,
  Text,
  Alert,
} from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import EmotionSelector from './EmotionSelector.js';

class JournalOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    static navigationOptions = {
        title: 'How did you feel?',
    };

    render() {
        const {navigate} = this.props.navigation;
        const {selectedItems} = this.state;
        return (
            <View style={{ flex: 1 }}>
                <EmotionSelector />
            </View>
        )
    }
}

export default JournalOptions;
