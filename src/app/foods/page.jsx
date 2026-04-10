import FoodCard from '@/components/FoodCard/FoodCard';
import React, { use } from 'react';

const data = fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods').then(res => res.json())
const FootsPage = () => {
    const resData = use(data).data
    console.log(resData)
    return (
        <div>
            <h1 className='text-3xl text-success m-3'>this is foods page {resData.length} </h1>
            <div className="grid md:grid-cols-3 gap-3">
                {
                    resData.map(food => <FoodCard key={food.id} food={food} />)
                }
            </div>
        </div>
    );
};

export default FootsPage;