import React from 'react';
import { useSelector } from 'react-redux';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

function List() {
  const todos = useSelector(state => state);

  return (
    <>
      <div>
        <h1 className="font-medium text-2xl font-serif mb-1">Todo List</h1>
        {todos.map((todo) => (
          <div
            className="mt-4 flex justify-between items-center w-[96%] px-4 py-2 border-2 rounded"
            key={todo.id}
          >
            <div className='text-balance break-words'>{todo.text}</div>
            <div>
            <DeleteForeverIcon/>
            <EditIcon/>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default List;
