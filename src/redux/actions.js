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
    let word = getStore().word

    if( input === word ){
      dispatch(correctInput())
    }
  }
}

export const correctInput = () => {
  return dispatch => {
    dispatch(settingWords())
    dispatch(addPoint())
  }
}

export const addPoint = () => {
  return { type: "ADD_POINT" }
}

export const setDictionary = dictionary => {
  return { type: "SET_DICTIONARY", dictionary }
}

export const setWords = words => {
  return { type: "SET_WORDS", words }
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
    dispatch(setWords(randomWord))
  }
}
