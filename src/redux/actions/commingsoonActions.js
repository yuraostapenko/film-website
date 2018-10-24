import axios from 'axios';

const getSoon =(data)=> ({
type: 'SOON_PLAY',
data,
});

function fetchSoon(){
    return axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=35d4f0a8bde234ec01cbf58b950c30bd&language=ru-RU&page=2')
};

export const soonPlayAsync =()=> dispatch => {
    fetchSoon()
    .then(result => dispatch(getSoon(result.data.results)))
    .catch(err => console.log(err))
}
