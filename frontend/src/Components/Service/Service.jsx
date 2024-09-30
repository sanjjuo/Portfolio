import React from 'react';
import { services } from '../../data';
import { motion } from "framer-motion"

const Service = () => {
    return (
        <>
            <section className='px-4 py-10 lg:py-[50px] dark:bg-black dark:text-white' id='services'>
                <div className="container">
                    <h1 className='text-gray-600 text-xl lg:text-2xl font-normal text-center mb-2'>My services</h1>
                    <h2 className='text-2xl lg:text-4xl font-bold text-center mb-5'>Services I Provides</h2>
                    <ul className='flex items-center justify-center gap-1'>
                        <li className='h-[3px] bg-gray-800 w-20 rounded-full'></li>
                        <li className='h-[3px] bg-gray-800 w-5 rounded-full'></li>
                        <li className='h-[3px] bg-gray-800 w-2 rounded-full'></li>
                    </ul>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-20">
                        {services.map((item, index) => (
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className='flex flex-col justify-center items-center cursor-pointer group' key={index}>
                                <div className='w-[70px] h-[70px]'>
                                    <img src={item.image} alt="" className='w-full h-full transition-all duration-700 ease-in-out
                                     translate-y-0 group-hover:-translate-y-5 dark:filter dark:invert dark:brightness-100'/>
                                </div>
                                <h3 className='text-lg mt-3 text-gray-900 font-light dark:text-white'>{item.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service
