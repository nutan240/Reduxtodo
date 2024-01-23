import React from 'react'

function Input({width ,type , handleInputChange ,checked,todoinput}) {
  return (
    <>
      <input
        className={`border border-slate-300 ${width}  rounded-md  py-3  pl-4 focus:outline-none hover:shadow-lg `}
        value={todoinput}
        onChange={handleInputChange}
        placeholder="your task..."
        type={type}
        checked={checked}
      />
    </>
  )
}

export default Input
