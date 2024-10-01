import { Button } from '@material-tailwind/react'
import React from 'react'
import { motion } from "framer-motion";

const Freelance = () => {
    return (
        <>
            <section className='px-4 py-10 relative lg:py-[50px] h-[600px] w-full flex justify-center items-center dark:bg-black'>
                <div className='absolute inset-0 bg-[url("map.png")] bg-center bg-cover bg-no-repeat opacity-5'></div>
                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                        className='bg-gray-200 p-5 lg:p-16 rounded-2xl flex lg:flex-row flex-col justify-between items-center gap-10 lg:gap-0 dark:bg-gray-900 '>
                        <div className=''>
                            <h1 className='text-gray-800 text-xl lg:text-4xl font-bold mb-3 dark:text-white'>Have any Project in Mind ?</h1>
                            <ul className='flex items-center gap-1'>
                                <li className='h-1 bg-gray-800 w-20 rounded-full dark:bg-white'></li>
                                <li className='h-1 bg-gray-800 w-5 rounded-full dark:bg-white'></li>
                                <li className='h-1 bg-gray-800 w-2 rounded-full dark:bg-white'></li>
                            </ul>
                            <p className='text-gray-600 max-w-[650px] mt-5 dark:text-white text-justify'>Let's bring your ideas to life! Whether it's web development, mobile applications, or innovative solutions,
                                I'm ready to turn your vision into reality. Let's collaborate and create something remarkable.</p>
                        </div>
                        <div>
                            <a href="#contact">
                                <Button className='bg-gray-700 dark:bg-white dark:text-black rounded-3xl text-base custom-font capitalize tracking-wider
                             hover:bg-gray-900 dark:hover:bg-gray-700 dark:hover:text-white'>
                                    Hire Me</Button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

        </>
    )
}

export default Freelance
