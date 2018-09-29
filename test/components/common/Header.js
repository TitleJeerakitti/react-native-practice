import React from 'react';
import { View, Text } from 'react-native';

const Header = ({ children }) => {
    const { headerStyle, textStyle } = styles;

    return (
        <View style={headerStyle} >
            <Text style={textStyle} >{children}</Text>
        </View>
    );
};

const styles = {
    headerStyle: {
        padding: 20,
        paddingTop: 50,
        backgroundColor: '#D10031'
    },
    textStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18
    }
}

export { Header };
