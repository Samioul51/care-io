"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../../../../public/images/logo.png';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';
import NavLink from '@/Components/Buttons/NavLink';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navOptions = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "My Bookings", path: "/my_bookings" },
        { name: "Login", path: "/login" }
    ]

    return (
        <div className='w-full max-w-360 flex justify-between items-center px-2.5 py-5 mx-auto bg-white'>
            <Link href={"/"} className='flex flex-col gap-1 items-center'>
                <Image
                    alt="CARE.IO"
                    src={logo}
                    width={50}
                    height={50}
                ></Image>
                <p className="text-xl font-bold">CARE.<span className='text-[#2563eb]'>IO</span></p>
            </Link>

            {/* Desktop */}

            <div className='hidden items-center lg:flex gap-10'>
                {
                    navOptions.map(option => (
                        <NavLink key={option.name} href={option.path}>{option.name}</NavLink>
                    ))
                }
                <Link href={"/signup"} className='bg-[#2563eb] text-white font-medium rounded- py-[0.5rem] px-[1.5rem] rounded-[9999px]'>Sign Up</Link>
            </div>

            {/* Small Device */}

            <div className='flex items-center lg:hidden text-xl'>
                <button onClick={toggleMenu}>
                    {
                        isOpen ? <HiX size={30} className='text-[#4b5563]'></HiX>
                            :
                            <HiMenu size={30} className='text-[#4b5563]'></HiMenu>
                    }
                </button>
            </div>

            <div className={`absolute top-[100px] shadow-2xl left-0 w-full bg-white flex flex-col items-center py-[24px] lg:hidden gap-[24px] z-50 transform transition-all duration-300 ease-in-out
                        ${isOpen ? "translate-y-0 opacity-100 max-h-[500px]" : "-translate-y-10 opacity-0 max-h-0 overflow-hidden"}`}>
                {
                    navOptions.map(option => (
                        <NavLink key={option.name} href={option.path} className="text-[#4b5563]">{option.name}</NavLink>
                    ))
                }
                <Link href={"/signup"} className='bg-[#2563eb] text-white font-medium py-[0.5rem] px-[1.5rem] rounded-[9999px]'>Sign Up</Link>
            </div>
        </div>
    );
};

export default Navbar;