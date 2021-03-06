import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED,
    USER_LOGING_IN
} from '../actions/types';

const INITIAL_STATE = { 
    email: '', 
    password: '', 
    user: null, 
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    // console.log(action);
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case USER_LOGIN_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case USER_LOGIN_FAILED:
            return { ...state, error: 'Authentication Failed!', loading: false };
        case USER_LOGING_IN:
            return { ...state, loading: true, error: '' };
        default:
            return state;
    }
};
