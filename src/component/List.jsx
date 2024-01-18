import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

function List({ handleEdit, handleDelete, todos, handleCheckboxChange }) {
  return (
    <>
      <div>
            <h1 className="font-medium text-2xl font-serif mb-1">Todo List</h1>

        {todos.map((todo) => (

          <div
            className=""
            key={todo.id}
          >
            <div className="mt-4  items-center w-[96%] px-4 py-2 border-2 rounded flex justify-between">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleCheckboxChange(todo.id)}
              />

              <div className="text-balance break-words  w-[1200px]">
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
              </div>
              {todo.completed && <button>completed</button>}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default List;
