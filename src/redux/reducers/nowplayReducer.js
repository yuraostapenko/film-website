export default function nowplay(state = [], action) {
    switch (action.type) {
        case 'NOWPLAY':
            return [...action.data];
        default:
            return state;
    }
}