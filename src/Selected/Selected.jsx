import React, { Component } from 'react';
import Grid from '../Grid/Grid.jsx';
import {connect} from 'react-redux';
import {selectedAsync, componentSel, deleteSelected} from '../redux/actions/selectedAddActions';
import {favoriteAsync} from '../redux/actions/favoriteActions';

class Selected extends Component {

    // state = {
    //     result: [],
    // }

    componentDidMount() {
       this.props.componentSel();
        // let data = JSON.parse(localStorage.getItem('wishlist'));
        // this.setState({
        //     result: data,
        // })
    }

    // deleteCard = (event) => {
    //     this.props.addToWishlist(event);
    //     let data = JSON.parse(localStorage.getItem('wishlist'));
    //     this.setState({
    //         result: data,
    //     })
    // }
    render() {
        return (
            <div>
                  <Grid prop={this.props.selected} addToWishlist={this.props.deleteSelected}/>  
                         </div>
        );
    }
}

function MSTP (state) {
    return {
        selected: state.selected,
        
    }
}
function MDTP (dispatch) {
    return {
        selectedAsync: function(event){
            dispatch(selectedAsync(event))
        },
        componentSel: function(){
            dispatch(componentSel())
        },
        favoriteAsync: function(event){
            dispatch(favoriteAsync(event))
        }, 
        deleteSelected: function(event){
            dispatch(deleteSelected(event))
        }

    }
}

export default connect (MSTP, MDTP) (Selected);