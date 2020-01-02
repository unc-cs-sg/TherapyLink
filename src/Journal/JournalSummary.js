import React, { Fragment, Component } from 'react';
import {
    View,
    Text,
} from 'react-native';

class JournalSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isYes: false,
        };
    }

    createMessage = () => {
        return (
            this.state.isYes ?
                <Text>
                    Having a plan is the first step in improving or avoiding negative experiences. Good job on thinking through what you can do to make the situation better or avoid it from happening in the future.
                </Text> :
                <Text>
                    There are some things in life that are out of your control, you can only choose how you respond to them. However, there are some situations that you can improve or avoid in the future, possibly with help from others. Take some time to reflect on if this situation is one that needs further action.
                </Text>
        );
    }

    componentDidMount = () => {
        this.setState({ isYes: this.props.navigation.getParam('isYes', false) });
    }

    render() {
        return (
            <View>
                {this.createMessage()}
            </View>
        )
    }
}

export default JournalSummary;