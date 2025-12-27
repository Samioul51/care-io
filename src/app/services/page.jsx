"use client";

import ServiceCard from '@/Components/ServiceCard/ServiceCard';
import TextType from '@/Components/TextType';
import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services,setServices]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        const fetchServices=async ()=>{
            try{
                const res=await fetch("/api/services");

                if(!res.ok)
                    throw new Error("Failed to fetch services");

                const data=await res.json();
                setServices(data);
            }catch(error){

            }finally{
                setLoading(false);
            }
        };
        fetchServices();
    },[])
    
    // console.log(services);

    return (
        <div className='w-full max-w-[1440px] mb-[100px] mx-auto py-[50px]'>
            <div className='text-black text-3xl lg:text-[40px] font-bold text-center mb-10'>
                <TextType
                    text={"Our Services"}
                    typingSpeed={100}
                    pauseDuration={1500}
                    showCursor={false}
                    startOnVisible={true}
                    deletingSpeed={0}
                    loop={false}
                />
            </div>
            <div className='w-full max-w-full gap-10 grid grid-cols-1 lg:grid-cols-3'>
                {
                    services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;