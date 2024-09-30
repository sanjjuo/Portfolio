import { Button } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { TbBrandGithubFilled } from "react-icons/tb";
import { ImLinkedin2 } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['React.js Developer', 'Based in Kerala, India'];

const Home = () => {
    const [text, setText] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setText((text) => text + 1)
        }, 3000)
        return () => clearTimeout(interval)
    }, [])

    return (
        <>
            <section className='relative hidden lg:block dark:bg-black dark:text-white bg-gray-100' id='home'>
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className='flex flex-col justify-center h-[100vh]'>
                            <motion.h1
                                initial={{ opacity: 0, y: -150 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className='font-extrabold uppercase text-gray-500 text-[25px]'>Hello, I'm</motion.h1>
                            <motion.h2
                                initial={{ opacity: 0, y: 150 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className='text-[73px] font-extrabold uppercase' style={{ fontFamily: "Luckiest Guy, cursive" }}>
                                Mohamed Sanjeed
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className='text-3xl font-bold mb-5'>
                                    <TextTransition inline={true} springConfig={presets.wobbly}>{TEXTS[text % TEXTS.length]}</TextTransition>
                                </motion.p>
                            <div className='flex items-center gap-2'>
                                <motion.button
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.9 }}>
                                    <Button className='bg-black text-white tracking-widest font-light text-sm
                                        border-[1px] border-black rounded-3xl w-48 hover:bg-transparent hover:text-black dark:bg-white dark:border-white dark:text-black
                                        dark:hover:bg-black dark:hover:text-white custom-font'>Contact me</Button>
                                </motion.button>
                                <motion.button
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.9 }}>
                                    <Button className='bg-transparent text-black tracking-widest font-light text-sm
                                    border-[1px] border-black rounded-3xl w-48 hover:bg-black hover:text-white dark:border-white dark:text-white
                                    dark:hover:bg-white dark:hover:text-black custom-font'>Hire me</Button>
                                </motion.button>
                            </div>
                            <ul className='flex items-center gap-4 mt-7'>
                                <motion.li
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className='text-xl bg-gray-300 rounded-full p-2 text-gray-700 transition duration-500 ease-in-out
                                 transform scale-100 hover:scale-110 cursor-pointer hover:bg-gray-700 hover:text-gray-300 dark:bg-white dark:text-gray-800'>
                                    <a href='https://www.facebook.com/profile.php?id=100092943613170' target='_blank'><FaFacebookF /></a></motion.li>
                                <motion.li
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className='text-xl bg-gray-300 rounded-full p-2 text-gray-700 transition duration-500 ease-in-out
                                 transform scale-100 hover:scale-110 cursor-pointer hover:bg-gray-700 hover:text-gray-300 dark:bg-white dark:text-gray-800'>
                                    <a href='https://www.instagram.com/sanjjuo/' target='_blank'><AiFillInstagram /></a></motion.li>
                                <motion.li
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className='text-xl bg-gray-300 rounded-full p-2 text-gray-700 transition duration-500 ease-in-out
                                 transform scale-100 hover:scale-110 cursor-pointer hover:bg-gray-700 hover:text-gray-300 dark:bg-white dark:text-gray-800'>
                                    <a href='' target='_blank'><FaTwitter /></a></motion.li>
                                <motion.li
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className='text-xl bg-gray-300 rounded-full p-2 text-gray-700 transition duration-500 ease-in-out
                                 transform scale-100 hover:scale-110 cursor-pointer hover:bg-gray-700 hover:text-gray-300 dark:bg-white dark:text-gray-800'>
                                    <a href='https://www.linkedin.com/in/mohamedsanjeed' target='_blank' ><ImLinkedin2 /></a></motion.li>
                                <motion.li
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className='text-xl bg-gray-300 rounded-full p-2 text-gray-700 transition duration-500 ease-in-out
                                 transform scale-100 hover:scale-110 cursor-pointer hover:bg-gray-700 hover:text-gray-300 dark:bg-white dark:text-gray-800'>
                                    <a href='https://github.com/sanjjuo' target='_blank'><TbBrandGithubFilled /></a></motion.li>
                            </ul>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 150 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className='relative w-full h-[600px]'>
                            <img src="me.png" alt="" className='w-full h-full object-contain clip-circle' />
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* mobile home section */}
            <section className='lg:hidden pb-[50px] bg-gray-100 dark:bg-black dark:text-white' id='home'>
                <div className='relative'>
                    <motion.img
                        initial={{ opacity: 0, y: 150 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        src="me.png" alt="" className='h-[500px] w-full object-contain clip-circle2' />
                    <div className='absolute top-72 left-0 right-0 text-center flex flex-col justify-center items-center'>
                        <motion.h1
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className='text-xl text-gray-100 font-bold'>Hello, I'm</motion.h1>
                        <motion.h2
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className='text-[35px] font-extrabold uppercase text-gray-700' style={{ fontFamily: "Luckiest Guy, cursive" }}>Mohamed Sanjeed</motion.h2>
                        <motion.p
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className='text-2xl font-bold mb-5 text-gray-100'>
                                React.js Developer
                            </motion.p>
                        <div className='flex items-center gap-2'>
                            <motion.button initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.9 }}>
                                <Button className='bg-black text-white tracking-widest font-light text-sm
                                        border-[1px] border-black rounded-3xl w-36 p-3 hover:bg-transparent hover:text-black dark:border-white dark:text-white
                                        dark:hover:bg-white dark:hover:text-black custom-font'>Contact me</Button>
                            </motion.button>
                            <motion.button initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.9 }}>
                                <Button className='bg-transparent text-black tracking-widest font-light text-sm
                                    border-[1px] border-black rounded-3xl w-36 p-3 hover:bg-black hover:text-white dark:border-white dark:text-white
                                    dark:hover:bg-white dark:hover:text-black custom-font'>Hire me</Button>
                            </motion.button>
                        </div>
                        <ul className='flex items-center gap-4 mt-5'>
                            <motion.li
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className='text-xl bg-gray-300 rounded-full p-2 text-gray-700 transition duration-500 ease-in-out
                                 transform scale-100 hover:scale-110 cursor-pointer hover:bg-gray-700 hover:text-gray-300 dark:bg-white dark:text-gray-800'>
                                <a href='https://www.facebook.com/profile.php?id=100092943613170' target='_blank'><FaFacebookF /></a></motion.li>
                            <motion.li
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className='text-xl bg-gray-300 rounded-full p-2 text-gray-700 transition duration-500 ease-in-out
                                 transform scale-100 hover:scale-110 cursor-pointer hover:bg-gray-700 hover:text-gray-300 dark:bg-white dark:text-gray-800'>
                                <a href='https://www.instagram.com/sanjjuo/' target='_blank'><AiFillInstagram /></a></motion.li>
                            <motion.li
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className='text-xl bg-gray-300 rounded-full p-2 text-gray-700 transition duration-500 ease-in-out
                                 transform scale-100 hover:scale-110 cursor-pointer hover:bg-gray-700 hover:text-gray-300 dark:bg-white dark:text-gray-800'>
                                <a href='' target='_blank'><FaTwitter /></a></motion.li>
                            <motion.li
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className='text-xl bg-gray-300 rounded-full p-2 text-gray-700 transition duration-500 ease-in-out
                                 transform scale-100 hover:scale-110 cursor-pointer hover:bg-gray-700 hover:text-gray-300 dark:bg-white dark:text-gray-800'>
                                <a href='https://www.linkedin.com/in/mohamedsanjeed' target='_blank' ><ImLinkedin2 /></a></motion.li>
                            <motion.li
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className='text-xl bg-gray-300 rounded-full p-2 text-gray-700 transition duration-500 ease-in-out
                                 transform scale-100 hover:scale-110 cursor-pointer hover:bg-gray-700 hover:text-gray-300 dark:bg-white dark:text-gray-800'>
                                <a href='https://github.com/sanjjuo' target='_blank'><TbBrandGithubFilled /></a></motion.li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
