import React from 'react'
import ProfileForm from '../profile-form'

class SettingsContainer extends React.Component{
  render (){
    return (
      <div className='settings-container'>
        <h2> settings </h2>
        <ProfileForm
          buttonText='createProfile'
          onComplete={this.handleProfileCreate}>
        </ProfileForm>
      </div>
    )
  }
}

export default SettingsContainer
