import React from "react";
import { useState } from "react";
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../config/Firebase'
import './Signin.css'
import { useNavigate } from "react-router-dom";

const Signin = () => {
const[email, setemail] = useState("")
const[password, setpassword] = useState("")
const Navigates = useNavigate()
const Signinuser = async (e) => {
e.preventDefault()
try{
await signInWithEmailAndPassword(auth,email,password)
Navigates('/Page')
setemail("")
}
catch(error){
console.log(error)
alert(error)
}
}

return(
<div className="Signin">
   <div className="logo"></div>
   <div className="mains">
      <form className="forms" onSubmit={Signinuser}>
         <h3 className="Login">SignIn</h3>
       <input className="emails" placeholder="type your email here" value={email} type="email" onChange={(e) => {setemail(e.target.value)}} />
       <h3 className="passh">Your password</h3>
       <input className="passs" placeholder="type your password here" value={password} type="password"  onChange={(e) => {setpassword(e.target.value)}} />
      <button className="btn2" onClick={Signinuser}>SignIn</button>
      <p onClick={() => {Navigates("/")}}>dont have an Account ?, just <a href="">create Account</a> </p>
      </form>
   </div>
</div>


)

}

export default Signin