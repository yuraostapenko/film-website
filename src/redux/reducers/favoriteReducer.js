export default function favorite(state = [], action) {
    switch (action.type) {
        case 'ADD_FAVORITE':
            let result = JSON.parse(localStorage.getItem('favorite'));
            if (result) {
                result.map(el => el.id).includes(action.data.id) ? null : result.push(action.data);
            } else {
                result = [];
                result.push(action.data);
            }
            localStorage.setItem('favorite', JSON.stringify(result));
            return result;
        case 'DELETE_FAVORITE':
        console.log(action.id);
            let update = JSON.parse(localStorage.getItem('favorite'));
            let filtr = update.filter(el => el.id !== +action.id);
            localStorage.setItem('favorite', JSON.stringify(filtr));
            return filtr;
        case 'COMPONENT':
            let data = JSON.parse(localStorage.getItem('favorite'));
            return data;
        default:
            return state;
    }
}