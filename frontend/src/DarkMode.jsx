import React, { useEffect, useState } from 'react'
import { GoSun } from "react-icons/go";
import { RxMoon } from "react-icons/rx";

const DarkMode = () => {
    const [isDark, setIsDark] = useState(localStorage.getItem("dark") === "true" || false)

    const element = document.documentElement;

    useEffect(() => {
        localStorage.setItem("dark", isDark);
        if (isDark) {
            element.classList.add("dark")
        } else {
            element.classList.remove("dark")
        }
    }, [isDark])

    const themeHandle = () => {
        setIsDark(prev => !prev)
    }
    return (
        <>
                {
                    !isDark ?
                        <ul className='flex items-center justify-between gap-2 bg-gray-200 p-2 rounded-[50px] cursor-pointer'>
                            <li className='text-[12px] font-extrabold'>DAYMODE</li>
                            <li className='bg-white p-2 rounded-full shadow-lg text-base cursor-pointer' onClick={themeHandle}><GoSun /></li>
                        </ul>
                        :
                        <ul className='flex items-center gap-2 dark:bg-gray-900 p-2 rounded-[50px] cursor-pointer'>
                            <li className='bg-gray-800 p-2 rounded-full shadow-lg text-base cursor-pointer'onClick={themeHandle}><RxMoon /></li>
                            <li className='text-[12px] font-extrabold text-white'>NIGHTMODE</li>
                        </ul>
                }
        </>
    )
}

export default DarkMode
