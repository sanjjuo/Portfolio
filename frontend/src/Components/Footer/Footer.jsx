import React from 'react';
import { TiLocation } from "react-icons/ti";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { TbBrandGithubFilled } from "react-icons/tb";
import { ImLinkedin2 } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
    return (
        <>
            <section className='pt-10 lg:pt-[50px] bg-gray-100 dark:bg-gray-900'>
                <div className="container px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
                        <div className='md:col-span-3 lg:col-span-2'>
                            <h1 className='text-xl font-semibold text-gray-800 mb-5 dark:text-white'>About</h1>
                            <h1 className="text-xl tracking-widest">
                                <span className='text-gray-500' style={{ fontFamily: "Luckiest Guy, cursive" }}>SAN</span>
                                <span className=" dark:text-white" style={{ fontFamily: "Luckiest Guy, cursive" }}>JEED</span></h1>
                            <p className='text-gray-600 font-light text-sm text-justify dark:text-white'>Jr React Developer with 6 months of experience in web and mobile
                                application development. Passionate about learning and applying the latest
                                technologies and best practices to deliver high-quality solutions.</p>
                            <ul className='flex items-center gap-4 mt-5'>
                                <li className='text-xl bg-gray-300 rounded-full p-2 text-gray-700 transition duration-500 ease-in-out
                                 transform scale-100 hover:scale-110 cursor-pointer hover:bg-gray-700 hover:text-gray-300 dark:bg-white dark:text-gray-800'>
                                    <a href='https://www.facebook.com/profile.php?id=100092943613170' target='_blank'><FaFacebookF /></a></li>
                                <li className='text-xl bg-gray-300 rounded-full p-2 text-gray-700 transition duration-500 ease-in-out
                                 transform scale-100 hover:scale-110 cursor-pointer hover:bg-gray-700 hover:text-gray-300 dark:bg-white dark:text-gray-800'>
                                    <a href='https://www.instagram.com/sanjjuo/' target='_blank'><AiFillInstagram /></a></li>
                                <li className='text-xl bg-gray-300 rounded-full p-2 text-gray-700 transition duration-500 ease-in-out
                                 transform scale-100 hover:scale-110 cursor-pointer hover:bg-gray-700 hover:text-gray-300 dark:bg-white dark:text-gray-800'>
                                    <a href='' target='_blank'><FaTwitter /></a></li>
                                <li className='text-xl bg-gray-300 rounded-full p-2 text-gray-700 transition duration-500 ease-in-out
                                 transform scale-100 hover:scale-110 cursor-pointer hover:bg-gray-700 hover:text-gray-300 dark:bg-white dark:text-gray-800'>
                                    <a href='https://www.linkedin.com/in/mohamedsanjeed' target='_blank' ><ImLinkedin2 /></a></li>
                                <li className='text-xl bg-gray-300 rounded-full p-2 text-gray-700 transition duration-500 ease-in-out
                                 transform scale-100 hover:scale-110 cursor-pointer hover:bg-gray-700 hover:text-gray-300 dark:bg-white dark:text-gray-800'>
                                    <a href='https://github.com/sanjjuo' target='_blank'><TbBrandGithubFilled /></a></li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-xl font-semibold text-gray-800 mb-5 dark:text-white'>Links</h1>
                            <ul className='space-y-2'>
                                <li className='font-light text-sm text-gray-600 dark:text-white'>Home</li>
                                <li className='font-light text-sm text-gray-600 dark:text-white'>About</li>
                                <li className='font-light text-sm text-gray-600 dark:text-white'>Skills</li>
                                <li className='font-light text-sm text-gray-600 dark:text-white'>Resume</li>
                                <li className='font-light text-sm text-gray-600 dark:text-white'>Services</li>
                                <li className='font-light text-sm text-gray-600 dark:text-white'>Works</li>
                                <li className='font-light text-sm text-gray-600 dark:text-white'>Contact</li>
                            </ul>
                        </div>
                        <div className=''>
                            <h1 className='text-xl font-semibold text-gray-800 mb-5 dark:text-white'>Services</h1>
                            <ul className='space-y-2'>
                                <li className='font-light text-sm text-gray-600 dark:text-white'>Frontend Development</li>
                                <li className='font-light text-sm text-gray-600 dark:text-white'>Web Development</li>
                                <li className='font-light text-sm text-gray-600 dark:text-white'>Full Stack Development</li>
                                <li className='font-light text-sm text-gray-600 dark:text-white'>Frontend Design</li>
                                <li className='font-light text-sm text-gray-600 dark:text-white'>Mobile App Development</li>
                                <li className='font-light text-sm text-gray-600 dark:text-white'>Instant Upgrades</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-xl font-semibold text-gray-800 mb-5 dark:text-white'>Contact</h1>
                            <ul className='space-y-5'>
                                <li className='font-light text-sm text-gray-600 flex items-center gap-2 dark:text-white'>
                                    <TiLocation className='cursor-pointer text-2xl' />
                                    <span>Malappuram, Kerala, India</span>
                                </li>
                                <li className='font-light text-sm text-gray-600 flex items-center gap-2 dark:text-white'>
                                    <BsPhoneVibrateFill className='cursor-pointer text-2xl' />
                                    <span>+91 7902501645</span>
                                </li>
                                <li className='font-light text-sm text-gray-600 flex items-center gap-3 dark:text-white'>
                                    <FaEnvelopeOpenText className='cursor-pointer text-xl' />
                                    <span>sanjeedofficial22@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='border-t-[1px] border-gray-400 mt-10 p-5 lg:p-8 flex justify-center items-center'>
                    <div className="container">
                        <p className='text-center m-0 text-gray-700 dark:text-white'>&copy; Copyright {new Date().getFullYear()} | All Rights Reserved</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
