import React from 'react';
import { View } from 'react-native';

const Card = ({ children }) => {
    const { containerStyle } = styles;

    return (
        <View style={containerStyle}>
            {children}
        </View>
    );
};

const styles = {
    containerStyle: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderBottomWidth: 0,
        borderRadius: 5,
        borderColor: '#ccc',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10
    }
};

export { Card };
