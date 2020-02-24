const HEADERS = { "Content-type": "application/json", "Accept": "application/json" }

export const setUser = user => {
  return { type: "SET_USER", user }
}

export const typeInput = input => {
  return dispatch => {
    dispatch({ type: "TYPING", input })
    dispatch(checkInput())
  }
}

export const checkInput = () => {
  return (dispatch, getStore) => {
    let input = getStore().input
    let words = getStore().words

    words.forEach( word => {
      if( input === word ){
        dispatch(correctInput())
        dispatch(removeWord( word ))
      }
    })
  }
}

export const correctInput = () => {
  return dispatch => {
    dispatch(settingWords())
    dispatch(addPoint())
    dispatch(clearInput())
  }
}

export const clearInput = () => {
  return { type: "CLEAR_INPUT" }
}

export const removeWord = word => {
  return (dispatch, getStore) => {
    let words = getStore().words

    let index = words.indexOf(word)
    let first = words.slice(0, index)
    let second = words.slice(index + 1, words.length)
    let newWords = first.concat(second)

    dispatch(setWords(newWords))
  }
}

export const setWords = words => {
  return { type: "SET_WORDS", words }
}

export const addPoint = () => {
  return { type: "ADD_POINT" }
}

export const setDictionary = dictionary => {
  return { type: "SET_DICTIONARY", dictionary }
}

export const addWord = word => {
  return { type: "ADD_WORD", word }
}

export const settingWords = () => {
  return (dispatch, getStore) => {
    let dict = getStore().dictionary

    let length = dict.length
    let index = Math.floor(Math.random() * (length - 1))
    let randomWord = dict[index]

    let first = dict.slice(0, index)
    let second = dict.slice(index + 1, dict.length)
    let newDict = first.concat(second)

    dispatch(setDictionary(newDict))
    dispatch(addWord(randomWord))
  }
}

const getRandomWord = () => {
  return (dispatch, getStore) => {
    let words = getStore().words

    while (words.length < 10){
      dispatch(settingWords())
    }
  }
}

export const markStrike = () => {
  return { type: "MARK_STRIKE" }
}
