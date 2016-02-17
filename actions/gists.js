export function addToList(id, text) {
  return {
    type: 'ADD_LIST',
    id: id,
    text: text
  }
}
