export default function filmInfoLoading(state = true, action) {
    switch (action.type) {
        case 'LOADING':
            return state=false;
        default:
            return state;
    }
}