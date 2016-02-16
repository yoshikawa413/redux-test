import { combineReducers } from 'redux'
import user from './user'
import group from './group'
import gists from './gists'

export default combineReducers({
  user,
  group,
  gists
})
