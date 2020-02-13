const HEADERS = { "Content-type": "application/json", "Accept": "application/json" }

export const setUser = user => {
  return { type: "SET_USER", user }
}

export const typeLetter = letter => {
  return { type: "TYPING", letter }
}

export const setDictionary = dictionary => {
  return { type: "SET_DICTIONARY", dictionary }
}

export const setWord = word => {
  return { type: "SET_WORD", word }
}

export const settingWords = () => {
  return (dispatch, getStore) => {
    let dict = getStore().dictionary

    let length = dict.length
    let index = Math.floor(Math.random() * (length - 1))
    let randomWord = dict[index]

    dispatch(setWord(randomWord))
  }
}
