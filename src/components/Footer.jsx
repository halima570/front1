import React from 'react'
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <div className=' bg-sky-200 rounded'>
<div className='' >
  <ul className='flex justify-center mt-[100px] mb-[40px] flex-wrap'>
<li><a href='https://web.facebook.com/profile.php?id=100090991913636'><img src='facebook.png' className='w-[25px] cursor-pointer m-5'></img></a> </li>
<li><a href='https://www.instagram.com/news_pilot/'><img src='insta.png' className='w-[25px] cursor-pointer m-5'></img></a> </li>
<li><a href=''><img src='link.png' className='w-[25px] cursor-pointer m-5'></img></a> </li>
<li><a href=''><img src='twi.png' className='w-[25px] cursor-pointer m-5'></img></a> </li></ul>
</div>





    <div className='flex justify-between flex-wrap'>
<div className='lg:ml-[50px] lg:w-[400px] md:w-[400px]'>
    <img src='NEWSPILOT.png' className='w-[150px] ml-[170px] mb-3'></img>
    <p className='text-sm text-center m-3'>
   {t(`new`)}


    </p>
    <div className='lg:ml-[100px] m-3 md:ml-[140px] ml-[100px]'>
    <ul className='flex '><li>
<img className='w-[30px] mr-2' src='email.png'/></li>
<li>newspilot394@gmail.com</li></ul>
<ul className='flex m-2'><li>
<img className='w-[30px] ' src='phone.png'/></li>
<li>+212679869878</li></ul></div>
</div>

<div className='  lg:w-[400px] ml-7'>
    <ul className='text-center'>
      <li className='text-xl font-bold'>{t('ABOUT US')}</li>
       <li className='cursor-pointer hover:text-blue-700 '> {t('How it works?')}</li>
        <li className='cursor-pointer hover:text-blue-700 '>{t('Contact us')}</li>
        <li className='cursor-pointer hover:text-blue-700 '>{t('Who are we ?')}</li>
    </ul>
</div>

<div className=' lg:mr-[50px] md:mr-3 mr-5'>
<ul className='text-center'>
        <li className='text-xl font-bold'>{t('SERVICES')}</li>
        <li className='cursor-pointer hover:text-blue-700  m-3'>{t('FAQ')}</li>
        <li className='cursor-pointer hover:text-blue-700  m-3'>{t('QUIDE')}</li>
        <li className='cursor-pointer hover:text-blue-700  m-3'>{t('POLITICS')}</li>
    </ul>
</div>
</div>

    </div>
  )
}

export default Footer