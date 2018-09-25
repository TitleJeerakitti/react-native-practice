import {
    EMPLOYEES_FETCH_SUCCESS
} from '../actions/types';

const INITAIL_STATE = {};

export default (state = INITAIL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEES_FETCH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};
