import React , {useContext} from 'react'
import  UserContext  from '../context/UserContext'

function Profile() {
  const {user} = useContext(UserContext)
  if (!user) {
    return <h1>Pleae Login to see your profile</h1>
  }
  return (
    <div>
      <h1>Voilla you are logged in</h1>
      <h2>Welcome {user.username}</h2>
    </div>
  )
}

export default Profile