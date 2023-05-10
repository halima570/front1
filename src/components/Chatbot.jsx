
import Nav from './Nav'
import Footer from './Footer'
import { useState } from 'react'
import axios from 'axios'
import { useTranslation } from 'react-i18next';

function Chatboot() {
  const [data,setData] = useState("")
  const { t, i18n } = useTranslation();
  const [inputValue,setInputValue] = useState("")
  function handleClick(){
    axios.post('http://localhost:5000/', {
      text:`generate  some websites links that talks about ${inputValue}`,
    
    
    })
    .then(function (response) {
      console.log(response.data.bot)
       setData(response.data.bot)
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  return (
    <div>
<Nav/>

<h1 className='text-center text-2xl font-bold mt-[140px]'>{t("here you can search for any topic that you want to read")}</h1>
<div className=' flex flex-wrap justify-center mt-8'>
<input type="text" onChange={(e)=>setInputValue(e.target.value)} placeholder={t("write a topic")}
 className=' p-2 lg:pr-[100px]  border-2 rounded-xl border-blue-700' />
      <button className='bg-blue-400 rounded-xl font-bold text-xl p-2 text-white hover:text-black ml-1' onClick={handleClick}>{t("click me")}</button>
      </div>
<div>
  <h1 className='text-xl font-bold m-3'>{t("the answer")} :</h1>

<p className='p-[20px] flex flex-wrap justify-center border-2 border-blue-700 
rounded-lg ml-[100px] mr-[100px] text-gl font-serif'>{data}</p>
</div>
<Footer/>
    </div>
  )
}

export default Chatboot;
