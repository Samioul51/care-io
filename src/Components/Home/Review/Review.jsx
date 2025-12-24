import React from 'react';

const Review = ({review}) => {
    const {name,rev}=review;
    return (
        <div className='italic flex flex-col justify-center items-center gap-5 bg-[#2563eb] p-[3rem] border-1 border-solid border-[#333] h-[200px]'>
            <p className='text-white text-justify'>&ldquo;{rev}&rdquo;</p>
            <p className='text-white font-bold'>- {name}</p>
        </div>
    );
};

export default Review;