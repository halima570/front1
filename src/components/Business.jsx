import { useEffect,useState } from "react";
import Articles from "./articles"
import { useContext } from 'react';
import { AuthContext } from '../UserContext';
import {Link} from 'react-router-dom'
import axios from "axios";
import { useTranslation } from 'react-i18next';
import Nav from "./Nav";
import Footer from "./Footer";
import Modal from "./NotaUser";
function Business() {
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
        function unfollowsource(source){
            axios.delete('http://localhost:8081/follow?follow='+source+'&username='+user.data.username)
                  .then(data=>setAllfollow(data.data))}

        return (
<div>
    <Nav/>
<h1 className="text-center font-bold text-3xl mt-[150px] text-blue-800 p-2 ">{t("Business and finance")}</h1>
                <div className=" flex flex-wrap ml-[60px] mt-[100px]">
             
                    <div className="border-2 border-black w-[500px] m-3 h-fit">
                     <div className="flex justify-between">
             <img src="forbes.webp" className='w-[100px] '></img>
             {allfollow.some(item => item.follow.includes('forbes'))? 
            <button onClick={()=>unfollowsource("forbes")}
 className=" bg-black font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("unfollow")}</button> :    
<button onClick={()=>followsource("forbes")} className=" bg-black font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("follow")}</button> 
             }
                     </div>
                     <Articles source={"forbes"}
                 
                     />
              </div>
              <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <h2 className="font-bold text-2xl text-blue-500 mb-6">you can't follow</h2>
        <p className="text-xl">Please log in to access this feature if you havn't an acount Signin first.</p>
      </Modal>

              <div className="border-2 border-blue-700 w-[500px] m-3 h-fit">
                     <div className="flex justify-between">
             <img src="stocktwits.png" className='w-[170px] '></img>
             {allfollow.some(item => item.follow.includes('stocktwits'))? 
            <button onClick={()=>unfollowsource("stocktwits")}
 className=" bg-blue-700 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("unfollow")}</button> :    
<button onClick={()=>followsource("stocktwits")} className=" bg-blue-700 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("follow")}</button> 
             }
                     </div>
                     <Articles source={"stocktwits"}
                 
                     />
              </div>


              <div className="border-2 border-orange-500 w-[500px] m-3 h-fit">
                     <div className="flex justify-between">
             <img src="reddit.png" className='w-[80px] '></img>
             {allfollow.some(item => item.follow.includes('reddit'))? 
            <button onClick={()=>unfollowsource("reddit")}
 className=" bg-orange-500 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("unfollow")}</button> :    
<button onClick={()=>followsource("reddit")} className=" bg-orange-500 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("follow")}</button> 
             }
                     </div>
                     <Articles source={"reddit"}
                 
                     />
              </div>

              <div className="border-2 border-black w-[500px] m-3 h-fit">
                     <div className="flex justify-between">
             <img src="Bloomberg.png" className='w-[200px] m-3 '></img>
             {allfollow.some(item => item.follow.includes('bloomberg'))? 
            <button onClick={()=>unfollowsource("bloomberg")}
 className=" bg-black font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("unfollow")}</button> :    
<button onClick={()=>followsource("bloomberg")} className=" bg-black font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("follow")}</button> 
             }
                     </div>
                     <Articles source={"bloomberg"}
                 
                     />
              </div>

              <div className="border-2 border-black w-[500px] m-3 h-fit">
                     <div className="flex justify-between">
             <img src="reuters.webp" className='w-[200px] m-3 '></img>
             {allfollow.some(item => item.follow.includes('financial'))? 
            <button onClick={()=>unfollowsource("financial")}
 className=" bg-yellow-500 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("unfollow")}</button> :    
<button onClick={()=>followsource("financial")} className=" bg-yellow-500 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("follow")}</button> 
             }
                     </div>
                     <Articles source={"financial"}
                 
                     />
              </div>
             
                  </div>
                  <Footer/>
                  </div>
              )
             }

export default Business