import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Register from './pages/Register'
import Home_new from './pages/Home_new'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Profile" element={<Profile/>}></Route>
        <Route path="/Register" element={<Register/>}></Route>
         <Route path="/Home_new" element={<Home_new/>}></Route> 

      </Routes>
    </>
  )
}

export default App
