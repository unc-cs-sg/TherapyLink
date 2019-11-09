import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, SectionList, Alert} from "react-native";
import RadioButton from './RadioButton.js';

export default class QuestionList extends Component {

    constructor(props) {
        super(props)
        
        this.updateChosenVal = this.updateChosenVal.bind(this);

        this.state = {
            Q1: 0,
            Q2: 0,
            Q3: 0,
            Q4: 0,
            Q5: 0
        };
    }

    GetSectionListItem=()=>{
        Alert.alert("Q1: " + this.state.Q1 + ", Q2: " + this.state.Q2 + ", Q3: " + this.state.Q3+ 
        ", Q4: " + this.state.Q4+ ", Q5: " + this.state.Q5);
    }

    updateChosenVal(id, value){
        if(id == 1){
            this.setState({Q1: value});
        }
        else if(id == 2){
            this.setState({Q2: value});
        }
        else if(id == 3){
            this.setState({Q3: value});
        }
        else if(id == 4){
            this.setState({Q4: value});
        }
        else if(id == 5){
            this.setState({Q5: value});
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <SectionList
                sections={[
                    { title: 'Q1', data: [{id:1}], value:0},
                    { title: 'Q2', data: [{id:2}], value:0},
                    { title: 'Q3', data: [{id:3}], value:0},
                    { title: 'Q4', data: [{id:4}], value:0},
                    { title: 'Q5', data: [{id:5}], value:0},
                ]}
                renderSectionHeader={ ({section}) => <Text style={styles.SectionHeader}> { section.title } </Text> }
                //renderItem={ ({item}) => <Text style={styles.SectionListItemS} onPress={this.GetSectionListItem.bind(this, item)}> { item } </Text> }
                renderItem={ ({item}) => <RadioButton index={item.id} handleChange={this.updateChosenVal}/> }
                keyExtractor={ (item, index) => index }
                stickySectionHeadersEnabled = {true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#e5e5e5"
    },
    SectionHeader:{
      backgroundColor : '#64B5F6',
      fontSize : 20,
      padding: 5,
      marginBottom:5,
      color: '#fff',
   },
    SectionListItemS:{
      fontSize : 16,
      padding: 6,
      color: '#000',
      backgroundColor : '#F5F5F5'
  }
});