
import React from "react";

function Form({input,setInput,handleSubmit}) {


  return (
    <form
      onSubmit={handleSubmit}
      className="mb-5 overflow-y-hidden mt-20 w-[100%] "
    >
      <input
        className={`border border-slate-300 w-[100%] rounded-md py-3 pl-4 pr-3 focus:outline-none `}
        type="text"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="py-3 px-4 focus:outline-none hover:bg-gray-500 hover:text-white text-color-white border-2 mr-3 rounded hover:shadow-lg mt-4"
      >
        Submit
      </button>
    </form>
  );
}
export default Form;