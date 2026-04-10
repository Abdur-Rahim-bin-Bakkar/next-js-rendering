import Posts from '@/components/Posts/Posts';
import React, { Suspense } from 'react';
const respose =()=>{
    return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
} 

const PostPage = () => {
    return (
        <div>
            <h1>thsi si poast page</h1>
            <Suspense>
                <Posts respose={respose()}/>
            </Suspense>
        </div>
    );
};

export default PostPage;