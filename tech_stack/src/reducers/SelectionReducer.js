export default (state = null, action) => { // if state is undefinded --> state = null
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
};
