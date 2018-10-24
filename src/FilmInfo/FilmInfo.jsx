import React, { Component } from 'react';
import './FilmInfo.css';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import Coverflow from 'react-coverflow';
import {connect} from 'react-redux';
import {filmInfoAsync} from '../redux/actions/filmInfoAction';
import {NavLink} from 'react-router-dom';
import {StyleRoot} from 'radium';
import {clearSearchInput} from '../redux/actions/searchFilmActions'

class FilmInfo extends Component {

   
componentWillReceiveProps(nextProps){
  nextProps.match.params.id !==this.props.match.params.id ? this.props.filmInfoAsync(nextProps.match.params.id) : null
}

componentDidMount(){
 this.props.filmInfoAsync(this.props.match.params.id);
 this.props.clearSearchInput()
// Promise.all([
//   axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=35d4f0a8bde234ec01cbf58b950c30bd&language=ru-RU&append_to_response=UA`),
//   axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/similar?api_key=35d4f0a8bde234ec01cbf58b950c30bd&language=ru-RU&page=1`),
//   axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/videos?api_key=35d4f0a8bde234ec01cbf58b950c30bd&language=en-US`),
// ])
// .then(data => {
//   let [info, similar, video] = data;
//   let description = info.data;
//   let recomendation = similar.data.results;
//   let trailers = video.data.results;
//   let fullInfo = {
//     ...description,
//     recomendation: recomendation,
//     trailers: trailers,
//   }
//   this.setState({
//     movieInfo: fullInfo,
//     isLoading: false,
//   })
// })
// .catch(err => console.log(err))
}

  render() {
  console.log(this.props);  

{/* <Coverflow width="960" height="500"
    displayQuantityOfSide={2}
    navigation={false}
    enableScroll={true}
    clickable={true}
    active={0}>
    </Coverflow> */}
    
    return (
      <div className='filmInfo'>{this.props.filmInfoloading ? <Loader type="Plane"fill="#b4b1b2;" height="50" width="50" /> : <div className="FilmInfo">
        <div className="headerFilmInfo" style={{backgroundImage:`linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url("https://image.tmdb.org/t/p/w300${this.props.filmInfo.backdrop_path}")`}}>
         <div className="headfoto">
          <img
            src={`https://image.tmdb.org/t/p/w300${this.props.filmInfo.poster_path}`}
            alt="foto"
            className="imgFilmInfo"/>
            </div>
            <div className="headtext">
          <span className="yearFilmInfo">{`${this.props.filmInfo.release_date}`}</span>
          <span className="titleFilmInfo">{`${this.props.filmInfo.original_title}`}</span>
          <span className="taglinefilmInfo">{`${this.props.filmInfo.tagline}`}</span>
          <span className="timeFilmInfo"><i className="far fa-clock"></i>  {`${this.props.filmInfo.runtime}`}</span>
          <span className="website">{`${this.props.filmInfo.homepage}`}</span>
          <span className="vote_averageFilmInfo">{`${this.props.filmInfo.vote_average}`}</span>
          
          </div>
        </div>
        <div className="infoFilm">
          <div className="overwievFilmInfo">
            <h2 className="overwievTitle">OVERVIEW</h2>
            <article className="overwievText">
            {`${this.props.filmInfo.overview}`}
            </article>
          </div>
          <div className="tubeFilmInfo">
            <h2 className="tubeTitle">TRAILER</h2>
            {this.props.filmInfo.trailers[0] === undefined ? <img className='trailer-not-found' src="https://i.ytimg.com/vi/coD8Yem9K7I/hqdefault.jpg" alt="trailer not found"/> : <iframe src={`https://www.youtube.com/embed/${this.props.filmInfo.trailers[0].key}?autoplay=1`}
                    frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
            </iframe>}
            
            <div className="div" />
          </div>
        </div>
        <div className="relatedFilmInfo">

 {/* <StyleRoot>
                         <Coverflow
                         displayQuantityOfSide={1}
                         navigation={true}
                         enableHeading={true}
                         active={0}
                         media={{
                             '@media (min-width: 320px)': {
                                 width: '300px',
                                 height: '350px'
                             },
                             '@media (min-width: 768px)': {
                                 width: '400px',
                                 height: '350px'
                             },
                             '@media (min-width: 1280px)': {
                                 width: '620px',
                                 height: '530px'
                             },
                         }}>
                          {this.props.filmInfo.recomendation.map(el => 
          <div className='sliderDiv' key={el.id}>
          <NavLink to={`/filmInfo/${el.id}`}><img className='sliderImg' src={`https://image.tmdb.org/t/p/w300${el.poster_path}`} alt="foto"/></NavLink>
          <p className='sliderText'>{`${el.original_title}`}</p>
          </div>
      )} </Coverflow>
                               </StyleRoot> */}

 <Coverflow  width="100%" height="400"
    displayQuantityOfSide={2}
    navigation={false}
    enableScroll={true}
    clickable={true}
    active={0}>
     {this.props.filmInfo.recomendation.map(el => 
          <div className='sliderDiv' key={el.id}>
          <NavLink to={`/filmInfo/${el.id}`}><img className='sliderImg' src={`https://image.tmdb.org/t/p/w300${el.poster_path}`} alt="foto"/></NavLink>
          <p className='sliderText'>{`${el.original_title}`}</p>
          </div>
      )}
    </Coverflow>
          </div>
        </div>
      }
      </div>
    );
  }
}
function MSTP (state) {
  return {
    filmInfo: state.filmInfo,
    filmInfoloading: state.filmInfoLoading,
  }
}
function MDTP (dispatch) {
  return {
    filmInfoAsync: function (id){
    dispatch(filmInfoAsync(id)) 
},
clearSearchInput: function() {
  dispatch(clearSearchInput())
}
}
}



export default connect (MSTP, MDTP)(FilmInfo);
