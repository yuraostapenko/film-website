import React, { Component } from 'react';
import Wishlist from '../Wishlist/Wishlist.jsx';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import './Menu.css';
import {connect} from 'react-redux';
import {menuShow} from '../redux/actions/showMenuActions';
import {chatShow} from '../redux/actions/showChatActions';
import {playNowLength, playSoonLength} from '../redux/selector/menuSelector';

class Menu extends Component {
    state = {
        result: [],
    }
    componentDidMount(){
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=35d4f0a8bde234ec01cbf58b950c30bd&language=ru-RU&page=1&region=Ua')
        .then(data => data.data.results)  
        .then(info => this.setState({
            result: info,
        }))
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div className='menu'>

<div className="logo">
<div>
<i className="fas fa-file-video fa-2x"></i><span className='logoText'>SHALENIY</span>
</div>
<div className='iconLog'>   
<button className='signIn' id='loginShow' onClick={this.props.close}>log in</button>
<button className='signIn' id='registrationShow' onClick={this.props.close}>sign in</button>
</div>
</div>
<nav className='nav'>
    <ul className={this.props.showMenu ?  'menuShow' : 'menuHidden'}>        
       <li className="listItem"><i className="fas fa-video fa-2x"></i> <NavLink to='/' className="menuLink">Now playing</NavLink><span className='menuCount'>{this.props.playNowLength}</span></li>
        <li className="listItem"><i className="fas fa-film fa-2x"></i><NavLink to='/comming' className="menuLink">Comming soon</NavLink><span className='menuCount'>{this.props.playSoonLength}</span></li>
        <li className="listItem"><i className="far fa-check-square fa-2x"></i><NavLink to='/selected' className="menuLink">Selected moovies</NavLink><span className='menuCount'>000</span></li>
        <li className="listItem"><i className="far fa-star fa-2x"></i><NavLink to='/favorites' className="menuLink">Fvorite moovies</NavLink><span className='menuCount'>{this.propsfavoriteLength}</span></li>
        <li className="listItem"><i className="far fa-comments fa-2x"></i><NavLink to='/chat' className="menuLink">Chat list</NavLink><span className='menuCount'>000</span></li>
        <li className='closeMenu' onClick={this.props.menuShow}>X</li>
    </ul>
    
</nav>
<Wishlist prop={this.state.result}/>
            </div>
        )
    }
}




Menu.propTypes ={
    showMenu: PropTypes.bool,
    showMenuHendler: PropTypes.func,
    
}


function MSTP (state){
    return {
      showMenu: state.showMenu,
      playNowLength: playNowLength(state),
      playSoonLength: playSoonLength(state),
      

    }
    }

function MDTP (dispatch) {
        return {
          menuShow: function(){
            dispatch(menuShow())
          },
        }
      }


export default connect(MSTP,MDTP)(Menu);