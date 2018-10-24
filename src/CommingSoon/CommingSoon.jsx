import React, { Component } from 'react';
import Grid from '../Grid/Grid.jsx';
import {connect} from 'react-redux';
import {soonPlayAsync} from '../redux/actions/commingsoonActions';
import axios from 'axios';
import {favoriteAsync} from '../redux/actions/favoriteActions';

class CommingSoon extends Component {
// state={
//     result: [],
// }

componentDidMount(){
this.props.soonPlayAsync();

// axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=35d4f0a8bde234ec01cbf58b950c30bd&language=ru-RU&page=2')
// .then(data => data.data.results)
// .then(info => this.setState({
//     result: info,
// }))
// .catch(err => console.log(err))

}

    render() {
        return (
            <div>
              <Grid addToWishlist={this.props.addToWishlist} addTo={this.props.favoriteAsync} prop={this.props.soonPlay}/>  
            </div>
        );
    }
}

function MSTP (state) {
    return {
        soonPlay: state.soonPlay,
    }
}

function MDTP (dispatch) {
    return {
        soonPlayAsync: function (event){
           dispatch(soonPlayAsync(event)) 
        }, 
        favoriteAsync: function(event){
            dispatch(favoriteAsync(event))
        }
    }
}



export default connect (MSTP, MDTP)(CommingSoon);