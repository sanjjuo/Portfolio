import React from 'react'
import { Progress, Typography } from "@material-tailwind/react";
import { skills } from '../../data';
import { motion } from "framer-motion"

const Skills = () => {
    return (
        <>
            <section className='px-4 py-10 lg:py-[50px] dark:bg-black dark:text-white' id='skills'>
                <div className="container">
                    <h1 className='text-gray-600 text-xl lg:text-2xl font-normal text-center mb-2'>My Skills</h1>
                    <h2 className='text-2xl lg:text-4xl font-bold text-center mb-5'>Skills I Have</h2>
                    <ul className='flex items-center justify-center gap-1'>
                        <li className='h-[3px] bg-gray-800 w-20 rounded-full'></li>
                        <li className='h-[3px] bg-gray-800 w-5 rounded-full'></li>
                        <li className='h-[3px] bg-gray-800 w-2 rounded-full'></li>
                    </ul>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-20">
                        {skills.map((item, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="w-full" key={index}>
                                <div className="mb-2 flex items-center justify-between gap-4">
                                    <Typography color="blue-gray" className='dark:text-white font-normal'>
                                        <h1>{item.skill}</h1>
                                    </Typography>
                                    <Typography color="blue-gray" className='dark:text-white font-normal'>
                                        <h2>{item.progress}%</h2>
                                    </Typography>
                                </div>
                                <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-none">
                                    <div
                                        className={`absolute h-full rounded-none ${item.progress && 'bg-gray-700'} dark:${item.progress && "bg-white"}`}
                                        style={{ width: `${item.progress}%` }}
                                    ></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills
