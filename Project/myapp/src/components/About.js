import React from 'react';

//import about data
import {aboutData} from '../data';

const About = () => {
  //About data Content
  const {image, title, subtitle } = aboutData;

  return (
    <div className='container mx-auto'>
      <div>
        {/* Image Section*/}
        <div>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default About