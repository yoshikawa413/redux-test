export default function user(state, action) {
  switch (action.type) {
    case 'LOGIN_OK':
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
