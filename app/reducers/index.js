import axios from 'axios'
// ACTION TYPE(S)
const GET_CANDY = 'GET_CANDY'

// ACTION CREATOR

export const gotCandiesActionCreator = (data) => ({ type: GET_CANDY, candies:data })


// thunk creator
export const getCandiesThunk = () => {
  return async (dispatch) => {
    try{
      const response = await axios.get('/api/candies')
      console.log(response)
      dispatch(gotCandiesActionCreator(response.data))
    }
    catch(err){
      console.log(err, "you thunky thunk is broken")
    }
  }
}




const initialState = {
  candies: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CANDY:
      return {...state, candies: action.candies }
    default:
      return state
  }
}

export default rootReducer
