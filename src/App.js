import React, { Component } from 'react';
import logo from './logo.svg';
import Menu from './Menu/Menu.jsx';
import Main from './Main/Main.jsx';
import Chat from './Chat/Chat.jsx';
import PropTypes from 'prop-types';
import axios from 'axios';
import './App.css';
import Registration from './Registration/Registration.jsx';
import Login from './Login/Login.jsx';



class App extends Component {
  state = {
    // showMenu: false,
    // showChat: false,
    registrationShow: false,
    loginShow: false,
  }
  modalWindowShow = (event) => {
    let id = event.target.id;
    this.setState(prev => ({
[id]: !prev[id]
    }))
  }

// showMenuHendler = () => {
//   this.setState(prev => ({
//     showMenu: !prev.showMenu,
//   }));
// };

// showChatHendler =() => {
//   this.setState(prev => ({
//     showChat: !prev.showChat,
//   }));
// };



// addToFavorite =(event) => {
//   let id = event.target.dataset.movieid;
//   axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=35d4f0a8bde234ec01cbf58b950c30bd&language=ru-rus`)
//   .then(data => {
//     let result = JSON.parse(localStorage.getItem('favorite'));
//     if (result) {
//       result.map(el => el.id).includes(data.data.id) ? null : result.push(data.data);
//     } else {
//       result = [];
//       result.push(data.data);
//     }
//     localStorage.setItem('favorite', JSON.stringify(result));  
//   })
// }

// deleteFavor = (event) => {
//   let result = JSON.parse(localStorage.getItem('favorite'));
//   let filtr= result.filter(el => el.id !== +event.target.dataset.movieid);
//   localStorage.setItem('favorite', JSON.stringify(filtr))
// }

// addToWishlist =(event) => {
//   let id = event.target.dataset.movieid;
//   axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=35d4f0a8bde234ec01cbf58b950c30bd&language=ru-rus`)
//   .then(data => {
//     let result = JSON.parse(localStorage.getItem('wishlist'));
//     if (result) {
//       result.map(el => el.id).includes(data.data.id) ? null : result.push(data.data);
//     } else {
//       result = [];
//       result.push(data.data);
//     }
//     localStorage.setItem('wishlist', JSON.stringify(result));
//   })

// }

// deleteSelec = (event) => {
//   let result =JSON.parse(localStorage.getItem('wishlist'));
//   let filtr = result.filter(el => el.id !== +event.target.dataset.movieid);
//   localStorage.setItem('wishlist', JSON.stringify(filtr));
// }


  render() {
    return (
      <div className='app'>
       {this.state.registrationShow && <Registration close={this.modalWindowShow} id='registrationShow'/> }
       {this.state.loginShow && <Login close ={this.modalWindowShow}  id='loginShow'/>}

        <Menu close={this.modalWindowShow}/>
        <Main/>
        <Chat/>
      </div>
    );
  }
}



export default App;
