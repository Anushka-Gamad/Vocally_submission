import React from 'react';
import { FaEnvelopeSquare} from "react-icons/fa";
import {FaPhoneAlt} from "react-icons/fa";


//importing navigation data
import {navigationData} from '../data';

const Nav = () => {
  return (
    <nav>
      <ul className='flex gap-x-8'>
        <li>
          <a href='#'><FaPhoneAlt className='text-1xl inline'/>+769 586 4558</a>
        </li>
        <li>
          <a href='#'><FaEnvelopeSquare className='text-1xl inline'/>service@openauto.ca</a>
        </li>
        {/* // {navigationData.map((items, index) => {
        //   return (
        //     <li key={index}>
        //       <a href={items.href}>{items.name}</a>
        //     </li>
        //   )
        // })} */}
      </ul>
    </nav>
  );
};

export default Nav;
