import React, {Fragment} from 'react';
import {
  Button,
  View,
  Text,
  Alert,
} from 'react-native';
import MultiSelect from 'react-native-multiple-select';

const items = [
    {
        id: 'Angry',
        name: 'Angry',
    }, 
    {
        id: '1',
        name: 'Anxious',
    }, 
    {
        id: '2',
        name: 'Ashamed',
    }, 
    {
        id: '3',
        name: 'Awkward',
    }, 
    {
        id: '4',
        name: 'Calm',
    }, 
    {
        id: '5',
        name: 'Confused',
    }, 
    {
        id: '6',
        name: 'Disgusted',
    }, 
    {
        id: '7',
        name: 'Empty',
    }, 
    {
        id: '8',
        name: 'Excited',
    }, 
    {
        id: '9',
        name: 'Guilty',
    }, 
    {
        id: '10',
        name: 'Happy',
    }, 
    {
        id: '11',
        name: 'Hopeful',
    }, 
    {
        id: '12',
        name: 'Hopeless',
    }, 
    {
        id: '13',
        name: 'Jealous',
    }, 
    {
        id: '14',
        name: 'Motivated',
    }, 
    {
        id: '15',
        name: 'Overwhelmed',
    }, 
    {
        id: '16',
        name: 'Sad',
    }, 
    {
        id: '17',
        name: 'Scared',
    }, 
    {
        id: '18',
        name: 'Surprised',
    }, 
    {
        id: '19',
        name: 'Worthless',
    }, 
    ];

class JournalOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedItems: [], };
    }

    static navigationOptions = {
        title: 'How did you feel?',
    };

    onSelectedItemsChange = selectedItems => {
        this.setState({ selectedItems });
        console.log(selectedItems);
    };

    render() {
        const {navigate} = this.props.navigation;
        const {selectedItems} = this.state;
        return (
            <View style={{ flex: 1, paddingHorizontal: 20 }}>
                <MultiSelect
                    hideTags
                    items={items}
                    uniqueKey="id"
                    ref={(component) => { this.multiSelect = component }}
                    onSelectedItemsChange={ this.onSelectedItemsChange }
                    selectedItems={ selectedItems }
                    selectText="Pick Items"
                    searchInputPlaceholderText="What did you feel?"
                    onChangeInput={ (text) => console.log(text) }
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
                <Button title="Save" onPress={() => navigate('JournalEntry', {
                    emotions: selectedItems,
                })}/>
            </View>
        )
    }
}

export default JournalOptions;
