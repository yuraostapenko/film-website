import React from 'react';
import {NavLink} from 'react-router-dom';



const SearchCard = ({img, id, title}) => {
    return (
        <NavLink className='navwish' to={`/filmInfo/${id}`}>
        <div className='searchCard' id={id}>
        <div className="searchfoto">
         <img src={`https://image.tmdb.org/t/p/w300${img}`} alt="foto"
            className="imgFilmSerch"/>
            </div>
            <span className="searchTitleFilmInfo">{`${title}`}</span>
            </div>
            </NavLink>
    );
};





export default SearchCard;