
import './nav.css'
import { useState,useEffect } from 'react';
import { AuthContext } from '../UserContext';
import { useContext } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
function Nav() {
  const { user,logout } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();
    function handleLanguageChange(event) {
      i18n.changeLanguage(event.target.value);
    } 
  const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        if (window.pageYOffset > 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <div className='nav '>


<header className={scrolled? '':'head2'}>
<img src='NEWSPILOT.png' className='img'></img>
<nav className={`navbar ${menuOpen ? 'active' : ''}`} >
<Link to='/'><a href='#home'>{t('HOME')}</a></Link>
<Link to='/Chatbot'><a href='#chatbot'>{t('CHATBOT')}</a></Link>
<Link to='/FQA'><a href='#FQA'>{t('FQA')}</a></Link>
<Link to='/Login'><a href='#login'>{t('LOG IN')}</a></Link>
<Link to='/Signin'><a href='#signin'>{t('SIGN IN')} </a></Link>
<a>{user?<>{user.data.firstName}</>:""}</a>
<a>{user? <><Link to='/Follow'>{t("follow")}</Link></>:''}</a>
<a>{user?<> <button onClick={logout}>{t("Logout")}</button></> :"" }
</a>

</nav>

<select className='language' onChange={handleLanguageChange} value={i18n.language} >
        <option  value="en">English</option>
        <option value="fr">Français</option>
        <option value="ar">arabe</option>
      </select>
      <i id='btn' onClick={() => setMenuOpen(!menuOpen)} class="fa-solid fa-bars" ></i>

      
</header>


    </div>
  )
}

export default Nav