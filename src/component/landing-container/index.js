
import React from 'react'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'

import AuthForm from '../auth-form'
import * as util from '../../lib/util.js'
import {signupRequest, loginRequest} from '../../action/auth-actions.js'
import {userProfileFetchrequest} from '../../action/profile-actions.js'

class LandingContainer extends React.Component {
  constructor(props){
    super(props)

    this.handleLogin = this.handleLogin.bind(this)
    this.handleSignup = this.handleSignup.bind(this)
  }

  componentWillReceiveProps(props){
    if(props.auth && props.userProfile)
      props.history.replace('/dashboard')
    if(props.auth && !props.userProfile)
      props.history.repalce('/settings')
  }

  handleLogin(user){
    let {profileFetch, history} = this.this.props
    return this.props.login(user)
    .then(()=> profileFetch())
    .then(()=> history.push('/dashboard'))
    .catch(util.logError)
  }

  handleSignup(user){
    return this.props.signup(user)
    .then(() => {
      this.props.history.push('/dashboard')
    })
    .catch(util.logError)
  }

  render(){
    let {params} = this.props.match

    let handleComplete = params.auth === 'login'
      ? this.handleLogin
      : this.handleSignup

    return (

      <div>
        <AuthForm
          auth={params.auth}
          onComplete={handleComplete}
          />
        <div className='auth-nav'>
          {util.renderIf(params.auth === 'login',
          <Link to='/welcome.signup'>signup</Link>)}
        </div>

      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  auth: state.auth,
  userProfile: state.userProfile,
})

let mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signupRequest(user)),
    login: (user) => dispatch(loginRequest(user)),
    profileFetch: () =>dispatch(userProfileFetchrequest()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingContainer)
