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
    <div className=''>
     <hr class="my-4 border-gray-700 sm:mx-auto dark:border-gray-700 lg:my-8" /> 
    <footer className='my-5 mb-12 lg:mb-0 z-20 relative px-4 lg:px-0' data-aos='fade-up'>
      
        <div className='flex items-center'>
              <div className='flex items-center gap-x-[350px]'>
                {/*Logo*/}
                <div>
                  <a href="#">
                    <img className='mx-14 max-w-sm scale-75 ' src={Logo} alt="" />
                  </a>
                </div>

                <div className=' mx-50 my-10 '>
                <div className='mx-10 hidden lg:flex'>
                <nav>
                    <ul className='flex gap-x-6 '>
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
            
            <Copyright/>
            </footer>
            </div>
  );
};

export default Footer