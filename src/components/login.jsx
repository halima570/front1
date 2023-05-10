
import { Link } from 'react-router-dom'

import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../UserContext';

function Login() {
  const navigate=useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login ,user} = useContext(AuthContext);

  const formSubmitHandler = e => {
    e.preventDefault()
   

   

    fetch("http://localhost:8081/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: email, password }),
    }).then((res)=>{
      if(res.status==401){
        alert('not authorized')
      }
      else{
return res.json()
      }
      }).then((data)=>{
        
        login(data)
        console.log('====================================');
        console.log(user);
        console.log('====================================');
        navigate('/')
  }
    
    )
  }


  return (
    <div className='flex flex-wrap '>
  
    <div className='lg:w-[600px] lg:mr-[20px] lg:ml-[20px]'>
    <img src='NEWSPILOT.png' className='md:ml-[100px] lg:w-[200px] m-5'></img>
    
    <img className='lg:w-[530px]  rounded' src='Coding.png'></img>
    <h1 className='md:text-3xl lg:text-xl text-blue-900 m-7'>Log to your <span className='font-bold lg:text-2xl md:text-4xl m-2 text-blue-400'>NewsPilot</span></h1>
    </div>
    <div className='bg-white rounded '>
    
    <h1 className='lg:text-2xl text-blue-900 font-bold m-14 md:text-5xl md:ml-[200px] lg:ml-3'>LOG IN ACCOUNT</h1>
    
   
    <div className='w-[500px] md:ml-[100px] lg:ml-1'>
    
    <form method='POST' action='' onSubmit={formSubmitHandler} className='flex flex-wrap'>
    {/* <input type={'text'} placeholder='First Name' className='p-2 m-3 rounded border-2 border-gray-400 pl-[100px] pr-[100px]'></input> */}
    <input type={'email'} 
    onChange={e => setEmail(e.target.value)} value={email} placeholder='Email Adress' className='p-2 m-3 rounded border-2 border-gray-400 pl-[60px] pr-[60px] lg:pl-[100px] lg:pr-[100px] md:p-3 md:pr-[200px] md:pl-[200px] '></input>
    <input type={'password'}
     onChange={e => setPassword(e.target.value)} value={password} placeholder='Password' className='p-2 m-3 rounded border-2 border-gray-400 pl-[60px] pr-[60px] lg:pl-[100px] lg:pr-[100px] md:p-3 md:pr-[200px] md:pl-[200px] '></input>
    <button 
    intent="primary"
    disabled={isSubmitting}
    text={`${isSubmitting ? "Signing In" : "Sign In"}`}
    fill
    type='submit'
    className='  text-xl font-bold text-white bg-blue-400 m-3 rounded p-2 pl-[80px]  pr-[90px] lg:pl-[130px] lg:pr-[120px]'>
      log in Account</button>
    
    <div className='m-4 md:text-xl lg:text-lg'>
      if you have not an account then go to <span className='font-bold hover:text-blue-300 md:text-2xl lg:text-xl'><Link to='/Signin'>Sing in</Link></span>
    </div>
    
    </form>
    
  </div>
    
    </div>
    
        </div>
  )
}

export default Login