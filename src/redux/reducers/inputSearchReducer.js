export default function inputSearchreducer(state = '', action) {
    switch (action.type) {
        case 'INPUT_SEARCH':
            return action.data;
        case 'CLEAR_SEARCH':
            return '';
        default:
            return state;
    }
}