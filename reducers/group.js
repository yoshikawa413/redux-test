export default function group(state, action) {
  switch (action.type) {
    case 'GROUP_OK':
      return {
        isLogin: true,
        name: action.name
      }
    default:
      return {
        isLogin: false
      }
  }
}
