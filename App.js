import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';

export default function App() {
    const [enteredGoal, setEnteredGoal] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);

    function goalInputHandler(enteredText) {
        setEnteredGoal(enteredText);
    }

    function addGoalHandler(tappedButton) {
        setCourseGoals(currentGoals => [...currentGoals, { text: enteredGoal, id: Math.random().toString() }]);
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Your course goal"
                    style={styles.textInput}
                    onChangeText={goalInputHandler} />
                <Button title="Add goal" onPress={addGoalHandler} />
            </View>
            <View style={styles.goalsContainer}>
                <FlatList
                    data={courseGoals}
                    renderItem={itemData => {
                        return <GoalItem text={itemData.item.text} />
                    }}
                    keyExtractor={(item, index) => item.id}
                    alwaysBounceVertical={true} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8
    },
    goalsContainer: {
        flex: 8,
    },
});