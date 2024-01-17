import React from 'react'
import Form from './component/Form'
import List from './component/List'

function App() {
  return (
    <>
    <div className='w-[60%] max-lg:[100%] max-sm:w-[100%] overflow-y-hidden m-auto pb-10'>
      <Form/>
      <List/>
      </div>
    </>
  )
}

export default App