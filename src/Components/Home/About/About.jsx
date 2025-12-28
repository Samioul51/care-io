"use client"

import React from 'react';
import Image from 'next/image';
import about from '../../../../public/images/about.jpg'
import SplitText from '@/Components/SplitText';
import TextType from '@/Components/TextType';

const About = () => {
    return (
        <div className='w-full max-w-[1440px] mb-[100px] mx-auto'>
            <div className='text-black text-3xl lg:text-[40px] font-bold text-center mb-10'>
                <TextType
                    text={"About Us"}
                    typingSpeed={100}
                    pauseDuration={1500}
                    showCursor={false}
                    startOnVisible={true}
                    deletingSpeed={0}
                    loop={false}
                />
            </div>
            <div className='w-full max-w-[1440px] flex flex-col items-center lg:flex-row lg:justify-between lg:gap-0 gap-10 px-10 bg-[#2563eb] py-10'>
                <div className='w-full flex justify-center max-w-full lg:max-w-1/2'>
                    <Image alt="About" src={about} className='w-full max-w-[500px] h-auto rounded-2xl'></Image>
                </div>
                <div className='text-white text-[8px] lg:text-[12px] w-full lg:max-w-1/2 font-medium text-justify'>
                    <SplitText
                        text="CARE.IO is a trusted online platform dedicated to providing reliable care services for children, elderly, and family members. Our mission is to make caregiving simple, secure, and accessible for everyone.
                        We connect users with verified and experienced caretakers for various needs such as babysitting, elderly care, and special care at home. With just a few clicks, users can book professional care services tailored to their schedule and location.
                        At CARE.IO, we prioritize safety, trust, and convenience, ensuring that families can rely on our platform to find the care they deserve."
                        className="text-2xl font-semibold text-center"
                        delay={10}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="justify"
                    />
                </div>

            </div>
        </div>
    );
};

export default About;