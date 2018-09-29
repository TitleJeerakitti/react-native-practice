import {
    CREATE_LIST, CHECK_LIST, REMOVE_LIST, REMOVE_COMPLETE_LIST
} from '../actions/types';

const INITAIL_STATE = {
    items: []
};

export default (state = INITAIL_STATE, action) => {
    const { items } = state;

    switch (action.type) {
        case CREATE_LIST:
            return {...state, items: [{text: action.payload, complete: false}, ...items]};
        case CHECK_LIST:
            return {
                ...state,
                items: items.map((item, i) => {
                    if (action.payload === i) {
                        return {text: item.text, complete: !item.complete};
                    }
                    return item;
                })
            }
        case REMOVE_LIST:
            return {
                ...state,
                items: items.filter((item, i) => action.payload !== i)
            }
        case REMOVE_COMPLETE_LIST:
            return {
                ...state,
                items: items.filter((item, i) => item.complete !== true)
            }
        default:
            return state;
    }
};