export default function selected(state = [], action) {
    switch (action.type) {
        case 'ADD_FILM':
            let result = JSON.parse(localStorage.getItem('wishlist'));
            if (result) {
                result.map(el => el.id).includes(action.data.id) ? null : result.push(action.data);
            } else {
                result = [];
                result.push(action.data);
            }
            localStorage.setItem('wishlist', JSON.stringify(result));
            return result;

        case 'DELETE_FILM':
            let update = JSON.parse(localStorage.getItem('wishlist'));
            let filtr = update.filter(el => el.id !== +action.id);
            localStorage.setItem('wishlist', JSON.stringify(filtr));
            return filtr;

        case 'COMPONENT':
            let data = JSON.parse(localStorage.getItem('wishlist'));
            return data;

        default:
            return state;
    }
}