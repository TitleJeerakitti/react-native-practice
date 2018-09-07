import React from 'react';
import { View } from 'react-native';

const CardSection = ({ children }) => (
    <View style={styles.containerStyle}>
        {children}
    </View>
);

const styles = {
    containerStyle: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#CCC',
        flexDirection: 'row',
        position: 'relative'
    }
};

export { CardSection };
