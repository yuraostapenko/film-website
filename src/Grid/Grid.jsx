import React from 'react';
import Card from '../Card/Card.jsx';
import PropTypes from 'prop-types';
import './Grid.css';

const Grid = ({prop, addTo, addToWishlist}) =>{
    
        return (
            <div className='grid'>
                {prop===null ? <h2>add films</h2> : prop.map(el => <Card addTo={addTo} addToWishlist={addToWishlist} id={el.id} img={el.poster_path} key={el.id}/>)}
            </div>
        );
    };

Grid.propTypes ={
    addTo: PropTypes.func,
    addToWishlist: PropTypes.func,
    prop: PropTypes.array,
};

export default Grid;