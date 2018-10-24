import axios from 'axios';

const addToFavorite =(data)=> ({
    type: 'ADD_FAVORITE',
    data,
})

function fetchAddFavorite (event){
    let id = event.target.dataset.movieid;
    return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=35d4f0a8bde234ec01cbf58b950c30bd&language=ru-rus`)
}

export const favoriteAsync = (event)=> dispatch => {
    fetchAddFavorite(event)
    .then(result => dispatch(addToFavorite(result.data)))
    .catch(err => console.log(err))
}

export const deleteFavorite = (event)=>({
    type: 'DELETE_FAVORITE',
    id: event.target.dataset.movieid,
})


export const componentFav =()=> ({
    type: 'COMPONENT',
}) 