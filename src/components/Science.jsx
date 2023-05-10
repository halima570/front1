import { useState,useEffect } from "react";
import Articles from "./articles"
import { useContext } from 'react';
import { AuthContext } from '../UserContext';
import Nav from "./Nav";
import Footer from "./Footer";
import {Link} from 'react-router-dom'
import axios from "axios";
import { useTranslation } from 'react-i18next';
import Modal from "./NotaUser";
function Science() {
 const { t, i18n } = useTranslation();
        const [follow,setFollow]=useState('')
        const [source,setSource]=useState('')
        const [rss,setRss]=useState('')
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
        axios.delete('http://localhost:8081/follow?follow='+source+'&username='+user.data.username)
              .then(data=>setAllfollow(data.data))}
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
                setAllfollow(response.data)  })
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


        return (
                <div>
<Nav/>
<h1 className="text-center font-bold text-3xl mt-[150px] text-blue-800 p-2 ">{t("Science and environment")}</h1>
                <div className=" flex flex-wrap ml-[60px]">
             
                    
             
              <div className="border-2 border-black w-[500px] m-3 h-fit">
                     <div className="flex justify-between">
             <img src="P.jpg" className='w-[200px] m-1 '></img>
             {allfollow.some(item => item.follow.includes('ScienceDaily'))? 
            <button onClick={()=>unfollowsource("ScienceDaily")}
 className=" bg-black font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("unfollow")}</button> :    
<button onClick={()=>followsource("ScienceDaily")} className=" bg-black font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("follow")}</button> 
             }
                     </div>
                     <Articles source={"ScienceDaily"}
                 
                     />
            </div>
            
             
            <div className="border-2 border-black w-[500px] m-3 h-fit">
                     <div className="flex justify-between">
             <img src="v.png" className='w-[120px] m-1 '></img>
             {allfollow.some(item => item.follow.includes('Scientist'))? 
            <button onClick={()=>unfollowsource("Scientist")}
 className=" bg-black font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("unfollow")}</button> :    
<button onClick={()=>followsource("Scientist")} className=" bg-black font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("follow")}</button> 
             }
                     </div>
                     <Articles source={"Scientist"}
                 
                     />
            </div>
            <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <h2 className="font-bold text-2xl text-blue-500 mb-6">you can't follow</h2>
        <p className="text-xl">Please log in to access this feature if you havn't an acount Signin first.</p>
      </Modal>
            <div className="border-2 border-black w-[500px] m-3 h-fit">
                     <div className="flex justify-between">
             <img src="s.png" className='w-[240px] m-8 '></img>
             {allfollow.some(item => item.follow.includes('Environmental'))? 
            <button onClick={()=>unfollowsource("Environmental")}
 className=" bg-black font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("unfollow")}</button> :    
<button onClick={()=>followsource("Environmental")} className=" bg-black font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("follow")}</button> 
             }
                     </div>
                     <Articles source={"Environmental"}
                 
                     />
            </div>
            
            <div className="border-2 border-cyan-700 w-[500px] m-3 h-fit">
                     <div className="flex justify-between">
             <img src="m.jpg" className='w-[70px] m-1 '></img>
             {allfollow.some(item => item.follow.includes('EurekAlert'))? 
            <button onClick={()=>unfollowsource("EurekAlert")}
 className=" bg-cyan-700 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("unfollow")}</button> :    
<button onClick={()=>followsource("EurekAlert")} className=" bg-cyan-700 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("follow")}</button> 
             }
                     </div>
                     <Articles source={"EurekAlert"}
                 
                     />
            </div>
                  </div>
                  <Footer/>
                  </div>
              )
             }

export default Science