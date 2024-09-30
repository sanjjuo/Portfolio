import React from 'react'
import { motion } from "framer-motion"

const Loader = () => {
    return (
        <>
            <section className='flex justify-center items-center h-[100vh]'>
                <div className='w-[80px] h-[80px] lg:w-[120px] lg:h-[120px]'>
                    <img src="loader.gif" alt="" className='w-full h-full' />
                </div>
            </section>
        </>
    )
}

export default Loader
