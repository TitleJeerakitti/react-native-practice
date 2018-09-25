import _ from 'lodash';
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button, Confirm } from './common';
import { updateEmployee, employeeSave, employeeDelete } from '../actions';

class EmployeeEdit extends Component {
    state = { showModal: false };

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.updateEmployee({ prop, value });
        });
    }

    onSavePress() {
        const { name, phone, shift } = this.props;
        
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }

    onPressTextButton() {
        const { phone, shift } = this.props;

        Communications.text(phone, `Your upcoming shift is ${shift}`);
    }

    onAccept() {
        this.props.employeeDelete({ uid: this.props.employee.uid });
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <View>
                <EmployeeForm {...this.props} />
                <Card>
                    <CardSection>
                        <Button onPress={this.onSavePress.bind(this)}>
                            Save Changes
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.onPressTextButton.bind(this)}>
                            Text Schedule
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                            Fire Employee
                        </Button>
                    </CardSection>
                    <Confirm
                        visible={this.state.showModal}
                        onAccept={this.onAccept.bind(this)}
                        onDecline={this.onDecline.bind(this)}
                    >
                        Are you sure you want to delete this?
                    </Confirm>
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
    updateEmployee,
    employeeSave,
    employeeDelete
})(EmployeeEdit);
