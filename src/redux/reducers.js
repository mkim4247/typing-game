import { combineReducers } from 'redux'

const userReducer = (state={points: 0, strikes: 0}, action) => {
  let userCopy;

  switch(action.type){
    case "SET_USER":
      return action.user
    case "ADD_POINT":
      userCopy = {...state}
      userCopy.points++
      return userCopy
    case "MARK_STRIKE":
      userCopy = {...state}
      userCopy.strikes++
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

const inputReducer = (state="", action) => {
  switch(action.type){
    case "TYPING":
      return action.input
    case "CLEAR_INPUT":
      return ""
    default:
      return state
  }
}

const wordsReducer = (state=[], action) => {
  let wordsCopy;
  switch(action.type){
    case "ADD_WORD":
      wordsCopy = [...state, action.word]
      return wordsCopy
    case "SET_WORDS":
      return action.words
    default:
      return state
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  dictionary: dictionaryReducer,
  input: inputReducer,
  words: wordsReducer,
})

export default rootReducer
