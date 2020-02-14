import { combineReducers } from 'redux'

const userReducer = (state={points: 0}, action) => {
  let userCopy;

  switch(action.type){
    case "SET_USER":
      return action.user
    case "ADD_POINT":
      userCopy = {...state}
      userCopy.points++
      return userCopy
    default:
      return state
  }
}

const dictionaryReducer = (state=[], action) => {
  switch(action.type){
    case "SET_DICTIONARY":
      return action.dictionary
    default:
      return state
  }
}

const inputReducer = (state=null, action) => {
  switch(action.type){
    case "TYPING":
      return action.input
    default:
      return state
  }
}

const wordReducer = (state=null, action) => {
  switch(action.type){
    case "SET_WORD":
      return action.word
    default:
      return state
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  dictionary: dictionaryReducer,
  input: inputReducer,
  word: wordReducer,
})

export default rootReducer
