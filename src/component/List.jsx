import React ,{useState} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useDispatch ,useSelector } from "react-redux";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { filterTodo  } from "../redux/todoSlice";

function List({ handleEdit, handleDelete, handleCheckboxChange   }) {
  const dispatch = useDispatch();
  const [sortTodo ,setSortTodo] =useState('all')


  const handleFilterClick = (filterType) => {
    setSortTodo(filterType);
    dispatch(filterTodo(filterType));
  };
  const todos = useSelector((state) => state); 

  return (
    <>
    {todos.length > 0 &&
      <div>
            <h1 className="font-medium text-2xl font-serif mb-1">Todo List</h1>
            <div className="flex gap-4 mb-4">
            <button onClick={() => handleFilterClick('all')}>all</button>
            <button onClick={() => handleFilterClick('complete')}>completed</button>
            <button onClick={() => handleFilterClick('incomplete')}>Incompleted</button>
          </div>

        {todos.map((todo) => (

          <div key={todo.id}>
            <div className="mt-4  items-center  px-4 py-2 border-2 rounded flex justify-between">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleCheckboxChange(todo.id)}
              />

              <div className="text-balance break-words  w-[800px]">
                {todo.text}
              </div>
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
              {todo.completed && <button>completed</button>}
              </div>  
            </div>
          </div>
        ))}
      </div>
     }
    </>
  );
}

export default List;
