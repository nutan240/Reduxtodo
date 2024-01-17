import React ,{useState} from 'react'
import{useDispatch} from 'react-redux'
import { addTodo } from '../todo/todoSlice'
function Form() {
    const [input, setInput] = useState('')

    const dispatch = useDispatch()
 const addTodoHandler=(e)=>{
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
 }
let width;
  return (
    <form onSubmit={addTodoHandler}  className="mb-5 pl-4 overflow-y-hidden mt-20 mr-10 whitespace-nowrap">
    <input
    className={`border border-slate-300 ${width} w-[70%] rounded-md  py-3  pl-4 focus:outline-none `}
      type="text"
      placeholder="Enter a Todo..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    <button
      type="submit"
      className=" py-3  px-4 focus:outline-none 
      hover:bg-gray-500  hover:text-white text-color-white  border-2 mr-3  rounded hover:shadow-lg "
    >
      Add Todo
    </button>
  </form>
  )
}

export default Form