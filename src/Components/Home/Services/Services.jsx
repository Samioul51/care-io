"use client"

import TextType from '@/Components/TextType';
import React from 'react';
import { motion } from "motion/react"

const Services = () => {
    return (
        <div className='w-full max-w-[1440px] mb-[100px] mx-auto'>
            <div className='text-black text-3xl lg:text-[40px] font-bold text-center mb-10'>
                <TextType
                    text={"Services"}
                    typingSpeed={100}
                    pauseDuration={1500}
                    showCursor={false}
                    startOnVisible={true}
                    deletingSpeed={0}
                    loop={false}
                />
            </div>
            <div className='grid gap-y-5 grid-cols-1 lg:grid-cols-3 '>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                >
                <div className="card w-full max-w-96 bg-base-100 card-lg shadow-lg mx-auto">
                    <div className="card-body">
                        <h2 className="card-title font-bold">Elderly Care</h2>
                        <p className='text-justify'>Compassionate care for senior citizens with trained professionals.</p>
                        <p className='text-[#2563eb] font-medium text-left'>Starting from 500 BDT/hour</p>
                    </div>
                </div>
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                >
                <div className="card w-96 bg-base-100 card-lg shadow-lg mx-auto">
                    <div className="card-body">
                        <h2 className="card-title font-bold">Baby Care</h2>
                        <p className='text-justify'>Professional babysitting services for your little ones with experienced caregivers.</p>
                        <p className='text-[#2563eb] font-medium text-left'>Starting from 600 BDT/hour</p>
                    </div>
                </div>
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                >
                <div className="card w-96 bg-base-100 card-lg shadow-lg mx-auto">
                    <div className="card-body">
                        <h2 className="card-title font-bold">Sick Care</h2>
                        <p className='text-justify'>Specialized care for those recovering or managing health conditions.</p>
                        <p className='text-[#2563eb] font-medium text-left'>Starting from 700 BDT/hour</p>
                    </div>
                </div>
                </motion.button>
            </div>

        </div>
    );
};

export default Services;