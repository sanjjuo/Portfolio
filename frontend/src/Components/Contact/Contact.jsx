import { Button } from '@material-tailwind/react'
import React from 'react'
import { TiLocation } from "react-icons/ti";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <>
            <section className='px-4 py-10 lg:py-[50px] dark:bg-black dark:text-white' id='contact'>
                <div className="container">
                    <h1 className='text-gray-600 text-xl lg:text-2xl font-normal text-center mb-2'>Contact</h1>
                    <h2 className='text-2xl lg:text-4xl font-bold text-center mb-5'>Let's Talk !</h2>
                    <ul className='flex items-center justify-center gap-1'>
                        <li className='h-[3px] bg-gray-800 w-20 rounded-full'></li>
                        <li className='h-[3px] bg-gray-800 w-5 rounded-full'></li>
                        <li className='h-[3px] bg-gray-800 w-2 rounded-full'></li>
                    </ul>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-20 gap-10 lg:gap-0">
                        <div className='mt-5'>
                            <motion.ul
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className='flex flex-col items-center justify-center'>
                                <li className='border-2 border-black p-3 mb-5 transform rotate-45 cursor-pointer 
                                hover:bg-black hover:text-white group dark:border-white dark:hover:bg-white dark:hover:text-black'>
                                    <TiLocation className='transform -rotate-45 text-3xl transition ease-in-out duration-700 transfor scale-100 group-hover:scale-150' /></li>
                                <li className=' uppercase text-sm font-semibold tracking-wider text-gray-800 dark:text-white'>Address / Street</li>
                                <li className='text-gray-700 font-light text-sm dark:text-white'>Malappuram, Kerala, India</li>
                            </motion.ul>
                        </div>
                        <div className='mt-5'>
                            <motion.ul
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className='flex flex-col items-center justify-center'>
                                <li className='border-2 border-black p-3 mb-5 transform rotate-45 cursor-pointer hover:bg-black
                                 hover:text-white group dark:border-white dark:hover:bg-white dark:hover:text-black'>
                                    <BsPhoneVibrateFill className='transform -rotate-45 text-3xl transition ease-in-out duration-700 transfor scale-100 group-hover:scale-150' /></li>
                                <li className=' uppercase text-sm font-semibold tracking-wider text-gray-800 dark:text-white'>contact number</li>
                                <li className='text-gray-700 font-light text-sm dark:text-white'>+91 7902501645</li>
                            </motion.ul>
                        </div>
                        <div className='mt-5'>
                            <motion.ul
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className='flex flex-col items-center justify-center'>
                                <li className='border-2 border-black p-3 mb-5 transform rotate-45 cursor-pointer hover:bg-black
                                 hover:text-white group dark:border-white dark:hover:bg-white dark:hover:text-black'>
                                    <FaEnvelopeOpenText className='transform -rotate-45 text-3xl transition ease-in-out duration-700 transfor scale-100 group-hover:scale-150' /></li>
                                <li className=' uppercase text-sm font-semibold tracking-wider text-gray-800 dark:text-white'>email address</li>
                                <li className='text-gray-700 font-light text-sm dark:text-white'>sanjeedofficial22@gmail.com</li>
                            </motion.ul>
                        </div>
                    </div>

                    <motion.form
                        initial={{ opacity: 0, y: 150 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        action="" className='mt-20'>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <input type="text" name="name" id="name" placeholder='Enter your full name' className='border-2 p-3 border-gray-500 focus:outline-none dark:bg-transparent' />
                            <input type="email" name="name" id="name" placeholder='Enter your email' className='border-2 p-3 border-gray-500 focus:outline-none dark:bg-transparent' />
                            <textarea name="message" id="message" rows={6} placeholder='Enter your message' className='border-2 p-3 border-gray-500 lg:col-span-2 focus:outline-none dark:bg-transparent' />
                        </div>
                    </motion.form>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='text-center mt-5'>
                        <Button className='bg-transparent text-black border-[1px] lg:w-[15%] border-black text-base capitalize tracking-widest custom-font font-light rounded-3xl
                             hover:bg-black hover:text-white'>Send Message</Button>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Contact
