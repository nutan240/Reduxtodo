import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../todo/todoSlice";

function Form() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (input.trim() !== "") {
      dispatch(addTodo({ text: input }));
      setInput("");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mb-5 overflow-y-hidden mt-20 w-[100%] whitespace-nowrap"
    >
      <input
        className={`border border-slate-300 w-[86%] rounded-md py-3 pl-4 pr-3 focus:outline-none `}
        type="text"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="py-3 px-4 focus:outline-none hover:bg-gray-500 hover:text-white text-color-white border-2 mr-3 rounded hover:shadow-lg"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
