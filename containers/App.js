import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/user'
import { addToList } from '../actions/gists'
import 'whatwg-fetch'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { todos: [] }
  }

  componentDidMount() {
    const { dispatch } = this.props
    //dispatch(login('hoge'))

    fetch('http://localhost:3000/')
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        console.log(json)
        dispatch(addToList(1, "a"))
        dispatch(addToList(2, "b"))
        dispatch(addToList(3, "c"))
      })

    //var todos_ = this.state.todos.slice()
    //todos_.push({id: 1, name: 'ito'})
    //this.setState({todos: [{id: 1}, {id: 2}]})

  }

  render() {
    const { user, gists } = this.props
    console.log(user)
    console.log(gists)

    return (
      <div>
        {(user.isLogin ? function() {
          return <div>login</div>
        } : function() {
          return <div>not login</div>
        }).call(this)}
        <ul>
          {gists.map(g =>
          <li>{g.id}</li>
          )}
        </ul>
      </div>
    )
  }

}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { user, gists } = state

  return {
    user: user,
    gists: gists
  }
}

export default connect(mapStateToProps)(App)