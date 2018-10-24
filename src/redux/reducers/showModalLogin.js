export default function showModalLogin (state=false, action) {
    switch (action.type) {
        case 'SHOW_MODAL_LOGIN':
        return !state;    
        default:
        return state; 
    }
}