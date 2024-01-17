import React from 'react'

function List() {
  return (
<>
   <div>
   <h1 className="font-medium text-2xl font-serif mb-1">Todo List</h1>
   {todos.map((todo) => (
      <div
        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
        key={todo.id}
      >
        <div >{todo.text}</div>
       
      </div>
    ))}
   </div>
    </>
  )
}



export default List