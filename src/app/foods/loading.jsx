import React from 'react';

const loading = () => {
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <h1 className='text-5xl'>Loading</h1>
            <span className="loading loading-bars loading-xl"></span>
        </div>
    );
};

export default loading;