import React from 'react';

//importing hero data
import {heroData} from '../data';

const Hero = () => {
  //destructoring hero data
  const {title,subtitle,btnText,image} = heroData;

  return (
  <section className='lg:h-[900px] py-12'>
    <div className='container mx-auto  h-full relative'>
      <div>
        {/*text*/}
        <div>
              <h1 className='h1 xl:max-w-[800px] mb-6 lg:mb-12'>{title}</h1>
              <p className='lead xl:max-w-[470px] mb-6 lg:mb-12'>{subtitle}</p>
               <div className="md:p-5 md:mx-5">
                    <form>
                        <div className='mb-4'>
                          <input className="color-primary shadow appearance-none border rounded w-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Your Name"/>
                        </div>
                        <div className='mb-4'>
                          <input className="form-control block w-48 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                  id="Input1"
                                  placeholder="Enter Your Email"
                                  />
                        </div>
                        {/* <div className='mb-4'>
                          <button className='btn btn-primary mb-8 xl:mb-0' type="button">{btnText}</button>
                        </div> */}
                        <div className='mb-4'>
                        <button className="inline-block w-48 px-5 py-3 text-white font-medium  rounded shadow-md hover:bg-purple-700 hover:shadow-lg  mb-8 xl:mb-0 "
                                type="button">{btnText}</button>
                        </div>
                      </form>
                </div>
        </div>
        {/*image*/}
        <div className='xl:absolute xl xl:left-10 xl:right-8 xl:bottom-5'>
          <img src={image} alt=""/>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Hero