import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Footer = ({ children, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.textStyle}>{children}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = {
    container: {
        padding: 15,
        borderTopWidth: 1,
        alignItems: 'center',
    },
    textStyle: {
        color: '#D10031'
    }
}

export {Footer};
