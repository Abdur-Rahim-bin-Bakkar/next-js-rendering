import TodoCard from '@/components/TodoCard/TodoCard';
import React from 'react';

const TodosPage =async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = await res.json()
    console.log(data)
    return (
        <div>
            <h1>hi i am from todos page</h1>
            {
                data.map(da => <TodoCard key={da.id} todo={da}/>)
            }
        </div>
    );
};

export default TodosPage;