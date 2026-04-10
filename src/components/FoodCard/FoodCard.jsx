import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FoodCard = ({ food }) => {
    console.log(food.image_link)
    return (
        <div className="card bg-base-100 shadow-sm border border-success m-3 -4">
            <figure className='p-10'>
                {/* <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" /> */}
                    <Image src={food.image_link} alt='food image' width={400} height={300} className='w-full object-cover'></Image>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{food.dish_name}</h2>
                <p>{food.category}</p>
                <div className="card-actions justify-end">
                    <Link href={`/foods/${food.id}`} className="btn btn-primary">Show Details </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;