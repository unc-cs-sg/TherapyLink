import React, {Fragment} from 'react';
import {
  Button,
  View,
  Text,
  Alert,
} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';

const radio_props = [
    {label: 'Happy', value: 0},
    {label: 'Sad', value: 1},
    {label: 'Excited', value: 2},
]

class DiaryOptions extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     happy: false,
        //     sad: false,
        //     excited: false,
        // };
    }

    update(value) {
        this.setState({value: value});
    }

    static navigationOptions = {
        title: 'How did you feel?',
    };

    submitListener = () => {
        const {happy} = this.radio_props[0].value;
        const {sad} = this.radio_props[1].value;
        const {excited} = this.radio_props[2].value;
        Alert.alert("happy: " + happy);
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <RadioForm radio_props={radio_props} initial={0} onPress={(value) => this.update(value)} />
                <Button title="Test Value" onPress={this.submitListener}>

                </Button>
            </View>
        )
    }
}

export default DiaryOptions;
