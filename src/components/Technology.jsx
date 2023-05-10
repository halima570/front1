import { useState,useEffect } from "react"
import Articles from "./articles"
import { useContext } from 'react';
import { AuthContext } from '../UserContext';
import Nav from "./Nav";
import Footer from "./Footer";
import {Link} from 'react-router-dom'
import axios from "axios";
import { useTranslation } from 'react-i18next';
import Modal from "./NotaUser"; 
function Technology() {
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
                setAllfollow(response.data)             })
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
            <h1 className="text-center font-bold text-3xl mt-[150px] text-blue-800 p-2 ">{t("Technology")}</h1>

   <div className=" flex flex-wrap ml-[60px]">

       <div className="border-2 border-green-300 w-[500px] m-3 h-fit">
        <div className="flex justify-between">
<img src="TechCrunch.png" className='w-[100px] m-2'></img>
{allfollow.some(item => item.follow.includes('techcrunch'))? 
            <button onClick={()=>unfollowsource("techcrunch")}
 className=" bg-green-300 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("unfollow")}</button> :    
<button onClick={()=>followsource("techcrunch")} className=" bg-green-300 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("follow")}</button> 
             }
        </div>
        <Articles source={"techcrunch"}
    
        />
 </div>
 <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <h2 className="font-bold text-2xl text-blue-500 mb-6">you can't follow</h2>
        <p className="text-xl">Please log in to access this feature if you havn't an acount Signin first.</p>
      </Modal>

 <div className="border-2 border-black w-[500px] m-3">
        <div className="flex justify-between">
<img src="Wired.png" className='w-[100px] m-2'></img>
{allfollow.some(item => item.follow.includes('wired'))? 
            <button onClick={()=>unfollowsource("wired")}
 className=" bg-black font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("unfollow")}</button> :    
<button onClick={()=>followsource("wired")} className=" bg-black font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("follow")}</button> 
             }
        </div>
        <Articles source={"wired"}/>
 </div>

 <div className="border-2 border-blue-700 w-[500px] m-3">
        <div className="flex justify-between">
<img src="verge.png" className='w-[60px] m-2'></img>
{allfollow.some(item => item.follow.includes('theverge'))? 
            <button onClick={()=>unfollowsource("theverge")}
 className=" bg-blue-700 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("unfollow")}</button> :    
<button onClick={()=>followsource("theverge")} className=" bg-blue-700 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("follow")}</button> 
             }
        </div>
        <Articles source={"theverge"}
       
        
        />
 

 </div>


 <div className="border-2 border-black w-[500px] m-3">
        <div className="flex justify-between">
<img src="gizmodo.png" className='w-[120px] '></img>
{allfollow.some(item => item.follow.includes('gizmodo'))? 
            <button onClick={()=>unfollowsource("gizmodo")}
 className=" bg-black font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("unfollow")}</button> :    
<button onClick={()=>followsource("gizmodo")} className=" bg-black font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("follow")}</button> 
             }
        </div>
        <Articles source={"gizmodo"}
       
        
        />
 

 </div>





<div className="border-2 border-red-500 w-[500px] m-3 h-fit">
 <div className="flex justify-between">
<img src="ubergizmo.jpg" className='w-[120px] '></img>
{allfollow.some(item => item.follow.includes('uvergizmo'))? 
            <button onClick={()=>unfollowsource("ubergizmo")}
 className=" bg-red-500 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("unfollow")}</button> :    
<button onClick={()=>followsource("ubergizmo")} className=" bg-red-500 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("follow")}</button> 
             }
 </div>
 <Articles source={"ubergizmo"}

 />
</div> 
     </div>
     <Footer/>
     </div>
 )
}

export default Technology