import React from 'react'

//importing copyright data ans coial media icons
import {copyrightData} from '../data';


const Copyright = () => {

    const {text, socialList} = copyrightData;

  return (
    <section className='mt-2 pb-5'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center text-center md:text-left lg:flex-row justify-between gap-y-8'>
                {/*text*/}
                <div className='text-sm font-light italic max-w-[360px]'>{text}</div>
                {/*social list*/}
                <div className='mx-20'>

                        <ul className='flex gap-y-4 gap-x-4 justify-center'>
                        {socialList.map((item, index) => {
                        return (
                            <li className='w-12 h-12 bg-primary/10 flex justify-center items-center rounded-full cursor-pointer hover:bg-accent-secondary transition-all'
                            key={index}
                            >
                                <a className='text-white text-xl hover:text-white' href={item.href}>
                                    {item.icon}
                                </a>
                            </li>
                        );
                        })}
                    </ul>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Copyright