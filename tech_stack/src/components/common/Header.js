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
        paddingTop: 15,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fefefe',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 18
    }
};

export { Header };
