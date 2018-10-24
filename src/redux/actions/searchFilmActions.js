import axios from 'axios';


const getSearchFilm =(data)=> ({
    type: 'SEARCH_FILM',
    data,
});

function fetchSerchFilm(query) {
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=35d4f0a8bde234ec01cbf58b950c30bd&language=ru-RU&query=${query}&page=1&include_adult=true&region=Ua`)
};


export const clearSearchInput =()=> ({
    type: 'CLEAR_SEARCH'
})

export const serchFilmAsync = (query) => dispatch => {
    fetchSerchFilm(query)
    .then(result => dispatch(getSearchFilm(result.data.results)))
    
    .catch(err => console.log(err))
}

