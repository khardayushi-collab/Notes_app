import React from 'react'
import Navbar from './components/Navbar'
import FormContainer from './components/FormContainer'
import TodoList from './components/TodoList'
import TaskContext from "./context/TaskContext"

const App = () => {
  return (
    <>
      <Navbar/>
      <TaskContext>
      <main className='mainBlock'>
        <FormContainer/>
        <TodoList/>
      </main>
      </TaskContext>
    </>
  )
}

export default App