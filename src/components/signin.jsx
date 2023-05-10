import React, { useContext, useState } from "react"
import Login from './login';
import { Link } from 'react-router-dom';

import { useNavigate } from "react-router-dom";

function Singin() {
const navigate=useNavigate()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const formSubmitHandler = e => {
    e.preventDefault()
   
    fetch('http://localhost:8081/users/signup', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: email, password ,firstName,lastName}),
    }).then((res)=>res.json())
    .then(data=>setUserContext(firstName,lastName,email,password),navigate('/Login')
    
    
    
    )
  }

  return (
    <div className='flex flex-wrap'>
  
<div className='lg:w-[400px] md:w-[500px] md:ml-[90px] lg:ml-[50px] w-[340px]'>
<img src='NEWSPILOT.png' className='lg:w-[200px] m-5'></img>

<img className='lg:w-[360px]  rounded' src='Vlog.png'></img>
<h1 className='lg:text-xl md:text-3xl text-blue-900 m-7'>Let get start with <span className='font-bold lg:text-2xl m-2 md:text-4xl text-blue-400'>NewsPilot</span></h1>
</div>
<div className='bg-white rounded '>
<div className='lg:w-[520px] md:w-[520px] w-[350px] lg:ml-[150px] md:ml-[100px] ml-[10px]'>
<h1 className=' lg:text-2xl md:text-4xl md:ml-[100px] text-blue-900 font-bold mt-8 mb-8'>CREATE ACCOUNT</h1>
<div className='flex'>

</div>


<form method='POST' onSubmit={formSubmitHandler} action='' className='flex justify-items-center flex-wrap'>
<input type={'text'} value={firstName} onChange={e => setFirstName(e.target.value)} placeholder='First Name' className='pl-[100px] p-2 mt-3 rounded border-2 border-gray-400 mt-4 lg:pr-[220px]  md:pr-[220px] md:pl-[100px] '></input>
<input type={'text'} value={lastName} onChange={e => setLastName(e.target.value)} placeholder='Last Name' className='pl-[100px] p-2 mt-3 rounded border-2 border-gray-400 mt-4 lg:pr-[220px] md:pr-[220px] md:pl-[100px]'></input>
<input type={'email'} value={email} onChange={e => setEmail(e.target.value)}   placeholder='Email Adress' className='pl-[100px] p-2 mt-3 rounded border-2 border-gray-400 md:pr-[220px] lg:pr-[220px] md:pl-[100px]'></input>
<input type={'password'} value={password}  onChange={e => setPassword(e.target.value)}  placeholder='Password' className=' pl-[100px] p-2 mt-3 rounded border-2 border-gray-400 md:pr-[220px] lg:pr-[220px] md:pl-[100px]'></input>
<button 
intent="primary"
fill
type="submit"
className='pl-[100px] pr-12 md:pl-[180px] md:pr-[180px] text-xl font-bold text-white bg-blue-400 rounded p-2  mt-3 pr-[20px]'>
  Create Account</button>
</form>

<div className='mt-1 md:text-xl lg:text-sm'>
if you are already have an account then go to 
<a className='font-bold hover:text-blue-400 md:text-2xl lg:text-xl'><Link to='/Login'>Login</Link></a>


</div>

</div>



</div>




    </div>
  )
}

export default Singin;