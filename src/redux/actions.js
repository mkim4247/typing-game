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
