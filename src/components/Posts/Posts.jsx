import React, { use } from 'react';
import PostCard from '../PostCard/PostCard';

const Posts = ({respose}) => {
    const data = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
    const da = use(data)
    // console.log(data)
    return (
        <div className='grid grid-cols-3 gap-3'>
            {
                da.map(da => <PostCard key={da.id} da={da}/>)
            }
        </div>
    );
};

export default Posts;