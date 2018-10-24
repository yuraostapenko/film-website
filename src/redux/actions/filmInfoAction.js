import axios from 'axios';
import {filmInfoLoading} from './filmInfoLoadingActions';
import {clearSearch} from './inputSearchAction';

const getFilm = (data)=>({
    type: 'FILM_INFO',
    data,
});


function fetchFilmInfo (id) {
   return Promise.all([
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=35d4f0a8bde234ec01cbf58b950c30bd&language=ru-RU&append_to_response=UA`),
        axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=35d4f0a8bde234ec01cbf58b950c30bd&language=ru-RU&page=1`),
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=35d4f0a8bde234ec01cbf58b950c30bd&language=en-US`),
      ])
      
}


export const filmInfoAsync = (id) => dispatch => {
    console.log(id);
    fetchFilmInfo(id)
    .then(data => {
        let [info, similar, video] = data;
        let description = info.data;
        let recomendation = similar.data.results;
        let trailers = video.data.results;
        let fullInfo = {
          ...description,
          recomendation: recomendation,
          trailers: trailers,
        }; 
        dispatch(getFilm(fullInfo))  
        
      })
      .then(() => dispatch(filmInfoLoading()))
      .then(()=> dispatch(clearSearch()))
      .catch(err => console.log(err))
}

