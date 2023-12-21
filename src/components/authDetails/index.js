import { onAuthStateChanged } from "firebase/auth"
import React,{useEffect,useState} from "react"
import { auth } from "../firebase";

function AuthDetails() {
    const[authUser,setUser]=useState(null);

    useEffect(()=>{
        const listen=onAuthStateChanged(auth,(user)=>{
            if(!user){
                setUser(user)
            }else{
                setUser(null)

            }
        })

        return ()=>{
            listen()
          }
    },[])

    const signout=()=>{
        signout(auth).then(()=>{
console.log('signout')
        }).catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div>{authUser ? <p>SIGNIN {authUser}</p>:<p>signout</p>}</div>
  )
}
export default AuthDetails