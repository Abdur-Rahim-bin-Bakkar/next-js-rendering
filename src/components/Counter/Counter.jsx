'use client'
import React, { useState } from 'react';


const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="border m-3 p-5 card">
            <h1 className='text-3xl'>total count is: {count} </h1>
            <button className='btn btn-success' onClick={()=> setCount(count+1)}>Click me</button>
        </div>
    );
};

export default Counter;