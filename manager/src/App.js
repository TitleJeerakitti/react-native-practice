import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
// import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAI4yRym3YWy3Jq6rNq8Piy9zuNyT_UBgM',
      authDomain: 'manageemployee-ca31d.firebaseapp.com',
      databaseURL: 'https://manageemployee-ca31d.firebaseio.com',
      projectId: 'manageemployee-ca31d',
      storageBucket: 'manageemployee-ca31d.appspot.com',
      messagingSenderId: '858318856145'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
