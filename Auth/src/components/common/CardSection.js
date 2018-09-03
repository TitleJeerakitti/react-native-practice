import React from 'react';
import { View } from 'react-native';

const CardSection = ({ children }) => {
    const { containerStyle } = styles;

    return (
        <View style={containerStyle}>
            {children}
        </View>
    );
};

const styles = {
    containerStyle: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        flexDirection: 'row',
        position: 'relative'
    }
};

export { CardSection };
