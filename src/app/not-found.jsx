import Image from 'next/image';
import React from 'react';
import error from '../../public/images/error.svg'
import Link from 'next/link';

const notFound = () => {
    return (
        <div className='w-full max-w-[1440px] h-screen flex flex-col justify-center items-center'>
            <Image src={error} height={500} width={500} alt="404"/>            
            <Link href={"/"} className='bg-[#2563eb] text-white font-medium py-2 px-6 rounded-[9999px]'>Go Home</Link>
        </div>
    );
};

export default notFound;