import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';



const Card = ({id, img, addTo, addToWishlist}) =>{
    
        return (
            <div className='mainCard'>
                <div className='card'>
                <img className='img' src= {`https://image.tmdb.org/t/p/w600_and_h900_bestv2${img}`} alt={id}/>
                </div>
                <div className="hidden">
                <span data-title='add to'></span><i className="far fa fa-comments fa-2x"></i>
                <span data-title='add to'></span><i className="far fa fa-check-square fa-2x" data-movieid={id} onClick={addToWishlist} ></i>
                <span data-title='add to favorites'></span><i className="far fa fa-star fa-2x" data-movieid={id} onClick={addTo}></i>
                <span data-title='add to'></span><NavLink to={`/filmInfo/${id}`}><i className="fas fa fa-info-circle fa-2x" ></i></NavLink>
                </div>
            </div>
        ) 
    };

Card.propTypes = {
    addTo: PropTypes.func,
    img: PropTypes.string,
    id: PropTypes.number,
    addToWishlist: PropTypes.func,
};


export default Card;

