

export const playNowLength =(state)=> state.nowplay.length;
export const playNowSort = (state) => state.nowplay.map(el=> ({...el, release_date: new Date(el.release_date).getTime()})).sort((a, b) => b.release_date - a.release_date);

export const searchFilmSort = (state) => state.searchFilm.map(el=> ({...el, release_date: new Date(el.release_date).getTime()})).sort((a,b) => b.release_date -a.release_date);

export const playSoonLength =(state)=> state.soonPlay.length;
// export const favoriteLength =(state)=> state.favorite.length;