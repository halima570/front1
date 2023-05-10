import { useState,useEffect } from "react"
import Articles from "./articles"
import { useContext } from 'react';
import { AuthContext } from '../UserContext';
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom'
import axios from "axios";
import Nav from "./Nav";
import Footer from "./Footer";
import Modal from "./NotaUser";
function Politic() {

 const { t, i18n } = useTranslation();
        const [follow,setFollow]=useState('')
        const [source,setSource]=useState('')
        const [rss,setRss]=useState('')
        const [showpop,setShowpop]=useState(false)
        const { user } = useContext(AuthContext);
        const [allfollow,setAllfollow]=useState([])
        const [isOpen, setIsOpen] = useState(false);

        function handleOpenModal() {
          setIsOpen(true);
        }
      
        function handleCloseModal() {
          setIsOpen(false);
        }
      
        useEffect( () => {
          if(user){
            axios.get('http://localhost:8081/follow?username='+user.data.username).
            then(data=>setAllfollow(data.data))}
      }, [user])
      function unfollowsource(source){
        if(user){
        axios.delete('http://localhost:8081/follow?follow='+source+'&username='+user.data.username)
              .then(data=>setAllfollow(data.data))}else{
                
                }}
        function followsource(source)
        {if(user){
        console.log('====================================');
        console.log(source,"floooow is by ",user.data.username,'rss is');
        console.log('====================================');
        axios.post('http://localhost:8081/follow', {
               username: user.data.username,
               follow: [source]
             })
             .then(function (response) {
                setAllfollow(response.data)
             })
             .catch(function (error) {
               console.log(error);
             });
             axios.post('http://localhost:4000/email',{username: user.data.username})
             .then(function (response) {
                setAllfollow(response.data)})
            
            }else{
                handleOpenModal()                
                }
             
        }
        console.log(showpop);
        



        return (

<div>
<Nav/>
<h1 className="text-center font-bold text-3xl mt-[150px] text-blue-800 p-2 ">{t('POLITIC')}</h1>

                <div className=" flex flex-wrap ml-[60px]">
             
                    <div className="border-2 border-red-500 w-[500px] m-3 h-fit">
                     <div className="flex justify-between">
             <img src="politico.jpg" className='w-[100px] m-2'></img>
             {allfollow.some(item => item.follow.includes('politico'))? 
            <button onClick={()=>{ unfollowsource("politico")}}
 className=" bg-red-500 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("unfollow")}</button> :    
<button onClick={()=>{followsource("politico")}} className=" bg-red-500 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("follow")}</button> 
             }
                     </div>
                     <Articles source={"politico"}/>
              </div>
             
              <div className="border-2 border-red-500 w-[500px] m-3 h-fit">
                     <div className="flex justify-between">
             <img src="cnn.png" className='w-[120px] m-4'></img>
             {allfollow.some(item => item.follow.includes('cnn'))? 
            <button onClick={()=>unfollowsource("cnn")}
 className=" bg-red-500 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("unfollow")}</button> :    
<button onClick={()=>followsource("cnn")} className=" bg-red-500 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("follow")}</button> 
             }
                     </div>
                     <Articles source={"cnn"}
                 
                     />
              </div>
              

              <div className="border-2 border-blue-500 w-[500px] m-3 h-fit">
                     <div className="flex justify-between">
             <img src="hill.webp" className='w-[120px] m-4'></img>
             {allfollow.some(item => item.follow.includes('hill'))? 
            <button onClick={()=>unfollowsource("hill")}
 className=" bg-blue-500 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("unfollow")}</button> :    
<button onClick={()=>followsource("hill")} className=" bg-blue-500 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("follow")}</button>

             }
            
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <h2 className="font-bold text-2xl text-blue-500 mb-6">you can't follow</h2>
        <p className="text-xl">Please log in to access this feature if you havn't an acount Signin first.</p>
      </Modal>
                     </div>
                     <Articles source={"hill"}
                 
                     />
              </div>

              <div className="border-2 border-orange-500 w-[500px] m-3 h-fit">
                     <div className="flex justify-between">
             <img src="fire.webp" className='w-[180px] '></img>
             {allfollow.some(item => item.follow.includes('fivethirtyeight'))? 
            <button onClick={()=>unfollowsource("fivethirtyeight")}
 className=" bg-orange-500 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("unfollow")}</button> :    
<button onClick={()=>followsource("fivethirtyeight")} className=" bg-orange-500 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("follow")}</button> 
             }
                     </div>
                     <Articles source={"fivethirtyeight"}
                 
                     />
              </div>
                  </div>
                  <Footer/>
                  </div>
              )
             }

export default Politic