export default function filmInfo(state = {}, action) {
    switch (action.type) {
        case 'FILM_INFO':
            return action.data
        default:
            return state;
    }
}