import React from 'react';
import { View, Text } from 'react-native';

const Header = ({ children }) => {
    const { headerStyle, textStyle } = styles;

    return (
        <View style={headerStyle}>
            <Text style={textStyle}>{children}</Text>
        </View>
    );
};

const styles = {
    headerStyle: {
        backgroundColor: '#eee',
        height: 60,
        paddingTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 18
    }
};

export { Header };
