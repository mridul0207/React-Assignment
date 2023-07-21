import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {AiFillMobile} from 'react-icons/ai'
import {HiLocationMarker} from 'react-icons/hi'
import {AiFillCaretDown} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'
import axios from 'axios'
import SignupModal from './SignupModal'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location,setLocation] = useState(null);
  const [signupModal,setSignupModal] = useState(false);
  useEffect(()=>{
    getLocation();
  },[]);
  const getLocation = async ()=>{
    const mylocation = await axios.get("https://ipapi.co/json");
    setLocation(mylocation.data);
  }
  return (
    <>
    <div className='h-[80px] bg-slate-600 flex items-center text-white tracking-wide justify-between'>
    <div>
        <Link to={"/mobile"} className='flex gap-1 items-center'>
        <AiFillMobile/>
        <p>Get the App</p>
        </Link>
    </div>
    <div className='flex gap-10'>
        <Link to={"/investor-relations"} className='items-center'>Investor Relations</Link>
        <Link to={"/add-restaurant"} className='items-center'>Add Restaurant</Link>
        <button>Sign In</button>
        <button onClick={()=>setSignupModal(true)}>Sign Up</button>
    </div>
    </div>
    <div className='mt-10 text-black text-6xl font-bold italic flex justify-center'>
    Zomato
    </div>
    <div className='mt-4 text-black text-4xl font-bold flex justify-center'>
    Discover the best food & drinks in {
      location?.city && location.city
    }
    </div>
    <div className='mt-6 mx-auto flex items-center w-9/12 h-20 rounded-md bg-black gap-2 text-white'>
    <HiLocationMarker className='text-red-500 ml-3 text-3xl'/>
    <input type="text" placeholder='Enter your location' className='h-[50%] w-[30%] border-none bg-inherit focus:outline-none'/>
    <AiFillCaretDown className={`cursor-pointer transition duration-500 ${isOpen ? "transform rotate-180" : "transform rotate-0"}`} onClick={()=>setIsOpen(!isOpen)}/>
    <p className='border-r-2 w-1 h-[50%] text-white'></p>
    <AiOutlineSearch className='text-3xl ml-2'/>
    <input type="text" placeholder='Search for restaurant, cuisine or a dish' className='h-[50%] w-[50%] border-none bg-inherit focus:outline-none ml-2'/>
    </div>
    {
      signupModal && <SignupModal signupModal={signupModal} setSignupModal={setSignupModal}/>
    }
    </>
  )
}

export default Navbar