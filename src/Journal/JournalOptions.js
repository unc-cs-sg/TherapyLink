import React, { Fragment } from 'react';
import {
    Button,
    View,
    Text,
    Alert,
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
        id: '17',
        name: 'Scared',
        isNeg: true,
    },
    {
        id: '18',
        name: 'Surprised',
        isNeg: false,
    },
    {
        id: '19',
        name: 'Worthless',
        isNeg: true,
    },
];

class JournalOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedItems: [], selectedItemObjects: [], };
        // console.log("item[0]: " + items[0].isNeg);
    }

    static navigationOptions = {
        title: 'How did you feel?',
    };

    onSelectedItemsSubmit = () => {
        const { selectedItems } = this.state;

        selectedItems.forEach(val => {
            this.setState(prevState => ({
                selectedItemObjects: [...prevState.selectedItemObjects, items[val]]
            }));
        });
    }

    onSelectedItemsChange = selectedItems => {
        this.setState({ selectedItems });
        console.log(selectedItems);
    };

    // componentDidUpdate will not be called on initial render
    // This method is called whenever the state changes following
    // initial render. VERY USEFUL FOR THIS CURRENT CASE 
    componentDidUpdate = (prevProps, prevState) => {
        const { navigate } = this.props.navigation;
        if (prevState.selectedItemObjects !== this.state.selectedItemObjects) {
            console.log("selectedItemObjects updated!");
            console.log(this.state.selectedItemObjects);
            navigate('JournalEntry', { emotions: this.state.selectedItemObjects });
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        const { selectedItems } = this.state;

        return (
            <View style={{ flex: 1, paddingHorizontal: 20 }}>
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
            </View>
        )
    }
}

export default JournalOptions;
