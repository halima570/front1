import { useState,useEffect } from "react"
import Articles from "./articles"
import { useContext } from 'react';
import { AuthContext } from '../UserContext';
import axios from "axios";
import Nav from "./Nav";
import Footer from "./Footer";
import { useTranslation } from 'react-i18next';
import Modal from "./NotaUser";
function Food() {
    const { t, i18n } = useTranslation();
  const [follow,setFollow]=useState('')
  const [source,setSource]=useState('')

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
  function followsource(source)
  {if(user){
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

function unfollowsource(source){
axios.delete('http://localhost:8081/follow?follow='+source+'&username='+user.data.username)
      .then(data=>setAllfollow(data.data))}
   
        return (
                

<div >
<div className="mb-10">
   <Nav/> 
</div>
<h1 className="text-center font-bold text-3xl mt-[150px] text-blue-800 p-2 ">{t("Food and dining")}</h1>




                <div className=" flex flex-wrap ml-[60px] mt-[60px]">
             
                    
             
              <div className="border-2 border-yellow-500 w-[500px] m-3 h-fit">
                     <div className="flex justify-between">
             <img src="bon.webp" className='w-[130px] m-2 '></img>
            {allfollow.some(item => item.follow.includes('bonapitie'))? 
            <button onClick={()=>unfollowsource("bonapitie")}
 className=" bg-yellow-500 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("unfollow")}</button> :    
<button onClick={()=>followsource("bonapitie")} className=" bg-yellow-500 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("follow")}</button> 
             }
                     </div>
                     <Articles source={"bonapitie"}
                 
                     />
              </div>
              <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <h2 className="font-bold text-2xl text-blue-500 mb-6">you can't follow</h2>
        <p className="text-xl">Please log in to access this feature if you havn't an acount Signin first.</p>
      </Modal>
              <div className="border-2 border-red-500 w-[500px] m-3 h-fit">
                     <div className="flex justify-between">
             <img src="eat.png" className='w-[130px] m-2 '></img>
             {allfollow.some(item => item.follow.includes('eater'))? 
            <button onClick={()=>unfollowsource("eater")}
 className=" bg-yellow-500 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("unfollow")}</button> :    
<button onClick={()=>followsource("eater")} className=" bg-yellow-500 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("follow")}</button> 
             }
                     </div>
                     <Articles source={"eater"}
                 
                     />
              </div>


              <div className="border-2 border-blue-500 w-[500px] m-3 h-fit">
                     <div className="flex justify-between">
             <img src="eats.png" className='w-[100px] m-2 '></img>
             {allfollow.some(item => item.follow.includes('eats'))? 
            <button onClick={()=>unfollowsource("eats")}
 className=" bg-yellow-500 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("unfollow")}</button> :    
<button onClick={()=>followsource("eats")} className=" bg-yellow-500 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("follow")}</button> 
             }
                     </div>
                     <Articles source={"eats"}
                 
                     />
              </div>

              <div className="border-2 border-red-500 w-[500px] m-3 h-fit">
                     <div className="flex justify-between">
             <img src="network.png" className='w-[200px] m-3 '></img>
         {allfollow.some(item => item.follow.includes('network'))? 
            <button onClick={()=>unfollowsource("network")}
 className=" bg-yellow-500 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("unfollow")}</button> :    
<button onClick={()=>followsource("network")} className=" bg-yellow-500 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t('follow')}</button> 
             }
                     </div>
                     <Articles source={"network"}
                 
                     />
              </div>
             
             
              
             
                  </div>
                  <Footer/>
                  </div>
              )
             }
export default Food