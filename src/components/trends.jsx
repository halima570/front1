import React from 'react'
import './nav.css'
function Trends({title,link,urlToImage}) {
  return (
    <div className='lg:ml-[90px] md:ml-[100px] md:mr-[70px]  lg:w-[990px] md:w-[700px] sm:w-[600px] xs:w-[300px] tren'>
        <h1 className='lg:text-2xl font-bold text-black  md:text-2xl xs:text-sm titre'>{title}</h1>
<a href={link} target="_blank"><img src={urlToImage} className=' lg:h-[370px] lg:w-[990px] md:h-[270px] md:w-[630px] xs:w-[280px] xs:h-[200px] image'></img></a>

    </div>
  )
}

export default Trends