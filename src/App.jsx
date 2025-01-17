import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './views/home/Home'
import About from './views/about/About'
import Blogs from './views/Blogs'

import Contact from './views/contact/contact'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import SignIn from './views/auth/SignIn'
import SignUp from './views/auth/SignUp'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux'
import { authenticateUser } from './store/user/userController'
import './global.css'
import Profile from './views/auth/Profile'


function App() {
  const dispatch = useDispatch()
  const user =  useSelector((state)=> state.user)
  useEffect(()=>{
       dispatch(authenticateUser())
  },[])

  console.log('user data' , user);
  

  return (
  
    <Router>
     
        <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      
       <Routes>
        
        <Route path='/' element={<Layout/>}>  
           <Route index element={<Home/>}/>
           <Route path='/about' element={<About/>} />
           <Route path='/blogs' element={<Blogs/>} />
        
        

           <Route path='/contact' element={<Contact/>} />
           <Route path='/profile' element={<Profile/>} />
        </Route>

      <Route path='/sign-up' element={<SignUp/>} />
      <Route path='/sign-in' element={<SignIn/>} />

       </Routes>

     </Router>
   
  )
}

export default App

export const baseUrl = `http://localhost:8000/api/v1`