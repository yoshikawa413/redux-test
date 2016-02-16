function gist(state, action) {
  switch (action.type) {
    case 'ADD_LIST':
       return {
        id: action.id,
        text: action.text
      }
    default:
      return state
  }
}

export default function gists(state = [], action) {
  switch (action.type) {
    case 'ADD_LIST':
      return [
        ...state,
        gist(undefined, action)
      ]
    case 'REMOVE':
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ]
    default:
      return state
  }
}
