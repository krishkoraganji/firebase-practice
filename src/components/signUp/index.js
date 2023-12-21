import React from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../firebase'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'
import {Button} from 'react-bootstrap'
import AuthDetails from '../authDetails'
const SignUp=()=> {
    const [email,setEmail]=useState('')
    const [loginStatus,setLoginStatus]=useState({})
    const [password,setPassword]=useState('')
    const [error,setError]=useState(false)

    const navigation=useNavigate()

    const submitTheForm= async(event)=>{
        event.preventDefault()
        createUserWithEmailAndPassword(auth,email,password)
          .then((userDetails)=>{
            const token=userDetails.user.accessToken
            Cookies.set('jwttoken',token)
            navigation('/login')
            console.log(userDetails)
            setError(false)
          })
          .catch((error)=>{
            setError(true)
          });

          

        

        
    }
  return (
    <div className='main-div'>
        <h1>SIGNUP</h1>
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
        <Button type="submit">SIGNUP</Button>
        {error&& <p style={{color:'white'}}>{email} already have account</p>}
      </form>
      <AuthDetails/>
    </div>
  )
}

export default SignUp