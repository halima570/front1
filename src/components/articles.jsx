import React, { useState } from 'react'
import {useEffect } from "react"
import axios from 'axios'
function Articles({source})
{  
  const [articles,setArticles]=useState([])
const [readmore,setReadmore]=useState(true)
const [ml,setMl]=useState(true)
  console.log(source)
  console.log(articles)

  useEffect(()=>{
axios.get(`http://localhost:4000/getNews?source=${source}`)
    .then(res=>{
      setArticles(res.data)
    }).catch(err=>{
      console.log(err)
    })
    },[])
    const f=()=>{
      setReadmore(!readmore)
      setMl(!ml)
    }

let formatted={day:'numeric',
month:'long',
year:'numeric'
}


  return (
  <div className='p-2'>
    { readmore ? articles.slice(0,3).map((item)=>
    <div>

     <h3 className='text-gl font-bold hover:text-blue-700 '><a target='_blank' href={item.item.link}>{item.item.title}</a></h3>
     <p className='text-gl'>{new Date(item.item.pubDate).toLocaleDateString("en-GB",formatted)}</p>
     </div>
    ): 
    articles.map((item)=>
    <div>

     <h3 className='text-gl font-bold hover:text-blue-700 '><a target='_blank' href={item.item.link}>{item.item.title}</a></h3>
     <p className='text-gl'>{new Date(item.item.pubDate).toLocaleDateString("en-GB",formatted)}</p>
    
     </div>
    )
   
    }

   <button onClick={()=>f()}>...{ml?'more':'less'}</button>  
</div>
  )
}

export default Articles