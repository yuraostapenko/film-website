import React from 'react';
import {connect} from 'react-redux';
import SearchCard from '../SearchCard/SearchCard';
import {searchFilmSort} from '../redux/selector/menuSelector';

const SearchFilm = ({searchFilm}) => {
    return (
        <div>
            {searchFilm.map === undefined ? null : searchFilm.map(el => <SearchCard key={el.id} img={el.poster_path} title={el.title} id={el.id}/>)}
        </div>
    );
};


function MSTP (state) {
   return{
    searchFilm: searchFilmSort(state),
}
};


export default connect (MSTP)(SearchFilm);