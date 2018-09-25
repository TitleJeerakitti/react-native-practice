import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED,
    USER_LOGING_IN
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const logInUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: USER_LOGING_IN });

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => logInSuccessed(dispatch, user))
        .catch((/*error*/) => {
            // console.log(error.message);
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => logInSuccessed(dispatch, user))
            .catch(() => logInFailed(dispatch));
        });
    };
};

export const logInFailed = (dispatch) => {
    dispatch({ type: USER_LOGIN_FAILED });
};

export const logInSuccessed = (dispatch, user) => {
    dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: user
    });

    Actions.employeeList();
};

export const logOutUser = () => {
    return (dispatch) => {
        firebase.auth().signOut()
        .then(() => dispatch({ type: 'user_logout ', payload: '' }));
    };
};
