import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'

export default class FriendItem extends React.Component {
    render() {

        // console.log(`Info : ${this.props.name}`)
        // console.log(`Info value: ${this.props.name.key.name}`)
        // console.log(`Info key: ${this.props.name.key.id}`)

        return (
            <TouchableWithoutFeedback>
                <View>
                    <Text style={styles.actionbar}>{this.props.name.key.name}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    actionbar: {
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        paddingLeft: 18,
        height: 54,
        fontSize: 18,
        flex: 1,
        textAlignVertical: 'center',
    },
})