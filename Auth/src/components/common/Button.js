import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ children, onPress }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#d10031'
    },
    textStyle: {
        color: '#d10031',
        alignSelf: 'center',
        fontSize: 16
    }
};

export { Button };
