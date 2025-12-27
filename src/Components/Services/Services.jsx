import { getServices } from '@/actions/server/service';
import ServiceCard from '@/Components/ServiceCard/ServiceCard';
import TextType from '@/Components/TextType';
import React from 'react';

const Services =async () => {
    const services=await getServices();
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
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;