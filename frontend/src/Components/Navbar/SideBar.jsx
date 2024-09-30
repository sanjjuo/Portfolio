import React from 'react';
import {
    Drawer,
    Button,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { FaHome } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi2";
import { GiBrain } from "react-icons/gi";
import { RiFileListFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { TbBrandGithubFilled } from "react-icons/tb";
import { ImLinkedin2, ImWhatsapp } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";

const SideBar = ({ open, closeDrawer }) => {
    return (
        <>
            <Drawer open={open} onClose={closeDrawer} className="p-4 dark:bg-gray-900 dark:text-white w-72 overflow-y-auto">
                <div className="mb-6 flex items-center justify-between">
                    <Typography>
                        <h1 className='font-bold'>Menu bar</h1>
                    </Typography>
                    <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </div>
                <Typography className="my-8 pr-4 font-normal flex flex-col justify-around h-full">
                    <div>
                        <ul className='space-y-5'>
                            <li className='flex items-center gap-1 text-gray-700 hover:text-black transition duration-500 transform 
                 scale-100 hover:scale-105 dark:text-white dark:hover:text-gray-700'><FaHome />Home</li>
                            <li className='flex items-center gap-1 text-gray-700 hover:text-black transition duration-500 transform 
                 scale-100 hover:scale-105 dark:text-white dark:hover:text-gray-700'><HiInformationCircle />About</li>
                            <li className='flex items-center gap-1 text-gray-700 hover:text-black transition duration-500 transform 
                 scale-100 hover:scale-105 dark:text-white dark:hover:text-gray-700'><GiBrain />Skills</li>
                            <li className='flex items-center gap-1 text-gray-700 hover:text-black transition duration-500 transform 
                 scale-100 hover:scale-105 dark:text-white dark:hover:text-gray-700'><RiFileListFill />Resume</li>
                            <li className='flex items-center gap-1 text-gray-700 hover:text-black transition duration-500 transform 
                 scale-100 hover:scale-105 dark:text-white dark:hover:text-gray-700'><FaHandshake />Services</li>
                            <li className='flex items-center gap-1 text-gray-700 hover:text-black transition duration-500 transform 
                 scale-100 hover:scale-105 dark:text-white dark:hover:text-gray-700'><CgWebsite />Works</li>
                            <li className='flex items-center gap-1 text-gray-700 hover:text-black transition duration-500 transform 
                 scale-100 hover:scale-105 dark:text-white dark:hover:text-gray-700'><BiSolidPhoneCall />Contact</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex items-center gap-2'>
                            <li className='text-lg bg-gray-300 rounded-full p-2 text-gray-700 transition duration-500 ease-in-out
                                 transform scale-100 hover:scale-110 cursor-pointer hover:bg-gray-700 hover:text-gray-300 dark:bg-white dark:text-gray-800'>
                                <ImWhatsapp href='' target='_blank' /></li>
                            <li className='text-lg bg-gray-300 rounded-full p-2 text-gray-700 transition duration-500 ease-in-out
                                 transform scale-100 hover:scale-110 cursor-pointer hover:bg-gray-700 hover:text-gray-300 dark:bg-white dark:text-gray-800'>
                                <FaFacebookF href='https://www.facebook.com/profile.php?id=100092943613170' target='_blank' /></li>
                            <li className='text-lg bg-gray-300 rounded-full p-2 text-gray-700 transition duration-500 ease-in-out
                                 transform scale-100 hover:scale-110 cursor-pointer hover:bg-gray-700 hover:text-gray-300 dark:bg-white dark:text-gray-800'>
                                <AiFillInstagram href='https://www.instagram.com/sanjjuo/' target='_blank' /></li>
                            <li className='text-lg bg-gray-300 rounded-full p-2 text-gray-700 transition duration-500 ease-in-out
                                 transform scale-100 hover:scale-110 cursor-pointer hover:bg-gray-700 hover:text-gray-300 dark:bg-white dark:text-gray-800'>
                                <FaTwitter href='' target='_blank' /></li>
                            <li className='text-lg bg-gray-300 rounded-full p-2 text-gray-700 transition duration-500 ease-in-out
                                 transform scale-100 hover:scale-110 cursor-pointer hover:bg-gray-700 hover:text-gray-300 dark:bg-white dark:text-gray-800'>
                                <ImLinkedin2 href='https://www.linkedin.com/in/mohamedsanjeed' target='_blank' /></li>
                            <li className='text-lg bg-gray-300 rounded-full p-2 text-gray-700 transition duration-500 ease-in-out
                                 transform scale-100 hover:scale-110 cursor-pointer hover:bg-gray-700 hover:text-gray-300 dark:bg-white dark:text-gray-800'>
                                <TbBrandGithubFilled href='https://github.com/sanjjuo' target='_blank' /></li>
                        </ul>
                    </div>
                </Typography>
            </Drawer>
        </>
    )
}

export default SideBar
