import React from 'react'
import {connect} from 'react-redux'
import AuthForm from '../auth-form'
import * as util from '../../lib/util.js'
import {signupRequest, loginRequest} from '../../action/auth-actions.js'

class LandingContainer extends React.Component {
  constructor(props){
    super(props)

    this.handleLogin = this.handleLogin.bind(this)
    this.handleSignup = this.handleSignup.bind(this)
  }

  handleLogin(user){
    this.props.login(user)
    .then(()=> {
      this.props.history.push('/dashboard')
    })
  }

  handleSignup(user){
    this.props.signup(user)
    .then(()=> {
      this.props.history.push('/dashboard')
    })
  }

  render(){
    let {params} = this.props.match
    console.log('history', this.props.history)
    let handleComplete = params.auth === 'login'
      ? this.props.login
      : this.props.signup

    return (
      <div>
        <AuthForm
          auth={params.auth}
          onComplete={handleComplete}
          />

      </div>
    )
  }
}

let mapStateToProps = () => ({})
let mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signupRequest(user)),
    login: (user) => dispatch(loginRequest(user)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingContainer)
