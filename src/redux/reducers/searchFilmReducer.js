export default function searchFilm (state=[], action) {
    switch (action.type) {
        case 'SEARCH_FILM':
        return [...action.data];
  case 'SEARCH_CLEAR':
  return [];
        default:
            return state;
}
}