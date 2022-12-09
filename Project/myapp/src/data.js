//importing icons
import {FaFacebookF,FaTwitter, FaYoutube, FaInstagram, FaLinkedin} from 'react-icons/fa';


//importing images
import AboutImg from '../src/assets/img/about.png';
import Img from '../src/assets/img/img2.png';
import logo from '../src/assets/img/logo.png';

export const navigationData = [
  {
    name: '+769 586 4558',
    href: '#',
  },
  {
    name: 'service@openauto.ca',
    href: '#',
  },
];


export const startData = {
    title: ` Vehicle Maintenance From The Comfort of Your Home`,
    subtitle:
      'Open Auto Soothers the hassle of maintaining your vehicle and helps you deal with unexpected repairs worry-free.',
    inputPlaceholderone: 'Enter Your Name',
    inputPlaceholdertwo: 'Enter Your Email',
    btnText: 'Submit',
     image: AboutImg,
  };
  
  export const aboutData = {
    image: Img,
    title: 'Focused on Time Saving',
    subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    btnText: 'Download the mobile app',
    };
  
    export const footerData = {
      image: logo,
      
    };

    export const copyrightData = {
      text: 'Open Auto @ all rights reserved',
      socialList: [
        
        {
          icon: <FaFacebookF />,
          href: '#',
        },
        {
          icon: <FaTwitter />,
          href: '#',
        },
        {
          icon: <FaYoutube />,
          href: '#',
        },
        {
          icon: <FaLinkedin />,
          href: '#',
        },
        {
          icon: <FaInstagram />,
          href: '#',
        },
      ],
    };