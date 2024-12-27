import React  , {useContext , useState} from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')

    const {setUser} = useContext(UserContext)
    //fetch form userContext

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username , password})
    }
  return (
    <div className='flex flex-col gap-5'>
        <h2>Login</h2>
        <input type="text" placeholder='Enter your name'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <input type="password" placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login