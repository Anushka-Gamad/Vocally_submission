import React from 'react';

//import about data
import {aboutData} from '../data';

const About = () => {
  //About data Content
  const {image, title, subtitle, btnText } = aboutData;

  return (
    <section className='my-[30px] xl:mt-[100px]' data-aos='fade-up' data-aos-offset='350'>
      <div className='container mx-auto'>
          <div className='px-12 pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left xl:gap-x-[60px] xl:pb-0'>
            {/* Image Section*/}
            <div className='mb-4 flex-1'>
              <img className='max-w-sm' src={image} alt="" />
            </div>
            {/* Text Section*/}
            <div className='mb-4 flex-1 xl:pr-12'>
              <h2 className='h2 mb-10'>
                {title}
              </h2>
              <p className='max-w-[475px] mx-auto'>
                {subtitle}
              </p>
              <button className=" my-5 inline-block mb-10 w-50 px-5 py-3 text-secondary bg-primary font-medium  rounded-[50px] shadow-md hover:bg-purple-700 hover:shadow-lg hover:text-white  mb-8 xl:mb-0 border border-slate-300 hover:border-indigo-300"
                                type="button" >{btnText}</button>
            </div>
          </div>
      </div>
    </section>
  )
}

export default About