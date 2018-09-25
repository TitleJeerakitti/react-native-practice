import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {
    onEmployeePress() {
        Actions.employeeEdit({ employee: this.props.employee });
    }

    render() {
        const { name } = this.props.employee;

        return (
            // when use TouchableWithoutFeedback
            // should use inside View component
            <TouchableWithoutFeedback
                onPress={this.onEmployeePress.bind(this)}
            >
                <View>
                    <CardSection>
                        <Text>{name}</Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default ListItem;
