import React from 'react'
import { FaEnvelopeSquare} from "react-icons/fa";
import {FaPhoneAlt} from "react-icons/fa";


//importing footer data
import {navigationData } from '../data';
import Logo from '../assets/img/logo.png';

//importing components
import Copyright from './Copyright';

const Footer = () => {
  return (
    // <div>Footer</div>
    <header className='mb-12 lg:mb-0 z-20 relative px-4 lg:px-0' data-aos='fade-up'>
      <div className='container mx-auto'>
        <div className='flex items-center'>
              <div className='flex items-center gap-x-[350px]'>
                {/*Logo*/}
                <div className='mb-4'>
                <a href="#">
                  <img className='max-w-sm' src={Logo} alt="" />
                </a>
                </div>


                {/* nav initially hidden - only show on large screen */}
                <div className=' mx-45 my-10 '>
                <div className='hidden lg:flex'>
                <nav>
                    <ul className='flex gap-x-10 '>
                        <li>
                        <a href='#'><FaPhoneAlt className='text-1xl inline'/>+769 586 4558</a>
                        </li>
                        <li>
                        <a href='#'><FaEnvelopeSquare className='text-1xl inline'/>service@openauto.ca</a>
                        </li>
                    </ul>
                </nav>
                </div>
                </div>
            </div>
            </div>
            </div>
            <Copyright/>
            </header>
  );
};

export default Footer