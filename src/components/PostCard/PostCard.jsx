import React from 'react';

const PostCard = ({da}) => {
    console.log(da)
    return (
        <div className='card border m-3 p-3 border-success '>
            <h1>{da.title}</h1>
            {/* <p>{da.body}</p> */}
        </div>
    );
};

export default PostCard;