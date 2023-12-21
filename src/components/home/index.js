import Cookies from "js-cookie"
import {useNavigate} from "react-router-dom"
import {Button} from 'react-bootstrap'
import BasicExample from "../navbar"
import { useEffect ,useState} from "react"
import './index.css'

const Home = () => {
    const Token=Cookies.get('jwttoken')
    console.log(Token)
    const navigation=useNavigate()
    const[show,setOutput]=useState(false)
    useEffect(()=>{
        if (Token===undefined){
            navigation('/login')
        }
        else{
            setOutput(true)
        }
    })
    if (show){
        return (
            <div>
                <div style={{display:"flex",justifyContent:'space-between'}}>
                    <img src="https://assets.ccbp.in/frontend/react-js/logo-img.png" alt="logo" />
                   <BasicExample/>
                </div>
                <div className="home-div">
                <h1>Home</h1>
                <Button onClick={()=>{Cookies.remove('jwttoken');
            navigation('/login')}}> Delete Token</Button>
                </div>

                <div className="about-div" id='about'>
                    <h1>about</h1>
                </div>

                <div className="carrers-div" id='carrers'>
                    <h1>carrers</h1>
                </div>
                

                
            </div>

          )
    }
   
    
 
}
export default Home