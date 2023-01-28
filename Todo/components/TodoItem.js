import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import DeleteButton from './DeleteButton';

const TodoItem = ({ title, done, }) => {
    return (
        <Swipeable renderRightActions={() => <DeleteButton />}>
            <View style={styles.container}>
                <View style={styles.todo}>
                    <TouchableOpacity 
                        activeOpacity={0.8}
                        style={done ?  styles.done : styles.check}
                    >
                        <FontAwesome name="check" color={done ? '#ffffff' : '#E0E0E0'} size={14} />

                    </TouchableOpacity>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
            </View>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: '#ffffff',

    },
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5', 
    },
    title: {
        color: '#424242',
        fontSize: 16,
    },
    check: {
        borderEndWidth: 1,
        borderColor: '#E5E5E5',
        width: 28,
        height: 28,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    done: {
        width: 28,
        height: 28,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        backgroundColor: '#6830CF'
    }
})

export default TodoItem
 