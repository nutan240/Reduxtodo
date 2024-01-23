import React from "react";

function Button({ onSubmit, title, color }) {
  return (
    <button
      className={`px-2 ${color} border-2 mr-3 mt-3 rounded hover:shadow-lg focus:outline-none h-8 `}
      onClick={onSubmit}>
      {title}
    </button>
  );
}

export default Button;
