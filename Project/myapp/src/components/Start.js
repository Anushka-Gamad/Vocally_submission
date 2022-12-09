import React from 'react';
import Axios from 'axios';
import { useState } from 'react';


//importing hero data
import {startData} from '../data';

//importing components
import Header from './Header';

const Start = (props) => {

  //creating state variable
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  //sending data to backend
  const register = () => {
    Axios.post('http://localhost:3001/register', 
    {
      username : name,
      useremail: email
    }).then((response) => {
      console.log(response)
    });
  };


  //destructoring hero data
  const {title,subtitle,btnText,image} = startData;

  return (
  <section className='lg:h-[900px] py-12'>

    <Header/>

    <div className='container mx-auto  h-full relative'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-auto h-full relative'>
        {/*text*/}
         <div className='text-center xl:text-left xl:relative my-20'>
              <h1 className='text-[57px] h1 xl:max-w-[1100px] mb-3 lg:mb-12' data-aos='fade-down' data-aos-delay='400'>{title}</h1>
              <p className='  xl:max-w-[470px] mb-3 lg:mb-12' data-aos='fade-down' data-aos-delay='500'>{subtitle}</p>
               <div className="md:p-5 md:mx-5">
                    <form className='my-0'>
                        <div className='mb-4'>
                          <input className="bg-primary shadow appearance-none border rounded-full w-60 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline rounded-[50px]" id="username" type="text" placeholder="Enter Your Name" data-aos='fade-down' data-aos-delay='600'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div className='mb-4'>
                        <input className="bg-primary shadow appearance-none border rounded-full w-60 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline rounded-[50px]" id="username" type="text" placeholder="Enter Your Email" data-aos='fade-down' data-aos-delay='700'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        </div>
                        <div className='mb-4'>
                        <button onClick={register} className="inline-block w-60 px-3 py-2 text-secondary font-semibold  rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg hover:text-white  mb-8 xl:mb-0 border border-slate-300 hover:border-indigo-300"
                                type="button" data-aos='fade-down' data-aos-delay='800'>{btnText}</button>
                        </div>
                      </form>
                </div>
          </div>
        {/*image*/}
        <div className='my-12 xl:right-15 xl:bottom-5' data-aos='fade-down' data-aos-delay='400'>
          <img src={image} alt=""/>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Start