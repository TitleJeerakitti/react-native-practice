import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { updateEmployee } from '../actions';
import { Card, CardSection, Input } from './common';

class EmployeeForm extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Name" 
                        placeholder="ex. Calvin Hajajuku"
                        value={this.props.name}
                        onChangeText={value =>
                            this.props.updateEmployee({ prop: 'name', value })}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Phone"
                        placeholder="ex. 0xx-xxx-xxxx"
                        value={this.props.phone}
                        onChangeText={value =>
                            this.props.updateEmployee({ prop: 'phone', value })}
                    />
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={value =>
                            this.props.updateEmployee({ prop: 'shift', value })}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 14,
        paddingLeft: 10
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employee;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { updateEmployee })(EmployeeForm);
