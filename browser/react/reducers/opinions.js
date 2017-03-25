const initialState = {}

export const opinions = (state = initialState, action) => {
  switch(action.type) {
    case ADD_OPINION:
      return Object.assign({}, state, action.opinion)
      break
    default: 
      return state
  }
}


export const ADD_OPINION = "ADD_OPINION"
export const receiveOpinion = opinion => {
  return dispatch => {
    dispatch({
      type: ADD_OPINION,
      opinion
    })   
  }
}