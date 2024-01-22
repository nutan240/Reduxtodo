import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { selectVisibleTodos, setFilter } from "../redux/todoSlice";
import Button from "./Button";

const List = ({
  handleEdit,
  handleDelete,
  handleCheckboxChange,
  editingId,
}) => {
  const dispatch = useDispatch();
  const visibleTodos = useSelector(selectVisibleTodos);

  const alltodos = useSelector(state=>state.todo.todos);
  console.log(alltodos,'dfghjkl');

  const handleFilterClick = (filter) => {
    dispatch(setFilter(filter));
    console.log("Filter state after dispatch:", filter);
  };

  return (
    <div>
      {alltodos.length > 0 && (
        <div>
          <h1 className="font-medium text-2xl font-serif mb-1">Todo List</h1>
          <div className="flex gap-4 mb-4">
            <Button onSubmit={() => handleFilterClick("all")} title={"all"} />
            <Button
              onSubmit={() => handleFilterClick("complete")}
              title={"complete"}
            />
            <Button
              onSubmit={() => handleFilterClick("incomplete")}
              title={"incomplete"}
            />
          </div>
        </div>
      )}

      {visibleTodos.length > 0 ? (
        visibleTodos.map((todo) => (
          <div key={todo.id}>
            <div
              className={`border ${
                editingId !== null && todo.id === editingId
                  ? "border-blue-300 border-4"
                  : "border-blue-300"
              }
                    rounded-md pl-2 pr-4 py-1 text-balance break-words mb-2 mt-1  flex gap-4`}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleCheckboxChange(todo.id)}
              />

              <div className="text-balance  truncate break-all ">
                {todo.text}
              </div>
              <div className="flex items-center gap-2 float-right">
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
                <div>
                  {todo.completed && (
                    <button className="border-2 bg-green-200 inline-block whitespace-nowrap rounded-full bg-success-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-success-700">
                      completed
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p></p>
      )}
    </div>
    
  );
};

export default List;
