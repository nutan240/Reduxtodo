import React from "react";
import Button from "./Button";
import Input from "./Input";

function Form({
  input,
  setInput,
  handleSubmit,
  handleUpdate,
  handleCancel,
  isEditing,error
}) {
  return (
    <form className="overflow-y-hidden pt-20 w-[100%]">
     
     <Input 
       width="w-[97%]"
       handleInputChange={(e) => setInput(e.target.value)}
       todoinput={input}
     />
      <div className="
         h-4 ">{input === "" && error && isEditing ? (
          <h6 className="text-red-600 h-3 pb-2 text-sm/[10px] . ">please Enter todo.......</h6>
        ) : null}</div>
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
