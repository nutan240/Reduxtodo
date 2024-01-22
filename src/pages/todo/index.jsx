import React, { useState } from "react";
import Form from "../../component/Form";
import List from "../../component/List";
import { useDispatch } from "react-redux";
import {
  addTodo,
  removeTodo,
  editTodo,
  handleCheck,
} from "../../redux/todoSlice";

function TodoApp() {
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState(null);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim() !== "") {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  const handleEdit = (todo) => {
    setInput(todo.text);
    setEditingId(todo.id);
    console.log(todo, "sedrftgyhujioklp;");
    console.log(setInput, "wesrdtfyguhijokl");
  };

  const handleCheckboxChange = (id) => {
    dispatch(handleCheck(id));
  };

  const handleUpdate = () => {
    if (editingId !== null) {
      dispatch(editTodo({ id: editingId, newText: input }));
      setEditingId(null);
      setInput("");
    }
  };
  const handleCancel = () => {
    setInput("");
    setEditingId(null);
  };

  return (
    <div className="w-[70%] m-auto">
      <Form
        setInput={setInput}
        input={input}
        handleSubmit={handleSubmit}
        handleUpdate={handleUpdate}
        handleCancel={handleCancel}
        isEditing={editingId !== null}
      />
      <List
       editingId={editingId}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleCheckboxChange={handleCheckboxChange}
      />
    </div>
  );
}

export default TodoApp;
