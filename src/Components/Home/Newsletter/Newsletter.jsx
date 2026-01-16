"use client"

import React, { useState } from 'react';
import TextType from '@/Components/TextType';
import { motion } from "motion/react";

const Newsletter = () => {
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubscribed(true);
    };

    return (
        <div className='w-full max-w-[1440px] mb-[100px] mx-auto'>
            <div className='bg-[#2563eb] rounded-3xl py-16 px-6 md:px-12 flex flex-col items-center shadow-2xl overflow-hidden relative'>
                {/* Decorative background circle */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-5 rounded-full pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white opacity-5 rounded-full pointer-events-none"></div>

                {
                    !subscribed ? (
                        <>
                            <div className='text-white text-3xl lg:text-[40px] font-bold text-center mb-6 relative z-10'>
                                <TextType
                                    text={"Subscribe to Our Newsletter"}
                                    typingSpeed={100}
                                    pauseDuration={1500}
                                    showCursor={false}
                                    startOnVisible={true}
                                    deletingSpeed={0}
                                    loop={false}
                                />
                            </div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-white/80 text-center text-sm md:text-lg max-w-2xl mb-10 relative z-10"
                            >
                                Stay updated with the latest care tips, news, and exclusive offers from CARE.IO.
                                Join our community of over 5,000+ satisfied families.
                            </motion.p>

                            <motion.form
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="flex flex-col sm:flex-row gap-4 w-full max-w-lg relative z-10"
                                onSubmit={handleSubmit}
                            >
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered w-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-white/50 h-[56px] rounded-2xl"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="px-8 py-4 bg-white text-[#2563eb] font-bold cursor-pointer rounded-[9999px] hover:bg-[#eff6ff] transition-colors whitespace-nowrap h-[56px]"
                                >
                                    Subscribe Now
                                </button>
                            </motion.form>

                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.8 }}
                                className="text-white/60 text-xs mt-6 relative z-10"
                            >
                                We value your privacy. Unsubscribe at any time.
                            </motion.p>
                        </>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, type: "spring" }}
                            className="text-center relative z-10"
                        >
                            <div className="mb-6 flex justify-center">
                                <div className="bg-white rounded-full p-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#2563eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                            <h2 className="text-white text-3xl font-bold mb-4">You're Subscribed!</h2>
                            <p className="text-white/80 text-lg mb-8">
                                Thank you for joining the CARE.IO community. <br />
                                Check your inbox soon for some great caregiving tips!
                            </p>
                            <button
                                onClick={() => setSubscribed(false)}
                                className="text-white/60 text-sm underline hover:text-white transition-colors cursor-pointer"
                            >
                                Subscribe another email
                            </button>
                        </motion.div>
                    )
                }
            </div>
        </div>
    );
};

export default Newsletter;
