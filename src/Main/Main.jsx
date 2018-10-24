import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nowplay from '../Nowplay/Nowplay';
import CommingSoon from '../CommingSoon/CommingSoon';
import { Switch, Route } from 'react-router-dom';
import FilmInfo from '../FilmInfo/FilmInfo.jsx';
import Favorites from '../Favorites/Favorites.jsx';
import Selected from '../Selected/Selected.jsx';
import {menuShow} from '../redux/actions/showMenuActions';
import {chatShow} from '../redux/actions/showChatActions';
import {connect} from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import {history} from '../redux/store/store';
import {changeSearch} from '../redux/actions/inputSearchAction';
import SearchFilm from '../SearchFilm/SearchFilm';
import SearchCard from '../SearchCard/SearchCard';
import {serchFilmAsync} from '../redux/actions/searchFilmActions';
import './Main.css';

const Main = ({ serchFilmAsync, menuShow, chatShow, addTo, addToWishlist, deleteFavor, deleteSelec, inputSearchreducer, changeSearch, searchFilm }) => {
  return (
    <div className="main">
      <form className="mainForm">
        <label className="label">
          <input type="text" className="mainInput" placeholder="Search more" onChange={(event)=> {changeSearch(event); serchFilmAsync(inputSearchreducer)}} value={inputSearchreducer} />
          <i className="fas fa-search" />
          <i className="fas fa-bars" onClick={menuShow} />
          <i className="far fata fa-comments" onClick={chatShow} />
        </label>
      </form>
      {inputSearchreducer.length > 0 ? <SearchFilm/> : null}
      <ConnectedRouter history={history}>
      <Switch>
        
        <Route path='/filminfo/:id' render={props => <FilmInfo {...props}/>}/>

        <Route exact path='/' render={props => <Nowplay  />}/> 
        <Route path='/comming' render={props => <CommingSoon />}/>

        <Route path='/selected' render={props => <Selected />}/>
        <Route path='/favorites' render={props => <Favorites />}/>

      </Switch>
      </ConnectedRouter>
    </div>
  )
}

Main.propTypes = {
  prop: PropTypes.array,
  showMenuHendler: PropTypes.func,
};


  
function MSTP (state){
  return {
    showMenu: state.showMenu,
    showChat: state.showChat,
    inputSearchreducer: state.inputSearchreducer,
    searchFilm: state.searchFilm,
  }
  }

function MDTP (dispatch) {
      return {
        menuShow: function(){
          dispatch(menuShow())
        },
        chatShow: function(){
            dispatch(chatShow())
        },
        changeSearch: function(event){
          dispatch(changeSearch(event))
        },
        serchFilmAsync: function(query){
          dispatch(serchFilmAsync(query))
        },
      }
    }


export default connect(MSTP,MDTP)(Main);
