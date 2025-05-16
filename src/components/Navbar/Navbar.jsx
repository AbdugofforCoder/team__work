import React from 'react'
// icons
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
            <div style={{'borderBottom': '1px solid #E5E5E5'}} className="navbar mt-10 pb-10">
                <div className="container w-7xl mx-auto flex items-center justify-between">
                        <div className="navbar__left">
                            <h1 className='text-2xl font-medium'>Exclusive</h1>
                        </div>
                        <div className="navbar__left flex gap-10 font-medium">  
                            <a href="">Home</a>
                            <a href="">Contact</a>
                            <a href="">About</a>
                            <a href="">Sign Up</a>
                        </div>
                        <div className="navbar__corner flex gap-15">
                            <div className="inputs flex items-center gap-5 bg-[#F5F5F5] pl-3 pr-3 rounded-sm py-3">
                                <input className=' border-none rounded-2xl placeholder-gray-400 text-black text-[14px] focus:outline-none'  type="text" placeholder='What are you looking for?'/>
                                <IoSearch className='text-xl' />
                            </div>
                            <div className="likes flex gap-5 items-center">
                                <FaRegHeart className='text-xl' />
                                <IoCartOutline className='text-2xl' />
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Navbar