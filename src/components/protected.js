import  Cookies  from "js-cookie"
import { Route } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function ProtectedRoute(props) {
    const token=Cookies.get("jwttoken")
    const navigation=useNavigate()
  if (token===undefined){
    navigation('/login')
  } 
  return<Route {...props}/>
  
}
export default ProtectedRoute