export const changeSearch =(event)=> ({
    type: 'INPUT_SEARCH',
    data: event.target.value,
});

export const clearSearch =()=> ({
    type: 'CLEAR_SEARCH'
  });