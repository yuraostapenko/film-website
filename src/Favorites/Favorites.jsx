import React, { Component } from 'react';
import Grid from '../Grid/Grid.jsx';
import {componentFav, deleteFavorite} from '../redux/actions/favoriteActions';
import {connect} from 'react-redux';
 


class Favorites extends Component {

    // state = {
    //     result: [],
    // }

    componentDidMount(){
       this.props.componentFav();
        // let data = JSON.parse(localStorage.getItem('favorite'));
        // this.setState({
        //     result: data,
        // })
        }

        // deleteCard = (event) => {
        //     this.props.addTo(event);
        //     let data = JSON.parse(localStorage.getItem('favorite'));
        // this.setState({
        //     result: data,
        // })
        // }
   
    render() {
        return (
            <div>
               <Grid prop={this.props.favorite} addTo={this.props.deleteFavorite}/> 
            </div>
        );
    }
}

function MSTP (state) {
    return {
        favorite: state.favorite,
    }
}

function MDTP (dispatch) {
    return {
               componentFav: function() {
            dispatch(componentFav())
        },
        deleteFavorite: function(event){
            dispatch(deleteFavorite(event))
        },
    }
}

export default connect(MSTP, MDTP) (Favorites);