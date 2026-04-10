import React from 'react';

const TodoCard = ({todo}) => {
    // console.log(todo)
    return (
        <div className='card flex-row gap-2 items-center'>
            <span>
                {todo.completed? <span className='text-success'>done</span> : <span className='text-error'>Pending</span>}
            </span>
            <h1>{todo.title}</h1>
        </div>
    );
};

export default TodoCard;