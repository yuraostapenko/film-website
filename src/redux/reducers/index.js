import {combineReducers} from 'redux';
import showMenu from './showMenu';
import showChat from './showChat';
import showModalLogin from './showModalLogin';
import nowplay from './nowplayReducer';
import soonPlay from './commingsoonReducer';
import selected from './selectedReducer';
import favorite from './favoriteReducer';
import filmInfo from './filmInfoReducer';
import filmInfoLoading from './filmInfoLoadingReducer';
import inputSearchreducer from './inputSearchReducer';
import searchFilm from './searchFilmReducer';



const rootReducer = combineReducers({
   showMenu,
   showChat,
   showModalLogin,
   nowplay,
   soonPlay,
   selected,
   favorite,
   filmInfo,
   filmInfoLoading,
   inputSearchreducer,
   searchFilm,
   
});

export default rootReducer;