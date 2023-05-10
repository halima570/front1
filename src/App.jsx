import { useState ,useEffect,useRef} from 'react';
import Typewriter from 'typewriter-effect';
import './App.css'
import '@fortawesome/fontawesome-free/css/all.css';
import { useTranslation } from 'react-i18next';
import { Nav ,Trends,Footer} from './components';
import axios from 'axios'
import ShowMoreLess from 'show-more-less'
import { Link } from "react-router-dom";
function App() {
 
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hien');
    hiddenElements.forEach((el) => observer.current.observe(el));

    // Clean up observer on unmount
    return () => {
      observer.current.disconnect();
    };
  }, []);


const [expanded, setExpanded] = useState(false)

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videos = [
    { src: "video1.mp4"  },
    { src: "video2.mp4" },
    { src: "video3.mp4" },
  ];
  const handleButtonClick = (index) => {
    setCurrentVideoIndex(index);
  };
  const [trends,setTrends]=useState([])
  let date = new Date()
  date.setDate(date.getDate() -1);
  date=date.toISOString().slice(0, 10);
  useEffect(()=>{
const getTrends=async ()=>
{const response=await axios
.get(`https://newsapi.org/v2/everything?q=trends&from=${date}&sortBy=popularity&apiKey=3a96579ce73a415cbda2085360a73a79`)
      console.log(response)
    setTrends(response.data.articles)
    }
    
    getTrends()
    
    },[])
  const { t, i18n } = useTranslation();
