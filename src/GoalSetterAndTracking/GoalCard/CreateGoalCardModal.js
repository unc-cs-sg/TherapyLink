import React from 'react';
import {Button,
Modal,
View,
Text,
TouchableHighlight,
StyleSheet,
Dimensions,
Alert,
TextInput,
Keyboard,
} from 'react-native';

// the add modal function should be passed in by goal setter. it will provide a way to get all of the info out
// of this modal and create a goalcard
class CreateGoalCardModal extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: this.props.title,
            content: this.props.content,
            date: this.props.date,
        }
    }

    handleTitleChange = (newTitle) => {
        this.setState({
            title: newTitle
        });
    }

    handleContentChange = (newContent) => {
        this.setState({
            content: newContent
        });
    }

    handleDateChange = (newDate) => {
        this.setState({
            date: newDate
        });
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
              <View style={styles.modalView}>
                <TextInput
                  value = {this.state.title}
                  style={styles.textInput}
                  placeholder="Title"
                  onBlur={Keyboard.dismiss}
                  onChangeText={this.handleTitleChange}
                />
                <TextInput
                  value = {this.state.content}
                  style={styles.textInput}
                  placeholder="Content"
                  onBlur={Keyboard.dismiss}
                  onChangeText={this.handleContentChange}
                />
                <TextInput
                  value = {this.state.date}
                  style={styles.textInput}
                  placeholder="Date"
                  onBlur={Keyboard.dismiss}
                  onChangeText={this.handleDateChange}
                />
                <Button title="Set Goal" onPress={() => {
                        if (!this.props.edit) {
                            this.props.addCardFunction(this.state.title, this.state.content, this.state.date);
                        } else {
                            this.props.editCardFunction(this.state.title, this.state.content, this.state.date, this.props.oldHash);
                        }
                        this.props.displayModal();
                    }}
                />

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
      borderRadius: Dimensions.get('window').height*0.03,
      alignItems: 'center'
    },
})

export default CreateGoalCardModal;
