import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import { Header, Button, Card, CardSection, Spinner } from './components/common';

class App extends Component {
    state = { loggingIn: null }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBS8a4wR2iwEhggxXpifQlkHKwEFlh9K-U',
            authDomain: 'authentication-6da25.firebaseapp.com',
            databaseURL: 'https://authentication-6da25.firebaseio.com',
            projectId: 'authentication-6da25',
            storageBucket: 'authentication-6da25.appspot.com',
            messagingSenderId: '104248044867'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggingIn: true });
            } else {
                this.setState({ loggingIn: false });
            }
        });
    }

    renderLoginForm() {
        switch (this.state.loggingIn) {
            case true:
                return (
                    <Card>
                        <CardSection>
                            <Button onPress={() => firebase.auth().signOut()}>
                                Log Out
                            </Button>
                        </CardSection>
                    </Card>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                    <View style={{ flex: 1 }}>
                        <Spinner />
                    </View>
                );
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header>Authentication</Header>
                { this.renderLoginForm() }
            </View>
        );
    }
}

export default App;
