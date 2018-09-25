import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { updateEmployee, createEmployee } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.createEmployee({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        return (
            <View>
                <EmployeeForm {...this.props} />
                <Card>
                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>
                            Save
                        </Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const mapStateToProps = ({ employee }) => {
    const { name, phone, shift } = employee;

    return { name, phone, shift };
};

export default connect(mapStateToProps, {
    updateEmployee, createEmployee
})(EmployeeCreate);
