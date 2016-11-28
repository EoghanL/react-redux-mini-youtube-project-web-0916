import { combineReducers } from 'redux'

function reducer(state = [], action){
  debugger
  switch (action.type) {
    case "FETCH_VIDEOS":
      return action.payload.data.items
    default:
      return state
  }
}


const rootReducer = combineReducers({reducer})

export default rootReducer
