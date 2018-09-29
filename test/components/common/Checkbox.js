import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'

const Checkbox = ({ label, complete, onPress, onPressDelete }) => {
    const { container, checkStyle, completeStyle } = styles;

    isComplete = () => {
        return <Icon name={ complete ? 'check' : 'minus'} type='evilicon' />
    }

    return (
            <View style={complete ? [container, completeStyle] : container}>
                <Text style={{flex: 1}}>{label}</Text>
                <TouchableOpacity onPress={onPress} style={checkStyle}>
                    {this.isComplete()}
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressDelete}>
                    <Icon name='close' type='evilicon' />
                </TouchableOpacity>
            </View>
    );
}

const styles = {
    container: {
        padding: 20,
        borderBottomWidth: 1,
        borderColor: 'whitesmoke',
        flex: 1,
        flexDirection: 'row'
    },
    checkStyle: {
        marginRight: 10
    },
    completeStyle: {
        backgroundColor: 'whitesmoke'
    }
}

export { Checkbox };
