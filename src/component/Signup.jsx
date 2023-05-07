import React from "react";
import {useState} from 'react'
import {auth} from '../config/Firebase.jsx'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import './signup.css'

const Signup = () => {
const[email, setemail] = useState("")
const[password, setpassword] = useState("")
const Navigate = useNavigate()
const signupuser = async (e) => {
e.preventDefault()
try{
await createUserWithEmailAndPassword(auth,email,password)
Navigate("/page")
setemail("")
}
catch(error){
console.log(error)

}


}


return(
<div className="Signup">
   <div className="main">
      <form onSubmit={signupuser} className="form">
      <h3 className="emailh">Create Account</h3>
      <input type="email" className="email" value={email} onChange={(e) => {setemail(e.target.value)}} />
      <h3 className="pass">Create Password</h3>
      <input type="password" className="password" value={password} onChange={(e) => {setpassword(e.target.value)}} />
      <button className= "btn" onClick={signupuser}>SignUp</button>
      <p onClick={() => {Navigate("/signin")}}>already have an Account ,<a>just Login</a></p>
      </form>
   </div>
</div>

)
}

export default Signup