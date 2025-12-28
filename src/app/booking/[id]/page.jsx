import { getSingleService } from '@/actions/server/service';
import BookingForm from '@/Components/BookingForm/BookingForm';
import TextType from '@/Components/TextType';
import React from 'react';

const Booking =async ({params}) => {
    const {id}=await params;
    const service=await getSingleService(id);

    return (
        <div className='w-full py-[50px] max-w-[1440px] mb-[100px] mx-auto'>
            <div className='text-black text-3xl lg:text-[40px] font-bold text-center mb-10'>
                <TextType
                    text={"Confirm Booking"}
                    typingSpeed={100}
                    pauseDuration={1500}
                    showCursor={false}
                    startOnVisible={true}
                    deletingSpeed={0}
                    loop={false}
                />
            </div>
            <BookingForm service={service}></BookingForm>
        </div>
    );
};

export default Booking;