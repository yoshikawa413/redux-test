export function login(name) {
  return {
    type: 'LOGIN_OK',
    name: name
  }
}


export function addToList(id, text) {
  return {
    type: 'ADD_LIST',
    id: id,
    text: text
  }
}
