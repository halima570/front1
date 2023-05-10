import React from 'react'
import ReactDOM from 'react-dom/client'
import i18n from './i18n'
import App from './App'
import './index.css'
import { AuthProvider } from './UserContext';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import { FQA,Login,Singin,Follow,Food ,Business,Science,Sports,Politic,History,Technology,Entertainment,
  Travel,Fashion,Chatboot,} from './components'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
<BrowserRouter>
<Routes>
<Route path="/Science" element={<Science/>} />
<Route path="/Sports" element={<Sports/>} />
<Route path="/Politic" element={<Politic/>} />
<Route path="/History" element={<History/>} />
<Route path="/Technology" element={<Technology/>} />
<Route path="/Entertainment" element={<Entertainment/>} />
<Route path="/Travel" element={<Travel/>} />
<Route path="/Fashion" element={<Fashion/>} />
<Route path="/Chatbot" element={<Chatboot/>} />

<Route path="/FQA" element={<FQA/>} />
<Route path="/" element={<App/>} />
<Route path="/Login" element={<Login/>} />
<Route path="/Signin" element={<Singin/>} />
<Route path="/Follow" element={<Follow/>} />
<Route path="/Food" element={<Food/>} />
<Route path="/Business" element={<Business/>} />

</Routes>
</BrowserRouter>
</AuthProvider>
  </React.StrictMode>,
)
