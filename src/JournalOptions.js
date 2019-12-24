import React, {Fragment} from 'react';
import {
  Button,
  View,
  Text,
  Alert,
} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import MultiSelect from 'react-native-multiple-select';

class JournalOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItems: [],
        }
    }

    items = [
        {
            id: '0',
            emotion: 'Happy',
        }, 
        {
            id: '1',
            emotion: 'Sad',
        }, 
        ];

    onSelectedItemsChange = item => {
        this.setState({ selectedItems: item });
    };

    static navigationOptions = {
        title: 'How did you feel?',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <MultiSelect
                    hideTags
                    items={this.items}
                    uniqueKey="id"
                    ref={(component) => { this.multiSelect = component }}
                    onSelectedItemsChange={ this.onSelectedItemsChange }
                    selectedItems={ selectedItems }
                    selectText="***"
                    searchInputPlaceholderText="What did you feel?"
                    onChangeInput={ (text) => console.log(text) }
                    tagRemoveIconColor="#CCC"
                    tagBorderColor="#CCC"
                    tagTextColor="#CCC"
                    selectedItemIconColor="#CCC"
                    selectedItemTextColor="#CCC"
                    itemTextColor="#000"
                    displayKey="name"
                    searchInputStyle={{ color: '#CCC' }}
                    submitButtonColor="#CCC"
                    submitButtonText="Submit"
                />
                <View>
                    {this.multiSelect.getSelectedItemsExt(selectedItems)}
                </View>
            </View>
        )
    }
}

export default JournalOptions;
