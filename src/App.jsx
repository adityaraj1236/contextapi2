import React from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

const App = () => {
  return (
    <UserContextProvider>
    <div>
      <h1 className='bg-red-500'>React with Aditya</h1>
      <Login/>
      <Profile/>
      
    </div>
    </UserContextProvider>
  )
}

export default App