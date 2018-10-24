export default function soonPlay (state=[], action) {
    switch (action.type) {
        case 'SOON_PLAY':
        return [...action.data];
            
        default:
            return state;
    }
}