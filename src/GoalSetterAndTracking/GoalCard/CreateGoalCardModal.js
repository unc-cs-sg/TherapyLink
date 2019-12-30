//Ram Sudarsan 2019

import React from 'react';
import {Button,
Modal,
View,
ScrollView,
Text,
TouchableHighlight,
StyleSheet,
Dimensions,
Alert,
TextInput,
Keyboard,
DatePickerAndroid,
ToastAndroid
} from 'react-native';

// the add modal function should be passed in by goal setter. it will provide a way to get all of the info out
// of this modal and create a goalcard
class CreateGoalCardModal extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            items: this.props.items,
            startDate: this.props.startDate,
            endDate: this.props.endDate,
            inputFields: [],
            lastUsedKey: this.props.lastUsedKey
        }
        this.initializeInputFields();
    }

    componentDidMount = () => {
        this.setState({
            items: this.props.items,
            startDate: this.props.startDate,
            endDate: this.props.endDate,
            inputField: [],
            lastUsedKey: this.props.lastUsedKey
        })
        if (this.state == null || this.state == undefined) this.initializeInputFields(false);
        else this.initializeInputFields(true);
    }

    initializeInputFields = (initialized = false) => {
        let inputFields = [];
        if (Object.entries(this.props.items).length === 0){
            for (let i = 1; i <= this.props.lastUsedKey; i++) {
                inputFields.push(<TextInput key= {i} style = {styles.textInput} onChangeText = {(text) => this.handleInputChange(i, text)}/>)
            }
        } else {
            for (let i = 1; i <= this.props.lastUsedKey; i++) {
                if (this.props.items.hasOwnProperty(i)) {
                   inputFields.push(<TextInput key= {i} style = {styles.textInput} onChangeText = {(text) => this.handleInputChange(i, text)} defaultValue = {this.props.items[i].information}/>)
                } else {
                   inputFields.push(<TextInput key= {i} style = {styles.textInput} onChangeText = {(text) => this.handleInputChange(i, text)}/>)
                }
            }
        }
        if (!initialized) {
            this.state.inputFields = inputFields;
        } else {
            this.setState({
                inputFields
            });
        }
    }

    setStartDate = async () => {
      try {
        const {
          action, year, month, day,
        } = await DatePickerAndroid.open({
            date: new Date(),
            minDate: new Date(),
        });
        if (action !== DatePickerAndroid.dismissedAction) {
            let itemsReplacement = Object.assign({}, this.state.items);
            let startDate = new Date(year, month, day);
            for (key in itemsReplacement) {
                itemsReplacement[key].startDate = startDate;
            }
            this.setState({
                items: itemsReplacement,
                startDate: new Date(year, month, day)
            });
        }
      } catch ({ code, message }) {
        console.warn('Cannot open date picker', message);
      }
    };

    setEndDate = async () => {
      try {
        const {
          action, year, month, day,
        } = await DatePickerAndroid.open({
            date: new Date(),
            minDate: new Date(),
        });
        if (action !== DatePickerAndroid.dismissedAction) {
            let itemsReplacement = Object.assign({}, this.state.items);
            let endDate = new Date(year, month, day);
            for (key in itemsReplacement) {
                itemsReplacement[key].endDate = endDate;
            }
            this.setState({
                items: itemsReplacement,
                endDate: new Date(year, month, day)
            });
        }
      } catch ({ code, message }) {
        console.warn('Cannot open date picker', message);
      }
    };

    addInputField = (key) => {
        let inputFieldsNew = this.state.inputFields.slice();
        inputFieldsNew.push(<TextInput key={key} style={styles.textInput} onChangeText={(text) => this.handleInputChange(key, text)} />);
        this.setState({ inputFields: inputFieldsNew, lastUsedKey: this.state.lastUsedKey+1 })
    }

    handleInputChange = (key, text) => {
        let replacement = {information: text, startDate: this.state.startDate, endDate: this.state.endDate, key: key};
        if (!(key in this.state.items)) {
            let itemsReplacement = Object.assign({}, this.state.items, {[key]: replacement});
            this.setState({
                items: itemsReplacement
            })
            console.log(itemsReplacement);
            console.log(this.state.items);
        } else {
            let {[key]:value, ...itemsTrimmed } = this.state.items;
            let itemsReplacement = Object.assign({}, itemsTrimmed, {[key]: replacement});
            this.setState({
                items: itemsReplacement
            })
            console.log(itemsReplacement)
            console.log(this.state.items);
        }
    }

    render() {
        return(
            <Modal
              transparent={true}
              animationType="slide"
              transparent
              onRequestClose={() => {
                this.props.displayModal(!this.props.setModalVisible);
              }}>
              <View style = {styles.modalView}>
              <ScrollView>
                <Text style={styles.description}>Self-care is any activity that we do deliberately in order to take care of our mental, emotional, or physical health. It can be as simple as taking a nap, going to a yoga class, or reading a good book. How are you going to engage in self-care this week?</Text>
                <View style = {styles.dateButtonsContainer}>
                    <Button style = {styles.dateButton} title="Start date" onPress={() => this.setStartDate()}
                    />
                    <Button style = {styles.dateButton} title="End date" onPress={() => this.setEndDate()}
                    />
                </View>
                <Text style={styles.heading}> My Self-Care Plan for {this.state.startDate.toDateString()} to {this.state.endDate.toDateString()} </Text>
                {this.state.inputFields.map((value, index) => {
                    return value
                })}
                <Button title="Add Field" onPress={() => {
                        if (this.state.lastUsedKey < 10) {
                            this.addInputField(this.state.lastUsedKey + 1)
                        }
                    }
                } />
                <View style={styles.dateButtonsContainer}>
                    <Button disabled = {Object.entries(this.state.items).length === 0} style={styles.dateButton} title="Save" onPress={() => {
                            let ed = new Date(this.state.endDate);
                            let sd = new Date(this.state.startDate);
                            if (ed.setHours(0,0,0,0) < sd.setHours(0,0,0,0)) {
                                ToastAndroid.show('You must pick an end date equal to or after your start date before saving.', ToastAndroid.SHORT);
                            } else {
                                if (!this.props.edit) {
                                    this.props.addPlan(Object.values(this.state.items), this.state.startDate, this.state.endDate);
                                } else {
                                    this.props.editPlan(Object.values(this.state.items), this.state.startDate, this.state.endDate, this.props.index);
                                }
                                this.props.displayModal();
                            }
                        }}
                    />
                    <Button style={styles.dateButton} title="Close" onPress={() => {this.props.displayModal()}}/>
                </View>
              </ScrollView>
              </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
  modalView: {
      backgroundColor: 'white',
      opacity: 1,
      borderWidth: .5,
      borderColor: 'gray',
      width: Dimensions.get('window').width*0.9,
      height: Dimensions.get('window').height*0.8,
      alignSelf: 'center',
      top: Dimensions.get('window').height*0.1,
      alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 3
  },
  dateButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 3
  },
  dateButton: {
    margin: 3
  }
})

export default CreateGoalCardModal;

//Ram Sudarsan 2019