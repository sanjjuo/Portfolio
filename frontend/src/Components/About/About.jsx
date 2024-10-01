import { Button } from '@material-tailwind/react'
import React from 'react'
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion"

const About = () => {
    return (
        <>
            <section className='px-4 py-10 lg:py-[50px] dark:bg-black dark:text-white' id='about'>
                <div className="container">
                    <h1 className='text-gray-600 text-xl lg:text-2xl font-normal text-center mb-2'>About Me</h1>
                    <h2 className='text-2xl lg:text-4xl font-bold text-center mb-5'>Why You Hire Me ?</h2>
                    <ul className='flex items-center justify-center gap-1'>
                        <li className='h-[3px] bg-gray-800 w-20 rounded-full'></li>
                        <li className='h-[3px] bg-gray-800 w-5 rounded-full'></li>
                        <li className='h-[3px] bg-gray-800 w-2 rounded-full'></li>
                    </ul>
                    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-80 gap-0">
                        <div className='hidden lg:block w-[400px] h-[500px]'>
                            <img src="me.png" alt="" className='w-full h-full object-contain clip-circle2' />
                        </div>
                        <div className='col-span-2 mt-14'>
                            <h2 className='text-xl lg:text-2xl text-start mb-2'>Hello Visitors ! I am Mohamed Sanjeed.</h2>
                            <p className='text-gray-500 font-light text-justify'>Jr React Developer with 6 months of experience in web and mobile
                                application development. Skilled in React.js, the MERN stack, React Native,
                                HTML, CSS, and JavaScript. Proficient in building scalable, efficient, and userfriendly applications. Passionate about learning and applying the latest
                                technologies and best practices to deliver high-quality solutions.</p>
                            <ul className="my-5 text-gray-500 space-y-5 text-base p-0">
                                <li
                                    className="flex items-center gap-2">
                                    <motion.span
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-[45px] h-[45px] bg-gray-900 rounded-full p-[8px]">
                                        <img src="dob.png" alt="" className='w-full h-full object-contain' />
                                    </motion.span>
                                    <motion.span
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                        className='font-light'>October 22, 2001</motion.span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <motion.span
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }} className="w-[45px] h-[45px] bg-gray-900 rounded-full p-[8px]">
                                        <img src="address.png" alt="" className='w-full h-full object-contain' />
                                    </motion.span>
                                    <motion.span
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }} className='font-light'>Malappuram, Kerala, India</motion.span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <motion.span
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }} className="w-[45px] h-[45px] bg-gray-900 rounded-full p-[8px]">
                                        <img src="zip.png" alt="" className='w-full h-full object-contain' />
                                    </motion.span>
                                    <motion.span
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }} className='font-light'>679324</motion.span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <motion.span
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }} className="w-[45px] h-[45px] bg-gray-900 rounded-full p-[8px]">
                                        <img src="email.png" alt="" className='w-full h-full object-contain' />
                                    </motion.span>
                                    <motion.span
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }} className='font-light'>sanjeedofficial22@gmail.com</motion.span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <motion.span
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }} className="w-[45px] h-[45px] bg-gray-900 rounded-full p-[8px]">
                                        <img src="phone.png" alt="" className='w-full h-full object-contain' />
                                    </motion.span>
                                    <motion.span
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }} className='font-light'>+91 7902501645</motion.span>
                                </li>
                            </ul>
                            <div className='flex justify-center lg:justify-start'>
                                <motion.a
                                    href='/resume.pdf'
                                    download="MohamedSanjeed_CV.pdf"
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.9 }}>
                                    <Button className='flex items-center gap-2 justify-center bg-transparent text-black tracking-widest font-normal text-sm
                            border-[1px] border-black rounded-3xl w-52 hover:bg-black hover:text-white dark:border-white dark:text-white
                            dark:hover:bg-white dark:hover:text-black custom-font'>Download Cv <FaDownload /></Button>
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
