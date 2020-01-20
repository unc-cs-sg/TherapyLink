import React, { Fragment, Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import Icon from 'react-native-ionicons';

class SituationalScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    static navigationOptions = {
        title: '',
    }

    render() {
        const { navigation } = this.props;
        const { navigate } = this.props.navigation;
        return (
            <View style={{ alignItems: 'center', }}>
                <Text style={{ marginHorizontal: 20, fontWeight: 'bold', fontSize: 20, }}>
                    What do you think can be done to make the situation better?
                </Text>
                <TextInput style={{ textAlignVertical: 'top', width: '80%' }} placeholder="Write out your thoughts..." multiline={true} numberOfLines={10} onChangeText={text => this.setState({ text })} value={this.state.text} />
                <TouchableOpacity onPress={() => { navigate('JournalSummary', { JournalEntry: navigation.getParam('JournalEntry', null), isPositive: true, emotionData: navigation.getParam('emotionData', []), userThought: this.state.text }) }}>
                    <Icon name="arrow-forward" />
                </TouchableOpacity>
            </View>
        );
    }
}

export default SituationalScreen;