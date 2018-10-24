import React, { Component } from 'react';
import Grid from '../Grid/Grid.jsx';
import {connect} from 'react-redux';
import {nowplayAsync} from '../redux/actions/nowplayActions';
import axios from 'axios';
import {favoriteAsync} from '../redux/actions/favoriteActions';
import {selectedAsync} from '../redux/actions/selectedAddActions';
import {playNowLength, playNowSort} from '../redux/selector/menuSelector';

class Nowplay extends Component {
    // state = {
    //     result: [],
    // }

    componentDidMount(){
        this.props.nowplayAsync();
    // axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=35d4f0a8bde234ec01cbf58b950c30bd&language=ru-RU&page=1&region=UA')
    // .then(data => data.data.results)    
    // .then(info => this.setState({
    //     result: info,
    // }))
    // .catch(err => console.log(err))
    }

    render() {
        console.log(this.props);
        return (
            <div>
               <Grid addTo={this.props.favoriteAsync} addToWishlist={this.props.selectedAsync} prop={this.props.nowplay}/> 
            </div>
        );
    }
}

function MSTP (state) {
    return {
        nowplay: playNowSort(state),
        
    }
}
function MDTP (dispatch) {
    return {
        nowplayAsync: function (){
           dispatch(nowplayAsync()) 
        },
        favoriteAsync: function(event){
            dispatch(favoriteAsync(event))
        },
        selectedAsync: function(event){
            dispatch(selectedAsync(event))
        }
        
    }
}



export default connect (MSTP, MDTP)(Nowplay);