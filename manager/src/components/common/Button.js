import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ children, onPress }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity 
            style={buttonStyle}
            onPress={onPress}
        >
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#D10031'
    },
    textStyle: {
        alignSelf: 'center',
        fontSize: 16,
        color: '#D10031'
    }
};

export { Button };
