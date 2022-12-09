import React from 'react'

//import components
import Logo from '../assets/img/logo.png';
import Nav from './Nav';
// import NavMobile from './NavMobile';

//import icons
import {FaBars} from 'react-icons/fa';
import {BsArrowRight} from 'react-icons/bs';


export const Header = () => {
  return (
    <header className='mb-5 lg:mb-0 z-20 relative px-4 lg:px-0' data-aos='fade-out'>
        <div className='flex items-center '>
              <div className='flex items-center gap-x-[210px]'>
                {/*Logo*/}
                <div className='mb-4'>
                <a href="#">
                  <img className=' max-w-sm scale-75 mx-14' src={Logo} alt="" />
                </a>
                </div>


                {/* nav initially hidden - only show on large screen */}
                <div className='mb-4 mx-15 my-1'>
                <div className='hidden lg:flex'>
                  <Nav/>
                </div>
                </div>
            </div>

            {/*button*/}
            <button className='inline block rounded-full bg-primary text-secondary px-6 py-2 flex items-center gap-x-[20px] hover:bg-purple-700 hover:text-white group mx-10 border border-slate-300 hover:border-indigo-300'>
              Download The Mobile App
            </button>
        </div>
      
    </header>
  )
};

export default Header;
