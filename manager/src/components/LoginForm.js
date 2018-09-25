import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, logInUser } from '../actions';
import { Card, Input, CardSection, Button, Spinner } from './common';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onLogInUser() {
        const { email, password } = this.props;
        
        this.props.logInUser({ email, password });
    }
    
    renderErrorMessage() {
        if (this.props.error) {
            return (
                <View style={{ marginTop: 5 }}>
                    <Text style={{ alignSelf: 'center', color: 'red' }}>{this.props.error}</Text>
                </View>
            );
        }
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner />;
        }
        return <Button onPress={this.onLogInUser.bind(this)}>Sign In</Button>;
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label={'Username'}
                        placeholder={'Enter Username'}
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        secureTextEntry
                        label={'Password'}
                        placeholder={'Enter Password'}
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                {this.renderErrorMessage()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;

    return { email, password, error, loading };
};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, logInUser
})(LoginForm);
