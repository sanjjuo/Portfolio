import React from 'react'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { HiOutlineXMark } from "react-icons/hi2";
import { FaRegEye } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";

const WorkModal = ({ open, handleOpen, detail }) => {
    
    return (
        <>
            <Dialog open={open} handler={handleOpen} className='dark:bg-gray-900'>
                <DialogHeader className='flex justify-between items-center dark:text-gray-400'><h1>{detail.name}</h1>
                <HiOutlineXMark className='cursor-pointer text-gray-700 hover:text-gray-800 dark:text-gray-400' onClick={handleOpen}/></DialogHeader>
                <DialogBody>
                    <p className='dark:text-gray-400'>{detail.description}</p>
                </DialogBody>
                <DialogFooter>
                    <Button
                        onClick={handleOpen}
                        className="mr-1 bg-black hover:bg-gray-400 hover:text-gray-800 rounded-3xl"
                    >
                        <span className='flex items-center gap-2'>View in <IoLogoGithub className='text-xl'/></span>
                    </Button>
                    <Button onClick={handleOpen} className='bg-gray-400 text-gray-800 hover:bg-black hover:text-white 
                     flex justify-center items-center rounded-full w-8'>
                        <a href={detail.vercel} target='_blank' className='text-xl'><FaRegEye /></a>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    )
}

export default WorkModal
