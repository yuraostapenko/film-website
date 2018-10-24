import axios from 'axios';

const addToSelect =(data)=> ({
    type: 'ADD_FILM',
    data,
});

function fetchAdd (event){
    let id = event.target.dataset.movieid; 
    return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=35d4f0a8bde234ec01cbf58b950c30bd&language=ru-rus`)
};



export const selectedAsync =(event)=> dispatch => {
    fetchAdd(event)
    .then(result => dispatch(addToSelect(result.data)))
    .catch(err => console.log(err))
};


export const deleteSelected =(event)=> ({
    type:'DELETE_FILM',
    id: event.target.dataset.movieid,
});

export const componentSel =()=> ({
    type: 'COMPONENT',
}) 


