import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeReducer from './EmployeeReducer';
import HomeReducer from './HomeReducer';

export default combineReducers({
    auth: AuthReducer,
    employee: EmployeeReducer,
    home: HomeReducer
});
