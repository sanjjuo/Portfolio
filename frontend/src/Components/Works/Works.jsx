import React, { useState } from 'react'
import { works } from '../../data'
import { Typography } from '@material-tailwind/react';
import { FaRegEye } from "react-icons/fa";
import { Card, CardHeader, CardBody, } from "@material-tailwind/react";
import WorkModal from './WorkModal';
import { motion } from "framer-motion";

const Works = () => {
    const [open, setOpen] = React.useState(false);
    const [detail, setDetail] = useState([])

    const handleOpen = (d) => {
        setOpen(!open);
        console.log(d);
        setDetail(d)
    }
    return (
        <>
            <section className='px-4 py-10 lg:py-[50px] dark:bg-black dark:text-white' id='works'>
                <div className="container">
                    <h1 className='text-gray-600 text-xl lg:text-2xl font-normal text-center mb-2'>My Works</h1>
                    <h2 className='text-2xl lg:text-4xl font-bold text-center mb-5'>Latest Projects</h2>
                    <ul className='flex items-center justify-center gap-1'>
                        <li className='h-[3px] bg-gray-800 w-20 rounded-full'></li>
                        <li className='h-[3px] bg-gray-800 w-5 rounded-full'></li>
                        <li className='h-[3px] bg-gray-800 w-2 rounded-full'></li>
                    </ul>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-20">
                        {works.map((item, index) => (
                            <motion.div key={index}
                            className='lg:col-span-1'
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}>
                                <Card className="w-full h-[300px] lg:h-[350px] rounded-none overflow-hidden dark:bg-transparent dark:border-[1px]
                             dark:border-gray-700 border-[1px] border-gray-300 shadow-none">
                                    <CardHeader
                                        floated={false}
                                        shadow={false}
                                        color=""
                                        className="w-full h-full m-0 rounded-none overflow-hidden"
                                    >
                                        <img
                                            src={item.image}
                                            alt="works"
                                            className='h-full w-full object-fill transition duration-1000 ease-in-out transform scale-100 hover:scale-110'
                                        />
                                    </CardHeader>
                                    <CardBody className='border-t-[1px] border-gray-300'>
                                        <Typography className='flex justify-between items-center'>
                                            <h4 onClick={() => handleOpen(item)} className='text-xl font-semibold cursor-pointer hover:text-gray-800 hover:underline dark:text-gray-400
                                        '>{item.name}</h4>
                                            <a href={item.vercel} target='_blank' className='text-2xl cursor-pointer hover:text-gray-800 dark:text-gray-400'><FaRegEye /></a>
                                        </Typography>
                                    </CardBody>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <WorkModal open={open} handleOpen={handleOpen} detail={detail} />
        </>
    )
}

export default Works
