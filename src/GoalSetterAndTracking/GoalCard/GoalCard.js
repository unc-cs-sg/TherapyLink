//Ram Sudarsan 2019

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
import CreateGoalCardModal from './CreateGoalCardModal';


const GoalCard = ({plan, startDate, endDate, index, showEditModal, showEditButton}) => {
    return(
        <View style={styles.goalCard}>
            <View>
                <Text> Started: {new Date(startDate).toDateString()} </Text>
                <Text> Ending: {new Date(endDate).toDateString()} </Text>
                {plan.map((item, i) => {
                    return (<Text> {i+1}. {item.information} </Text>);
                })}
            </View>
            { showEditButton ?
                <Button
                    title="Edit"
                    onPress = {() => showEditModal(plan, startDate, endDate, index)}
                />
                :
                null
            }
        </View>
    );
}

const styles = StyleSheet.create({
    goalCard: {
        padding: 5,
        borderWidth: 1,
        borderColor: 'black',
        margin: 3
    }
})

export default GoalCard;

//Ram Sudarsan 2019
