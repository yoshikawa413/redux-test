import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/user'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    //dispatch(login('hoge'))
  }

  render() {
    const { user } = this.props
    return (
      <div>
        {(user.isLogin ? function() {
          return <div>login</div>
        } : function() {
          return <div>not login</div>
        }).call(this)}
      </div>
    )
  }

}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { user } = state

  return {
    user: user
  }
}

export default connect(mapStateToProps)(App)