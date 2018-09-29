import React, { Component } from 'react';
import { TextInput } from 'react-native';

const Input = ({ placeholder, onSubmitEditing, onChangeText, value }) => {
    return (
        <TextInput
            placeholder={placeholder}
            value={value}
            style={styles.textInputStyle}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
        />
    );
};

const styles = {
    textInputStyle: {
        padding: 20,
        fontSize: 16,
        borderBottomWidth: 1,
        borderColor: '#ccc'
    }
}

export { Input };
