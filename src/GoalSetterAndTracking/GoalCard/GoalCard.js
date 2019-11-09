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


const GoalCard = ({title, content, date, hash, editCardFunction, setFinishedFunction, deleteCardFunction}) => {
    return(
        <View>
            <Button
                title="Done"
                onPress={() => setFinishedFunction(hash)}
            />
            <Button
                title="Edit"
                onPress={() => editCardFunction(hash)}
            />
            <View>
                <Text> {title} </Text>
                <Text> {content} </Text>
                <Text> {date} </Text>
            </View>
            <Button
                title="Delete"
                onPress={() => deleteCardFunction(hash)}
            />
        </View>
    );
}

const styles = StyleSheet.create({

})

export default GoalCard;
