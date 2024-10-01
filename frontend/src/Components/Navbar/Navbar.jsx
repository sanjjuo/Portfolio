import React, { useState } from 'react'
import { Navbar, Collapse, Typography, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import DarkMode from '../../DarkMode';
import SideBar from './SideBar';
import MyWhatsapp from '../Whatsapp/Whatsapp';

const NavList = () => {
    const [nav, setNav] = useState("home")
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
            <Typography
                as="li"
                className="p-1 font-medium text-[15px] tracking-widest"
            >
                <a href="#home" onClick={() => setNav("Home")} className="flex flex-col items-center text-gray-700 hover:text-black transition duration-500 transform 
                 scale-100 hover:scale-110 dark:text-white dark:hover:text-gray-700">
                    Home
                </a>
            </Typography>
            <Typography
                as="li"
                className="p-1 font-medium text-[15px] tracking-widest"
            >
                <a href="#about" className="flex items-center text-gray-700 hover:text-black transition duration-500 transform 
                 scale-100 hover:scale-110 dark:text-white dark:hover:text-gray-700">
                    About
                </a>
            </Typography>
            <Typography
                as="li"
                className="p-1 font-medium text-[15px] tracking-widest"
            >
                <a href="#skills" className="flex items-center text-gray-700 hover:text-black transition duration-500 transform 
                 scale-100 hover:scale-110 dark:text-white dark:hover:text-gray-700">
                    Skills
                </a>
            </Typography>
            <Typography
                as="li"
                className="p-1 font-medium text-[15px] tracking-widest"
            >
                <a href="#resume" className="flex items-center text-gray-700 hover:text-black transition duration-500 transform 
                 scale-100 hover:scale-110 dark:text-white dark:hover:text-gray-700">
                    Resume
                </a>
            </Typography>
            <Typography
                as="li"
                className="p-1 font-medium text-[15px] tracking-widest"
            >
                <a href="#services" className="flex items-center text-gray-700 hover:text-black transition duration-500 transform 
                 scale-100 hover:scale-110 dark:text-white dark:hover:text-gray-700">
                    Services
                </a>
            </Typography>
            <Typography
                as="li"
                className="p-1 font-medium text-[15px] tracking-widest"
            >
                <a href="#works" className="flex items-center text-gray-700 hover:text-black transition duration-500 transform 
                 scale-100 hover:scale-110 dark:text-white dark:hover:text-gray-700">
                    Works
                </a>
            </Typography>
            <Typography
                as="li"
                className="p-1 font-medium text-[15px] tracking-widest"
            >
                <a href="#contact" className="flex items-center text-gray-700 hover:text-black transition duration-500 transform 
                 scale-100 hover:scale-110 dark:text-white dark:hover:text-gray-700">
                    Contact
                </a>
            </Typography>
        </ul>
    );
};

const AppNavbar = () => {
    const [openNav, setOpenNav] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    return (
        <>
            <section className='dark:bg-black'>
                <Navbar className="w-full mx-auto shadow-none border-0 p-2 lg:px-6 lg:py-3 dark:bg-black">
                    <div className="flex items-center justify-between gap-3 lg:gap-0 text-gray-900 dark:text-white">
                        <Typography
                            as="a"
                            href="#"
                            className="mr-4 cursor-pointer py-1.5 text-2xl font-extrabold"
                        >
                            <h1 className="text-xl tracking-widest">
                                <span className='text-gray-500' style={{ fontFamily: "Luckiest Guy, cursive" }}>SAN</span>
                                <span style={{ fontFamily: "Luckiest Guy, cursive" }}>JEED</span></h1>
                        </Typography>
                        <div className="hidden lg:block">
                            <NavList />
                        </div>
                        <div className='hidden lg:block'>
                            <DarkMode />
                        </div>
                        <IconButton
                            variant="text"
                            className="hidden lg:hidden ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent"
                            ripple={false}
                            onClick={openDrawer}
                        >
                            {openNav ? (
                                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                            ) : (
                                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                            )}
                        </IconButton>

                        <ul className='lg:hidden flex items-center gap-2'>
                            <li>
                                <DarkMode />
                            </li>
                            <li>
                                <IconButton
                                    variant="text"
                                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                                    ripple={false}
                                    onClick={openDrawer}
                                >
                                    {openNav ? (
                                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                                    ) : (
                                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                                    )}
                                </IconButton>
                            </li>
                        </ul>
                    </div>
                    <Collapse open={openNav}>
                        <NavList />
                    </Collapse>
                </Navbar>

                <div>
                    <MyWhatsapp/>
                </div>
            </section>

            <div className='lg:hidden'>
                <SideBar open={open} openDrawer={openDrawer} closeDrawer={closeDrawer} />
            </div>
        </>
    );
};

export default AppNavbar;