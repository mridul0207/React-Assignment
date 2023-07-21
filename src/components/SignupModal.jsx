import React, { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import {apiConnector} from '../services/apiConnector'
import { setSignupData } from '../slices/authSlice';
const SignupModal = ({signupModal,setSignupModal}) => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const dispatch = useDispatch();
  const handleNameChange = (event)=>{
    setName(event.target.value)
    console.log(name)
  };
  const handleEmailChange = (event)=>{
    setEmail(event.target.value)
    console.log(email);
  }
  const [isChecked,setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleSubmit =async (e)=>{
    e.preventDefault();
    const signupData = {name:name,email:email};
    const response = await apiConnector("POST","http://localhost:4001/api/v1/createentry",{name,email})
    // if(response.data.data)
    // {
    //   console.log("Entry successfully created");
    //   dispatch(setSignupData(signupData));
    //   setSignupModal(false);
    // }
  }
  return (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
          <div className="bg-white p-8 rounded shadow relative z-10">
            <div className='flex items-center justify-between'>
            <h3 className="text-lg font-bold">Confirmation</h3>
            <AiOutlineClose className='cursor-pointer' onClick={()=>setSignupModal(false)}/>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2 font-bold" htmlFor="name"></label>
              <input
                className="border border-gray-400 rounded px-2 py-1 w-full"
                type="text"
                id="name" placeholder='Name' value={name} onChange={handleNameChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold" htmlFor="email"></label>
              <input
                className="border border-gray-400 rounded px-2 py-1 w-full"
                type="email"
                id="email" placeholder='E-Mail' value={email} onChange={handleEmailChange}
              />
            </div>
            <div className='mb-4'>
              <input type="checkbox" onChange={handleCheckboxChange} className=''/>{"  "}I agree to Zomato's Terms of Service, Privacy Policy and Content Policies
            </div>
            <div className="flex justify-end">
              <button type="submit"
                className={`${!name || !email || !isChecked ? "bg-slate-600" : "bg-red-500 hover:bg-red-700"} text-white font-bold py-2 px-4 rounded mr-2`}
                disabled={!name || !email || !isChecked}>
                Create Account
              </button>
            </div>
            </form>
          </div>
        </div>
  )
}
export default SignupModal