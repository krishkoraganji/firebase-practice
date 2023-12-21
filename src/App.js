import React  from 'react'
import Login from './components/login'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/home'
import SignUp from './components/signUp'
import ProtectedRoute from './components/protected'

const App = () => {
    
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