return (
    <div className="App">
{/*       nav */}
<Nav/>
<section className='trends mt-[88px]'>

<h1 className='trend'>
<Typewriter
  options={{
    strings: [t('trends'),t('news'),t('world')],
    autoStart: true,
    loop: true,
  }}
/>
</h1>
</section>
<section className='newsapi'>

<div className="flex overflow-x-scroll snap-x snap-proximity [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">

{trends.map((item)=>{
return (
  <div className=" w-screen snap-start 	" >
<Trends 
title={item.title}
link={item.url}
urlToImage={item.urlToImage}

/></div>
)})}
</div>

</section>
<h1 className='text-2xl font-bold text-center'>{t('why newspilot')}</h1>
<section className='w-[90%] mt-[100px] m-2 ml-[30px] flex    avantage '>
  <div className='lg:w-[80%] md:w-[100%] hien'>
<video src={videos[currentVideoIndex].src} controls autoPlay loop className='lg:w-[80%] sm  rounded-xl xs:w-[100%]' />
  {videos.map((video, index) => (
    <button key={index} onClick={() => handleButtonClick(index)}>
     <div className='ml-[60px] mt-[10px] xs:ml-[100px]'>
    <span className='hover:text-slate-400 '> <i class="fa-sharp fa-solid fa-circle"></i></span></div> 
    </button>
  ))}</div>
  <div className='lg:w-[60%] md:w-[90%]'>

<div className='lg:text-lg md:text-sm xs:text-sx p-2 bg-slate-400 rounded-xl hien'>
<ShowMoreLess
  text={t('welcome')}
  threshold={400}
  expanded={expanded}
  onExpand={setExpanded}
  className={{
    container: 'bg-gray-100 p-4',
    moreButton: 'text-blue-500 hover:text-blue-700',
    lessButton: 'text-blue-500 hover:text-blue-700'
  }}
/>
    </div>

  </div>
</section>
{/* categories */}
<section className=' bg-blue-700 h-fit mt-10 mb-10 pb-6 text-xs'>
<div className='flex flex-wrap'>
<div className='lg:w-[238px] hien'>
  <h1 className='text-2xl font-bold text-sky-300 m-4'>{t('categories')}</h1>
  <p className='text-xl text-white mt-4 m-2'>{t('newspilot give you ten differents categorie that you will like to read')}</p>
</div>

<div className='flex flex-wrap lg:ml-[10px] mt-[40px] lg:w-[900px]'><Link to='/Politic'>
<div className='bg-sky-200  rounded-xl lg:w-[160px] md:w-[140px]  m-1 p-1 hien'>
<div className='flex justify-between'>
<img src='politics.png' className='w-[30px] mr-2 zoom'/>
<h1 className='font-bold text-black p-1'>{t('POLITIC')}</h1>
</div><p>{t("refers to the activities and decisions associated with governing a country, organization, or community")}</p>
</div></Link>
<Link to='/Business'>
<div className='bg-sky-200 rounded-xl lg:w-[160px] md:w-[140px] m-1 p-1 hien'>
<div className='flex justify-between'>
<img src='financialpng.png' className='w-[30px] mr-2'/>
<h1 className='font-bold text-black p-1'>{t("Business and finance")}</h1>
</div><p> {t("the activities involved in the production, buying,selling, or trading of goods or services in exchange for money")}</p>
</div>
</Link>
<Link to='/Technology'>
<div className='bg-sky-200 rounded-xl lg:w-[160px] md:w-[140px] m-1 p-1 hien'>
<div className='flex justify-between'>
<img src='tech.png' className='w-[30px] mr-2'/>
<h1 className='font-bold text-black'>{t("Technology")}</h1>
</div><p> {t("the collection of techniques,methods,and processes used in the creation and other products to improve our life")}</p>
</div>
</Link>
<Link to='Entertainment'>
<div className='bg-sky-200 rounded-xl lg:w-[160px] md:w-[140px] m-1 p-1 hien'>
<div className='flex justify-between'>
<img src='entre.png' className='w-[30px] mr-2'/>
<h1 className='font-bold text-black p-1'>{t("Entertainment")}</h1>
</div><p>
{t("activities or events that are designed to provide enjoyment, amusement, or pleasure to an audience")}
</p>
</div></Link>
<Link to='/Sports'>
<div className='bg-sky-200 rounded-xl lg:w-[160px] md:w-[140px] m-1 p-1 hien'>
<div className='flex justify-between'>
<img src='sport.png' className='w-[30px] mr-2'/>
<h1 className='font-bold text-black p-1'>{t("Sports")}</h1>
</div><p>
{t("physical activities that involve skill, strategy, and competition, often played individually or in teams")}
</p>
</div></Link>

<Link to='/Food'>
<div className='bg-sky-200 rounded-xl lg:w-[160px] md:w-[140px] m-1 p-1 hien'>
<div className='flex justify-between'>
<img src='meal.webp' className='w-[30px] mr-2'/>
<h1 className='font-bold text-black p-1'>{t("Food and dining")}</h1>
</div><p>
{t("provides nutrition, and the act of eating and drinking in a social setting, such as a restaurant or home")}
</p>
</div></Link>
<Link to='/Fashion'>
<div className='bg-sky-200 rounded-xl lg:w-[160px] md:w-[140px] m-1 p-1 hien'>
<div className='flex justify-between'>
<img src='Fashion.png' className='w-[30px] mr-2'/>
<h1 className='font-bold text-black p-1'>{t("Fashion and beauty")}</h1>
</div><p>
{t("the styles, trends, and clothing designs that are popular at a particular time and place.It includes clothing, accessories..")}
</p>
</div></Link>
<Link to='/History'>
<div className='bg-sky-200 rounded-xl lg:w-[160px] md:w-[140px] m-1 p-1 hien'>
<div className='flex justify-between'>
<img src='history-icon.png' className='w-[30px] mr-2'/>
<h1 className='font-bold text-black p-1'>{t("History and culture")}</h1>
</div><p>{t("the study of past events,and the interpretation of those events to understand the present")}</p>
</div></Link>
<Link to='/Science'>
 <div className='bg-sky-200 rounded-lg lg:w-[160px] md:w-[140px] p-1 m-1 hien'>
 <div className='flex justify-between'>
<img src='Science.png' className='w-[30px] mr-2'/>
<h1 className='font-bold text-black p-1'>{t("Science and environment")}</h1>
</div><p>
{t("the systematic study of the natural world through observation, experimentation, and analysis")}
</p>
</div></Link>
<Link to='/Travel'>
<div className='bg-sky-200 rounded-lg lg:w-[160px] md:w-[140px] p-1 m-1 hien'>
<div className='flex justify-between'>
<img src='travel.png' className='w-[30px] mr-2'/>
<h1 className='font-bold text-black p-1'>{t("Travel and tourism")}</h1>
</div><p>{t("moving from one place to another,or experiencing different locations and environments")}</p>
</div> </Link>
</div>
</div>
</section>


<div className='mt-[200px] text-center '>

<h1 className='font-bold text-4xl text-center text-blue-400'>
<Typewriter
  options={{
    strings: [t('POLITICS'), t('Business and finance'),
    t('Technology'),t('Entertainment'),
    t('Sports'),t('Food and dining'),t('Fashion and beauty'),
    t('History and culture'),t('Science and environment'),t('Travel and tourism')],
    autoStart: true,
    loop: true,
  }}
/>
</h1>
</div>

<div className='flex flex-wrap m-5 ml-[50px] '>
      <Link to="/Politic">
<div className='cursor-pointer rounded-xl m-3 hover:bg-blue-200 hover:border-2 hien '>
  <div className='overflow-hidden'>
    <img className='w-[320px] h-[280px] rounded    hover:scale-125 inset-0 transition duration-500' src='politics.jpg'/></div>
    <div className='p-2'>
<h3 className='text=xl  font-bold'>{t("POLITICS")}</h3>
<p>
  <span className='font-bold'>{t('websites')}:</span>  Politico,CNN Politics, The Hill ...
</p></div>
</div></Link>

<Link to="/Business">
<div  className='cursor-pointer rounded-xl  m-3 hover:bg-blue-200 hover:border-2 hien'>
<div className='overflow-hidden'>
<img className='w-[320px] h-[280px] rounded   hover:scale-125 inset-0 transition duration-500 ' src='make-money.jpg'/>
</div><h3 className='text=xl  font-bold p-2'>{t('Business and finance')}</h3>
<p>
  <span className='font-bold p-2'>{t('websites')}:</span>Bloomberg, Forbes, CNBC ...
</p>
</div></Link>
<Link to="/Technology">
<div className='cursor-pointer rounded-xl m-3 hover:bg-blue-200 hover:border-2 hien'>  <div className='overflow-hidden'>  <img className='w-[320px] h-[280px] rounded   hover:scale-125 inset-0 transition duration-500 ' src='connected-technology.jpg'/></div>
<h3 className='text=xl  font-bold p-2'>{t('Technology')}</h3>
<p>
  <span className='font-bold p-2'>{t('websites')}:</span>TechCrunch, Wired ...
</p></div></Link>
<Link to="/Entertainment">
<div  className='cursor-pointer rounded-xl m-3 hover:bg-blue-200 hover:border-2 hien'>
<div className='overflow-hidden'><img className='w-[320px] h-[280px] rounded   hover:scale-125 inset-0 transition duration-500 ' src='post-Entertainment.jpg'/>
</div><h3 className='text=xl  font-bold p-2'>{t('Entertainment')}</h3>
<p>
  <span className='font-bold p-2'>{t('websites')}:</span>Variety, Entertainment Weekly...
</p>
</div></Link>
<Link to="/Sports">
<div  className='cursor-pointer rounded-xl m-3 hover:bg-blue-200 hover:border-2 hien'>
<div className='overflow-hidden'><img className='w-[320px] h-[280px] rounded   hover:scale-125 inset-0 transition duration-500 ' src='Sports-Pictures.jpg'/>
</div><h3 className='text=xl  font-bold p-2'>{t('Sports')}</h3>
<p>
  <span className='font-bold p-2'>{t('websites')}:</span> ESPN, Bleacher Report...
</p>
</div></Link>
<Link to="/Food">
<div  className='cursor-pointer rounded-xl m-3 hover:bg-blue-200 hover:border-2 hien'><div className='overflow-hidden'>
<img className='w-[320px] h-[280px] rounded   hover:scale-125 inset-0 transition duration-500 ' src='food.jpg'/></div>
<h3 className='text=xl  font-bold p-2'>{t('Food and dining')}</h3>
<p>
  <span className='font-bold p-2'>{t('websites')}:</span>Food & Wine, Bon Appétit...
</p>
</div></Link>
<Link to="/Fashion">
<div  className='cursor-pointer rounded-xl m-3 hover:bg-blue-200 hien'><div className='overflow-hidden'>
<img className='w-[320px] h-[280px] rounded   hover:scale-125 inset-0 transition duration-500 ' src='Beauty.jpg'/></div>
<h3 className='text=xl  font-bold p-2'>{t('Fashion and beauty')}</h3>
<p>
  <span className='font-bold p-2'>{t('websites')}:</span>Vogue, Harper's Bazaar, Allure ...
</p>
</div>
</Link>
<Link to="/History">
<div  className='cursor-pointer rounded-xl m-3 hover:bg-blue-200 hover:border-2 lg:w-[320px] hien'><div className='overflow-hidden'>
  <img className='w-[320px] h-[280px] rounded   hover:scale-125 inset-0 transition duration-500 ' src='hist.avif'/></div>
<h3 className='text=xl  font-bold p-2'>{t('History and culture')}</h3>
<p>
  <span className='font-bold p-2'>{t('websites')}:</span>Smithsonian Magazine, History Today...
</p></div></Link>
<Link to="/Science">
<div  className='cursor-pointer rounded-xl m-3 hover:bg-blue-200 hover:border-2 lg:w-[320px] hien'><div className='overflow-hidden'>
<img className='w-[320px] h-[280px] rounded   hover:scale-125 inset-0 transition duration-500 ' src='Environmental-Science.png'/></div>
<h3 className='text=xl  font-bold p-2'>{t('Science and environmen')}</h3>
<p>
  <span className='font-bold p-2'>{t('websites')}:</span>Scientific American, National Geographic...
</p>
</div></Link>
<Link to="/Travel">
<div  className='cursor-pointer rounded-xl m-3 hover:bg-blue-200 hien'><div className='overflow-hidden'>
<img className='w-[320px] h-[280px] rounded   hover:scale-125 inset-0 transition duration-500 ' src='trav.webp'/></div>
<h3 className='text=xl  font-bold p-2'>{t('Travel and tourism')}</h3>
<p>
  <span className='font-bold p-2'>{t('websites')}:</span>Lonely Planet, Conde Nast Traveler...
</p>
</div></Link></div>
<Footer/>

    </div>
  )
}

export default App
