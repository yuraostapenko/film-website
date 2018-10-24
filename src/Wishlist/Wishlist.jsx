import React from 'react';
import './Wishlist.css';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

const Wishlist = ({prop}) => {

  return (
    <div className='wish'>
    <div className='todayBestChoice'>
      <span className='wishlistText'>TODAY BEST CHOISE</span>
      </div>
      <div className='wishCards'>
      { prop.map === undefined ? null : prop.map(el => (<div key={el.id}>
        <NavLink className='navwish' to={`/filmInfo/${el.id}`}><img className='whishlistImg' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${el.poster_path}`} alt={`${el.id}`} />
        <p className='wishlistTitle'>{`${el.title}`}</p></NavLink>
        <span className='whishlistAverage'>{`${el.vote_average}/10`}</span>
      </div>))}</div>

    </div>
  )
}



export default Wishlist
