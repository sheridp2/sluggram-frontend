let validateProfileCreate = (profile) =>{
  if(!profile.avatar || !profile.bio ||!profile._id || !profile.owner || !profile.username || !profile.email)
    throw new Error('VALIDATION ERROR: profile require avatar and bio')
}

export default(state = null, action) => {
  let {type, payload} = action
  switch(type){
    case 'PROFILE_CREATE':
      validateProfileCreate(payload)
      return payload
    case 'PROFILE_UPDATE':
    if(!state)
      throw new Error('USAGE ERROR: cannot update when profile is null')
      validateProfileCreate(payload)
      return {...state, ...payload}
    case 'LOGOUT':
      return null
    default:
      return state
  }
}
