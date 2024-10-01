import React, { useState } from 'react'
import { education, experience } from '../../data';
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { delay, motion } from "framer-motion";

const Resume = () => {
    const [resume, setResume] = useState("education")
    return (
        <>
            <section className='px-4 py-10 lg:py-[50px] dark:bg-black dark:text-white' id='resume'>
                <div className="container">
                    <h1 className='text-gray-600 text-xl lg:text-2xl font-normal text-center mb-2'>My Resume</h1>
                    <h2 className='text-2xl lg:text-4xl font-bold text-center mb-5'>Experience & Expertise</h2>
                    <ul className='flex items-center justify-center gap-1'>
                        <li className='h-[3px] bg-gray-800 w-20 rounded-full'></li>
                        <li className='h-[3px] bg-gray-800 w-5 rounded-full'></li>
                        <li className='h-[3px] bg-gray-800 w-2 rounded-full'></li>
                    </ul>
                    <ul className='flex justify-center items-center gap-2 mt-10'>
                        <motion.li
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className='hidden lg:block h-[2px] bg-gray-800 w-full rounded-full'></motion.li>
                        <motion.li
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className={`${resume === "education" ? "bg-black text-white dark:bg-white dark:text-black" : "border-black"} text-sm font-bold uppercase tracking-wider border-[1px] border-black rounded-none px-5 py-2 hover:bg-black
                         hover:text-white cursor-pointer dark:border-white dark:hover:bg-white dark:hover:text-black`} onClick={() => setResume("education")}>Education</motion.li>
                        <motion.li
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className={`${resume === "experience" ? "bg-black text-white dark:bg-white dark:text-black" : "border-black"} text-sm font-bold uppercase tracking-wider border-[1px] border-black rounded-none px-5 py-2 hover:bg-black
                         hover:text-white cursor-pointer dark:border-white dark:hover:bg-white dark:hover:text-black`} onClick={() => setResume("experience")}>Experience</motion.li>
                        <motion.li
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className='hidden lg:block h-[2px] bg-gray-800 w-full rounded-full'></motion.li>
                    </ul>
                    {
                        resume === "education" ?
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-10">
                                {education.map((item, index) => (
                                    <motion.Card
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="mt-6 w-full h-full rounded-none bg-gray-100 dark:bg-transparent
                                     dark:border-gray-700 dark:border-[1px] cursor-default" key={index}>
                                        <CardBody>
                                            <Typography className="text-lg font-light dark:text-gray-200">
                                                <h1>{item.duration}</h1>
                                            </Typography>
                                            <Typography>
                                                <h2 className='text-xl lg:text-2xl font-bold dark:text-gray-400'>{item.course}</h2>
                                                <h5 className='uppercase mb-5 dark:text-gray-400'>{item.institution}</h5>
                                                <p className='capitalize dark:text-gray-400'>{item.description}</p>
                                            </Typography>
                                        </CardBody>
                                    </motion.Card>
                                ))}
                            </div>
                            : <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-10">
                                {experience.map((item, index) => (
                                    <motion.Card
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }} 
                                    className="mt-6 w-full h-full rounded-none bg-gray-100
                                    dark:bg-transparent
                                     dark:border-gray-700 dark:border-[1px]" key={index}>
                                        <CardBody>
                                            <Typography className="text-lg font-light dark:text-gray-200">
                                                <h1>{item.duration}</h1>
                                            </Typography>
                                            <Typography>
                                                <h2 className='text-xl lg:text-2xl font-bold dark:text-gray-400'>{item.job}</h2>
                                                <h5 className='uppercase mb-5 dark:text-gray-400'>{item.company}</h5>
                                                {item.points.map((point, index) => (
                                                    <li key={index} className='text-gray-700 dark:text-gray-400'>{point}</li>
                                                ))}
                                            </Typography>
                                        </CardBody>
                                    </motion.Card>
                                ))}
                            </div>
                    }
                </div>
            </section>
        </>
    )
}

export default Resume
