import React from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../firebase'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'
import {Button} from 'react-bootstrap'
import AuthDetails from '../authDetails'
const Login=()=> {
    const [email,setEmail]=useState('')
    const [loginStatus,setLoginStatus]=useState({})
    const [password,setPassword]=useState('')
    const token=Cookies.get('jwttoken')
    const [error,showError]=useState(false)

    const navigation=useNavigate()

    const submitTheForm= async(event)=>{
        event.preventDefault()
        signInWithEmailAndPassword(auth,email,password)
          .then((userDetails)=>{
            console.log(userDetails)
            navigation('/')
          })
          .catch((error)=>{
            console.log(error)
          })

        

        
    }
    if (token===undefined){
  return (
    <div className='main-div'>
      <h1>SIGNIN</h1>
      <form onSubmit={submitTheForm}>
        <img src="https://assets.ccbp.in/frontend/react-js/logo-img.png" className="login-website-logo" alt="website logo"/>
        <div className='inputs'>
            <label>EMAIL</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Enter u r email'/>
        </div>
        <div className='inputs'>
            <label>PASSWORD</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Password'/>
        </div>
        <Button type="submit">Login</Button>
        {error&&<div></div>}
      </form>
      <AuthDetails/>
    </div>
  )
    }
        navigation('/')
    

}

export default Login