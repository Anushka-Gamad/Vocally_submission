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
    <header className='mb-12 lg:mb-0 z-20 relative px-4 lg:px-0' data-aos='fade-out'>
      <div className='container mx-auto'>
        <div className='flex items-center '>
              <div className='flex items-center gap-x-[120px]'>
                {/*Logo*/}
                <div className='mb-4'>
                <a href="#">
                  <img className='max-w-sm' src={Logo} alt="" />
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
            <button className='btn btn-quaternary bg-primary text-secondary flex items-center gap-x-[20px] group mx-10 border border-slate-300 hover:border-indigo-300'>
              Download The Mobile App
            </button>
        </div>
      </div>
    </header>
  )
};

export default Header;
