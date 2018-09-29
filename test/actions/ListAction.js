import {
    CREATE_LIST,
    CHECK_LIST,
    REMOVE_LIST,
    REMOVE_COMPLETE_LIST,
} from './types';

export const listCreate = (text) => {
    return {
        type: CREATE_LIST,
        payload: text
    };
}

export const listCheck = (index) => {
    return {
        type: CHECK_LIST,
        payload: index
    }
}

export const listRemove = (index) => {
    return {
        type: REMOVE_LIST,
        payload: index
    }
}

export const listRemoveComplete = () => {
    return {
        type: REMOVE_COMPLETE_LIST
    }
}
