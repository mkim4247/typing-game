import { combineReducers } from 'redux'

const userReducer = (state=null, action) => {
  switch(action.type){
    case "SET_USER":
      return action.user
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

const wordReducer = (state=null, action) => {
  switch(action.type){
    case "TYPING":
      return action.letter
    default:
      return state
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  dictionary: dictionaryReducer,
  word: wordReducer
})

export default rootReducer
