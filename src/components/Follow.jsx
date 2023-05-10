import React, { useEffect,useState } from 'react'
import Articles from "./articles"
import { useContext } from 'react';
import { AuthContext } from '../UserContext';
import axios from 'axios'
import Nav from './Nav'
import Footer from './Footer'
import { useTranslation } from 'react-i18next';
function Follow() {
    const { t, i18n } = useTranslation();
          const { user } = useContext(AuthContext); 
          const [follow, setFollow] = useState()
      
      useEffect( () => {
        if(user){
            axios.get('http://localhost:8081/follow?username='+user.data.username)
            .then(data=>setFollow(data.data))}}, [user])

    const getunfollow=(followed)=>{
        console.log(followed);
            axios.delete('http://localhost:8081/follow?follow='+followed+'&username='+user.data.username).then(data=>
            setFollow(data.data))}

if(follow){
    return (<div><Nav/><div className='mt-[100px]'>
        
        <h1 className='text-center font-bold mt-[130px] text-2xl mb-10'>{t("Page Follow")}</h1>
        {t("HI")} <span className='font-bold text-xl text-pink-700'>{user.data.firstName}</span>  
        <div className= 'flex justify-between' >
    <div className='flex flex-wrap justify-start'>
{ follow.map((item)=> { 
        return <div className='border-2 border-black rounded-lg  lg:w-[400px] m-3 h-fit hover:bg-slate-200'>
   <div className='flex justify-between'> <div  className='font-bold text-xl text-pink-700 p-1'> {item.follow}</div>
   <div className='p-1 border-2 border-yellow-400 rounded-lg m-1 font-bold hover:bg-yellow-200'>
    <button onClick={()=>getunfollow(item.follow)} >{t("unfollow")}</button></div>
   </div>
    <Articles source={item.follow}/> </div> })
    }
    </div>
<div className='border-l-2 border-black p-2 rounded-lg bg-slate-200' >
    {t("you're followed this websites:")}
<div className='font-bold text-xl text-pink-700 m-3 justify-end'>

{follow.map(item=><div className='p-3 hover:text-green-400 hover:bg-pink-600 hover:rounded-lg'>{item.follow}</div>)}
</div>
    </div>
    
        </div>
        
        </div>
        <Footer/>
        </div>
      )
    }
}
export default Follow