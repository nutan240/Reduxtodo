import React from "react";
import Button from "./Button";

function Form({
  input,
  setInput,
  handleSubmit,
  handleUpdate,
  handleCancel,
  isEditing,
}) {
  return (
    <form onSubmit={handleSubmit} className="overflow-y-hidden pt-20 w-[100%]">
      <input
        className={`border border-slate-300 w-[100%] rounded-md py-3 pl-4 mb-3 pr-3 focus:outline-none`}
        type="text"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {isEditing ? (
        <>
          <Button onSubmit={() => handleUpdate()} title={"Update"} />
          <Button onSubmit={() => handleCancel()} title={"Cancel"} />
        </>
      ) : (
          <Button onSubmit={handleSubmit} title={"Submit"} />
      )}
    </form>
  );
}

export default Form;
