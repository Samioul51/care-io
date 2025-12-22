"use client"

import React from 'react';
import Particles from './Particles';
import TextType from '../TextType/TextType';
import { useRouter } from 'next/navigation';

const Banner = () => {
    const router=useRouter();
    return (
        <div style={{ width: '100%', height: '400px', position: 'relative', margin: "0px 0px 20px 0px" }}>
            <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
            />

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center gap-6 px-6 md:px-12 lg:px-16 w-full max-w-full z-10">
                <div className="text-center text-[#111827] text-2xl md:text-3xl lg:text-[60px] leading-snug font-bold">
                    <TextType
                    text={"Quality Care for Your Loved Ones"}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={false}
                    startOnVisible={true}
                    deletingSpeed={0}
                    loop={false}
                />
                </div>
                <p className="text-center text-[#d4d4d4] text-[10px] md:text-lg lg:text-xl w-full max-w-[1440px] mx-auto">
                    Find verified, trusted caregivers for babies, elderly, and family members. Book professional care services with ease and confidence.
                </p>
                <button className='mx-auto px-[32px] py-[16px] bg-transparent text-white hover:bg-[#eff6ff] hover:text-[#2563eb] border-2 border-solid border-[#d4d4d4] rounded-[9999px] font-medium cursor-pointer transition-colors duration-500' onClick={()=> router.push("/services")}>Book a Service</button>
            </div>

        </div>
    );
};

export default Banner;