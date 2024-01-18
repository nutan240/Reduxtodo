import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { removeTodo,  } from '../todo/todoSlice';
import { handleEdit } from './Form'

function List() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state);

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };


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
              <FontAwesomeIcon
                icon={faEdit}
                className="cursor-pointer mr-2 text-blue-500"
                onClick={() => handleEdit(todo)}
              />
              <FontAwesomeIcon
                icon={faTrash}
                className="cursor-pointer text-red-500"
                onClick={() => handleDelete(todo.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default List;
