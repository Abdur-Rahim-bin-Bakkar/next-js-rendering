import Image from 'next/image';
import React from 'react';

const page = async ({ params }) => {
    const id = await params
    const data = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${id.foodDetails}`).then(res => res.json())
    console.log(data.data)
    const food = data.data
    return (
        <div className='card m-5 p-5 border border-success'>
            <Image src={food.image_link
             } alt='detail image' width={500} height={400} />
            <h1 className='text-xl font-bold'>{food.dish_name}</h1>
            <span className='badge badge-success mt-3 badge-soft'># {food.category}</span>
            <span className='badge badge-success mt-3 badge-soft'> {food.rating}</span>
            <span className='btn btn-success my-3 font-bold text-white'>{food.price}</span>
            <span className='btn btn-info my-3 font-bold text-white'> ADD To Card</span>
        </div>
    );
};

export default page;