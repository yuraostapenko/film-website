import axios from 'axios';

const getplay =(data) =>({
type: 'NOWPLAY',
data,
});


function fetchPlay() {
    return axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=35d4f0a8bde234ec01cbf58b950c30bd&language=ru-RU&page=1&region=UA')
}


export const nowplayAsync = () => dispatch => {
    fetchPlay()
    .then(result => dispatch(getplay(result.data.results)))
    
    .catch(err => console.log(err))
}