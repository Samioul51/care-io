import React from 'react';

const loading = () => {
    return (
        <div className='w-full max-w-[1440px] h-screen flex justify-center items-center'>
            <span className="loading loading-spinner text-info"></span>
        </div>
    );
};

export default loading;