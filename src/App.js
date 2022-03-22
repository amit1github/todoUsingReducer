import React, {useContext, useReducer} from 'react'
import { Container, Typography } from '@mui/material'

import "./App.css"

import { TodoContext } from "./Context/TodoContext"
import todoReducer from "./Context/reducer"
import TodoForm from './Component/TodoForm'


const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, [])

  return (
    <TodoContext.Provider value={{todos, dispatch}}>
      <Container flexGrow >
        <Typography variant='h4' align='center'>Todo App with Context API</Typography>
        <TodoForm/>
      </Container>
    </TodoContext.Provider>
  )
}

export default App