"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../../../../public/images/logo.png';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';
import NavLink from '@/Components/Buttons/NavLink';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
    const { data: session } = useSession();

    // console.log(session);

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navOptions = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "My Bookings", path: "/my_bookings" },
        { name: "Login", path: "/login" }
    ]

    const handleOpenModal=()=>{
        document.getElementById('my_modal_5').showModal();
    }

    const handleCloseModal=()=>{
        document.getElementById('my_modal_5').close();
    }


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
                    navOptions.slice(0, 2).map(option => (
                        <NavLink key={option.name} href={option.path}>{option.name}</NavLink>
                    ))
                }
                {
                    session
                        ?
                        (
                            <>
                                {navOptions.slice(2, 3).map(option => (
                                    <NavLink key={option.name} href={option.path}>{option.name}</NavLink>
                                ))}
                                <button onClick={handleOpenModal} className='bg-[#2563eb] text-white font-medium rounded-[9999px] py-2 px-6 cursor-pointer'>Logout</button>
                            </>
                        )
                        :
                        (
                            <>
                                {navOptions.slice(3, 4).map(option => (
                                    <NavLink key={option.name} href={option.path}>{option.name}</NavLink>
                                ))}
                                <Link href={"/signup"} className='bg-[#2563eb] text-white font-medium py-2 px-6 rounded-[9999px]'>Sign Up</Link>
                            </>
                        )
                }

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
                    navOptions.slice(0, 2).map(option => (
                        <NavLink key={option.name} href={option.path}>{option.name}</NavLink>
                    ))
                }
                {
                    session
                        ?
                        (
                            <>
                                {navOptions.slice(2, 3).map(option => (
                                    <NavLink key={option.name} href={option.path}>{option.name}</NavLink>
                                ))}
                                <button onClick={handleOpenModal} className='bg-[#2563eb] text-white font-medium rounded-[9999px] py-2 px-6 cursor-pointer'>Logout</button>
                            </>
                        )
                        :
                        (
                            <>
                                {navOptions.slice(3, 4).map(option => (
                                    <NavLink key={option.name} href={option.path}>{option.name}</NavLink>
                                ))}
                                <Link href={"/signup"} className='bg-[#2563eb] text-white font-medium py-2 px-6 rounded-[9999px]'>Sign Up</Link>
                            </>
                        )
                }
            </div>

            {/* Modal for logout */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <p className="py-4 text-black">Are you sure you want to logout?</p>
                    <div className="modal-action flex">

                        <button className='btn' onClick={()=>signOut()}>Yes</button>
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">No</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Navbar;