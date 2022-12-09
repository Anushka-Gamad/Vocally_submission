import React from 'react';

//importing hero data
import {heroData} from '../data';

//importing components
import Header from '../components/Header';

const Hero = () => {
  //destructoring hero data
  const {title,subtitle,btnText,image} = heroData;

  return (
  <section className='lg:h-[900px] py-12'>

    <Header/>

    <div className='container mx-auto  h-full relative'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-auto h-full relative'>
        {/*text*/}
         <div className='text-center xl:text-left xl:relative'>
              <h1 className='text-[60px] h1 xl:max-w-[1100px] mb-6 lg:mb-12' data-aos='fade-down' data-aos-delay='400'>{title}</h1>
              <p className='lead xl:max-w-[470px] mb-6 lg:mb-12' data-aos='fade-down' data-aos-delay='500'>{subtitle}</p>
               <div className="md:p-5 md:mx-5">
                    <form>
                        <div className='mb-4'>
                          <input className="bg-primary shadow appearance-none border rounded-full w-48 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline rounded-[50px]" id="username" type="text" placeholder="Enter Your Name" data-aos='fade-down' data-aos-delay='600'/>
                        </div>
                        <div className='mb-4'>
                        <input className="bg-primary shadow appearance-none border rounded-full w-48 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline rounded-[50px]" id="username" type="text" placeholder="Enter Your Email" data-aos='fade-down' data-aos-delay='700'/>
                        </div>
                        {/* <div className='mb-4'>
                          <button className='btn btn-primary mb-8 xl:mb-0' type="button">{btnText}</button>
                        </div> */}
                        <div className='mb-4'>
                        <button className="inline-block w-48 px-5 py-3 text-secondary font-semibold  rounded-[50px] shadow-md hover:bg-purple-700 hover:shadow-lg hover:text-white  mb-8 xl:mb-0 border border-slate-300 hover:border-indigo-300"
                                type="button" data-aos='fade-down' data-aos-delay='800'>{btnText}</button>
                        </div>
                      </form>
                </div>
          </div>
        {/*image*/}
        <div className=' xl:right-15 xl:bottom-5' data-aos='fade-down' data-aos-delay='400'>
          <img src={image} alt=""/>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Hero