import Image from 'next/image';
import React from 'react';
import logo from '../../../../public/images/logo.png';
import Link from 'next/link';


const Navbar = () => {
    return (
        <div className='w-full max-w-360 flex justify-between items-center px-2.5 py-5 mx-auto'>
            <Link href={"/"} className='flex flex-col gap-1 items-center'>
                <Image 
                    alt="CARE.IO" 
                    src={logo}
                    width={50}
                    height={50}
                ></Image>
                <p className='text-xl font-bold'>CARE.<span  className='text-[#2563eb]'>IO</span></p>
            </Link>
            <div className='flex items-center gap-10'>
                <Link href={"/"} className='text-poppins text-[#4b5563] font-medium'>Home</Link>
                <Link href={"/services"} className='text-[#4b5563] font-medium'>Services</Link>
                <Link href={"/my_bookings"} className='text-[#4b5563] font-medium'>My Bookings</Link>
                <Link href={"/login"} className='text-[#4b5563] font-medium'>Login</Link>
                <Link href={"/signup"} className='bg-[#2563eb] text-white font-medium rounded- py-[0.5rem] px-[1.5rem] rounded-[9999px]'>Sign Up</Link>
            </div>
        </div>
    );
};

export default Navbar;