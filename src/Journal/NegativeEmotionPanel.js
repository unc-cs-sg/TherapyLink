import React, { Fragment, Component } from 'react';
import {
    Button,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    Alert
} from 'react-native';


class NegativeEmotionPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmed: false
        }
    }

    static navigationOptions = {
        title: ''
    }

    render() {
        const { navigate } = this.props.navigation;
        const { navigation } = this.props;
        return (
            <View style={{ alignItems: 'center', }}>
                <Text style={{ marginHorizontal: 20, fontWeight: 'bold', fontSize: 20, }}>
                    Is there anything you can do to make the situation better, or avoid it from happening in the future?
                </Text>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity style={{ height: 20, backgroundColor: '#07fc03', marginHorizontal: 20, padding: 20, alignItems: 'center', justifyContent: 'center' }} onPress={() => navigate('SituationalScreen')}>
                        <Text>Yes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: 20, backgroundColor: '#07fc03', marginHorizontal: 20, padding: 20, alignItems: 'center', justifyContent: 'center' }} onPress={() => navigate('JournalSummary', { JournalEntry: navigation.getParam('JournalEntry', null) })}>
                        <Text>No</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: 20, backgroundColor: '#07fc03', marginHorizontal: 20, padding: 20, alignItems: 'center', justifyContent: 'center' }} onPress={() => navigate('JournalSummary', { JournalEntry: navigation.getParam('JournalEntry', null) })}>
                        <Text>Don't know</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default NegativeEmotionPanel;