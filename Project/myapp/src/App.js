import React from 'react';
import './index.css';

//importing animate on scroll
import Aos from "aos";
import 'aos/dist/aos.css';

//importing components
import Start from './components/Start';
import About from './components/About';
import Footer from './components/Footer';


const App = () => {
  //aos initialization
  Aos.init({
    duration: 1800,
    offset:0,
  });

  return <div className='overflow-hidden'>
    <Start/>
    <About/>
    <Footer />
  </div>
}

export default App;
