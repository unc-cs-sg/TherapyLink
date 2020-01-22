import React, { Fragment } from 'react';
import {
    Button,
    View,
    Text,
    Alert,
    ScrollView,
} from 'react-native';
import MultiSelect from 'react-native-multiple-select';

const items = [
    {
        id: '0',
        name: 'Angry',
        isNeg: true,
    },
    {
        id: '1',
        name: 'Anxious',
        isNeg: true,
    },
    {
        id: '2',
        name: 'Ashamed',
        isNeg: true,
    },
    {
        id: '3',
        name: 'Awkward',
        isNeg: true,
    },
    {
        id: '4',
        name: 'Calm',
        isNeg: false,
    },
    {
        id: '5',
        name: 'Confused',
        isNeg: true,
    },
    {
        id: '6',
        name: 'Disgusted',
        isNeg: true,
    },
    {
        id: '7',
        name: 'Empty',
        isNeg: true,
    },
    {
        id: '8',
        name: 'Excited',
        isNeg: false,
    },
    {
        id: '9',
        name: 'Guilty',
        isNeg: true,
    },
    {
        id: '10',
        name: 'Happy',
        isNeg: false,
    },
    {
        id: '11',
        name: 'Hopeful',
        isNeg: false,
    },
    {
        id: '12',
        name: 'Hopeless',
        isNeg: true,
    },
    {
        id: '13',
        name: 'Jealous',
        isNeg: true,
    },
    {
        id: '14',
        name: 'Motivated',
        isNeg: false,
    },
    {
        id: '15',
        name: 'Overwhelmed',
        isNeg: true,
    },
    {
        id: '16',
        name: 'Sad',
        isNeg: true,
    },
    {
        id: '18',
        name: 'Scared',
        isNeg: true,
    },
    {
        id: '19',
        name: 'Surprised',
        isNeg: false,
    },
    {
        id: '20',
        name: 'Worthless',
        isNeg: true,
    },
];
const itemsObjects = {
    "Angry": {
        id: '0',
        name: 'Angry',
        isNeg: true,
    },
    "Anxious": {
        id: '1',
        name: 'Anxious',
        isNeg: true,
    },
    "Ashamed": {
        id: '2',
        name: 'Ashamed',
        isNeg: true,
    },
    "Awkward": {
        id: '3',
        name: 'Awkward',
        isNeg: true,
    },
    "Calm": {
        id: '4',
        name: 'Calm',
        isNeg: false,
    },
    "Confused": {
        id: '5',
        name: 'Confused',
        isNeg: true,
    },
    "Disgusted": {
        id: '6',
        name: 'Disgusted',
        isNeg: true,
    },
    "Empty": {
        id: '7',
        name: 'Empty',
        isNeg: true,
    },
    "Excited": {
        id: '8',
        name: 'Excited',
        isNeg: false,
    },
    "Guilty": {
        id: '9',
        name: 'Guilty',
        isNeg: true,
    },
    "Happy": {
        id: '10',
        name: 'Happy',
        isNeg: false,
    },
    "Hopeful": {
        id: '11',
        name: 'Hopeful',
        isNeg: false,
    },
    "Hopeless": {
        id: '12',
        name: 'Hopeless',
        isNeg: true,
    },
    "Jealous": {
        id: '13',
        name: 'Jealous',
        isNeg: true,
    },
    "Motivated": {
        id: '14',
        name: 'Motivated',
        isNeg: false,
    },
    "Overwhelmed": {
        id: '15',
        name: 'Overwhelmed',
        isNeg: true,
    },
    "Sad": {
        id: '16',
        name: 'Sad',
        isNeg: true,
    },
    "Scared": {
        id: '18',
        name: 'Scared',
        isNeg: true,
    },
    "Surprised": {
        id: '19',
        name: 'Surprised',
        isNeg: false,
    },
    "Worthless": {
        id: '20',
        name: 'Worthless',
        isNeg: true,
    },
};

class JournalOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedItems: [], selectedItemObjects: [], };
    }

    static navigationOptions = {
        title: 'How did you feel?',
    };

    hasNegativeEmotion = () => {
        const { selectedItemObjects } = this.state;
        for (let i = 0; i < selectedItemObjects.length; ++i) {
            if (selectedItemObjects[i].isNeg) {
                return true;
            }
        }
        return false;
    }

    onSelectedItemsChange = selectedItems => {
        this.setState({ selectedItems });
        console.log(selectedItems);
    };

    onSelectedItemsSubmit = () => {
        const { selectedItems } = this.state;
        
        this.setState({selectedItemObjects: []});

        selectedItems.forEach(val => {
            this.setState(prevState => ({
                selectedItemObjects: [...prevState.selectedItemObjects, items[val]]
            }));
        });
    }

    handleNavigation = () => {
        const { navigate } = this.props.navigation;
        const { navigation } = this.props;
        const { selectedItemObjects } = this.state;
        if (this.hasNegativeEmotion()) {
            navigate('NegativeEmotionPanel', { JournalEntry: navigation.getParam('JournalEntry', null), emotionData: selectedItemObjects });
        } else {
            navigate('JournalSummary', { JournalEntry: navigation.getParam('JournalEntry', null), emotionData: selectedItemObjects, isPositive: true });
        }
    }

    componentWillUnmount = () => {
        this.willFocusSubscription.remove();
    }

    componentDidMount = () => {
        this.willFocusSubscription = this.props.navigation.addListener(
            'willFocus',
            payload => {
                this.setState(this.baseState);
                const { navigation } = this.props;
                const emotionData = navigation.getParam('emotionData', []);
                console.log(emotionData);

                let emotionState = emotionData.map((
                    emotion => itemsObjects[emotion].id
                ));

                console.log("emotionState: " + emotionState);

                this.setState({ selectedItems: emotionState });
            }
        );
    }

    // Have to test two cases: creating a new entry and updating an entry since not sure if update will change emotionState to trigger function

    // componentDidUpdate will not be called on initial render
    // This method is called whenever the state changes following
    // initial render. VERY USEFUL FOR THIS CURRENT CASE 
    componentDidUpdate = (prevProps, prevState) => {
        const { navigate } = this.props.navigation;
        if (prevState.selectedItemObjects !== this.state.selectedItemObjects) {
            console.log("selectedItemObjects updated!");
            console.log(this.state.selectedItemObjects);
            this.handleNavigation();
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        const { selectedItems } = this.state;

        return (
            <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}>
                <MultiSelect
                    hideTags
                    items={items}
                    uniqueKey="id"
                    ref={(component) => { this.multiSelect = component }}
                    onSelectedItemsChange={this.onSelectedItemsChange}
                    selectedItems={selectedItems}
                    selectText="Pick Items"
                    searchInputPlaceholderText="What did you feel?"
                    onChangeInput={(text) => console.log(text)}
                    tagRemoveIconColor="#CCC"
                    tagBorderColor="rgb(0, 255, 100)"
                    tagTextColor="rgb(0, 200, 240)"
                    selectedItemIconColor="rgb(0, 255, 100)"
                    selectedItemTextColor="rgb(0, 255, 100)"
                    itemTextColor="#000"
                    displayKey="name"
                    searchInputStyle={{ color: '#CCC' }}
                    submitButtonColor="#CCC"
                    submitButtonText="Submit"
                />
                <View>
                    {this.multiSelect ? this.multiSelect.getSelectedItemsExt(selectedItems) : null}
                </View>
                <Button title="Save" onPress={() => {
                    this.onSelectedItemsSubmit();
                }} />
            </ScrollView>
        )
    }
}

export default JournalOptions;
