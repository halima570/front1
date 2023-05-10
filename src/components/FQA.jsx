import React ,{useState}from 'react'
import Nav from './Nav'
import Footer from './Footer'
import './FQA.css'
import { useTranslation } from 'react-i18next';
function FQA() {
    const { t, i18n } = useTranslation();
    const [read1, setRead1] = useState(false);
    const [read2, setRead2] = useState(false);
    const [read3, setRead3] = useState(false);
    const [read4, setRead4] = useState(false);
    const [read5, setRead5] = useState(false);
    const [read6, setRead6] = useState(false);
    const [read7, setRead7] = useState(false);
    const [read8, setRead8] = useState(false);
    const toggleRead1 = () => {
        setRead1(!read1);
    };
    const toggleRead8 = () => {
        setRead8(!read8);
    };
    const toggleRead2 = () => {
        setRead2(!read2);
    };

    const toggleRead3 = () => {
        setRead3(!read3);
    };

    const toggleRead4 = () => {
        setRead4(!read4);
    };

    const toggleRead5 = () => {
        setRead5(!read5);
    };

    const toggleRead6 = () => {
        setRead6(!read6);
    };

    const toggleRead7 = () => {
        setRead7(!read7);
    };


  return (
    <div>
<Nav/>
<div>

<h1 className='font-bold text-3xl text-center text-blue-900 mt-[100px] m-3'>{t("Frequently Asked Questions")}</h1>

<div className='flex flex-wrap justify-around'>
<div className='rounded-xl bg-blue-200 lg:w-[500px] mt-3 h-fit'>
<button onClick={()=>toggleRead1()}><h1 className='font-bold text-black p-1'>{t("What kind of news articles can I expect to see recommended on this website?")}</h1>
  {read1? <p className='mb-3 p-1'>
  {t("NewsPilot pulls news articles from a variety of sources, including major news outlets and independent media.You can expect to see a diverse range of topics, including politics, technology, sports,entertainment, and more")}.</p> : ''}</button>
</div>
{/*================================*/}

<div className='rounded-xl bg-blue-200 lg:w-[500px] mt-3 h-fit'>
<button onClick={()=>toggleRead2()}><h1 className='font-bold text-black p-1'> 
{t("How does your NewsPilot determine which articles to recommend?")}</h1>
{read2? <p className='mb-3 p-1'>
{t("Our recommendation algorithm uses a combination of factors,article popularity, and relevance to your interests, to determine which articles to recommend to you.")}</p> : ''}</button>
</div>

{/*================================*/}

<div className='rounded-xl bg-blue-200 lg:w-[500px] mt-3 h-fit'>
<button onClick={()=>toggleRead3()}>
<h1 className='font-bold text-black p-1'>
    {t("Is there a cost to using the services of this website NewsPilot or not?")} </h1>
  {read3? <p className='mb-3 p-1'>
{t("No, NewsPilot recommendation service is completely free to use just have fun with your reading.")}</p> : ''}</button>
</div>
{/*================================*/}

<div className='rounded-xl bg-blue-200 lg:w-[500px] mt-3 h-fit'>
<button onClick={()=>toggleRead4()}><h1 className='font-bold text-black p-1'>
    {t("How often are new articles added to the recommendation pool in NewsPilot?")}</h1>
  {read4? <p className='mb-3 p-1'>
{t("We add new articles to our recommendation pool on a daily basis, so there's always fresh content for you to discover.")}</p> : ''}</button>
</div>
{/*================================*/}

<div className='rounded-xl bg-blue-200 lg:w-[500px] mt-3 h-fit'>
<button onClick={()=>toggleRead5()}><h1 className='font-bold text-black p-1'>
{t("Can I customize the types of articles that are recommended to me?")}</h1>
  {read5? <p className='mb-3 p-1'>
{t("Yes, you can customize your preferences by selecting specific topics or keywords that interest you.You can also rate articles to help our algorithm better understand your preferences.")}</p> : ''}</button>
</div>
{/*================================*/}

<div className='rounded-xl bg-blue-200 lg:w-[500px] mt-3 h-fit'>
<button onClick={()=>toggleRead6()}><h1 className='font-bold text-black p-1'>
{t("What kind of sources do you pull and get this news articles from?")}</h1>
  {read6? <p className='mb-3 p-1'>
{t("Our recommendation algorithm pulls articles from a wide range of sources,including traditional news outlets, independent media, and blogs.")}</p> : ''}</button>
</div>
{/*================================*/}

<div className='rounded-xl bg-blue-200 lg:w-[500px] mt-3 h-fit'>
<button onClick={()=>toggleRead7()}><h1 className='font-bold text-black p-1'>{t("How do I access the recommended articles?")}</h1>
  {read7? <p className='mb-3 p-1'>
{t("Once you've signed up for our service, you can access your recommended articles by logging in to your account on our website.")}</p> : ''}</button>
</div>
{/*================================*/}

<div className='rounded-xl bg-blue-200 lg:w-[500px] mt-3 h-fit'>
<button onClick={()=>toggleRead8()}><h1 className='font-bold text-black p-1'>{t("Do you have any social media presence that I can follow?")}</h1>
  {read8? <p className='mb-3 p-1'>
{t("Yes, you can follow us on Facebook,Twitter, and Instagram for updates on new articles and other news-related content.")}</p> : ''}</button>
</div>
{/*================================*/}





</div>

<div className='flex flex-wrap mt-20 justify-around'>

<div className='lg:w-[500px] bg-blue-200 rounded-xl relative md:w-[300px] w-[350px] h-[400px]'>
<p className='text-center p-2 text-xl'><span className='font-bold'>NewsPilot</span> 
{t("have an exellent Option that is you can write any question and send it to me ,you will recieve your answer in your email.")}  </p>
  <div className='lg:ml-w-[700px] '>
<img className=' lg:w-[360px] absolute animate-move-right md:w-[240px] mt-4 w-[250px]' src='Delivery.png'></img></div>

</div>
<div className='lg:w-[400px] w-[350px]'>
<h1 className='font-bold text-3xl text-center text-blue-900 m-3'>{t("Send to me")}</h1>
   <form action='https://formspree.io/f/mknavdro'  method="POST"  className=''>
<input className=' p-2 m-3 rounded border-2 border-gray-400 lg:pl-[100px] pr-[100px]' id="fullname" name="name" type="text" placeholder={t('Enter your Name...')}/>
<input className='p-2 m-3 rounded border-2 border-gray-400 lg:pl-[100px] pr-[100px] '  id="email" name="email" type="email" placeholder={t("Enter your Email...")}/>
      
        <textarea className=' m-3 rounded border-2 border-gray-400 lg:pl-[100px] pr-[100px]' id='message' name="message"  cols="23" rows="7" placeholder={t("Enter a Message")}></textarea>
        <button  className='text-xl font-bold text-white bg-blue-400 m-3 rounded p-2 pl-[130px] pr-[120px]'>{t("send")}</button>
  </form>
</div>

{/* onClick={sendMail()} */}

    </div>


</div>

<Footer/>
    </div>
  )
}

export default FQA