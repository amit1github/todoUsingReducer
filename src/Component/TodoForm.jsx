import React, {useContext, useState} from "react";
import { Box, TextField, Paper, InputBase, IconButton } from "@mui/material";

import { v4 } from "uuid";
import { TodoContext } from "../Context/TodoContext";
import { ADD_TODO } from "../Context/action.types";
import { AddCircle } from "@mui/icons-material";

const TodoForm = () => {

  const [ todoString, setTodoString ] = useState("")
  const { dispatch } = useContext(TodoContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return alert("Please enter a todo")
    }

    const todo = {
      todoString,
      id: v4(),
    }

    dispatch({
      type: ADD_TODO,
      payload: todo,
    })

    setTodoString("")
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
        margin: "auto",
        width: 400,
        marginTop: "40px"
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Write Your Notes Here"
        inputProps={{ "aria-label": "write your notes here" }}
        value={todoString}
        onChange={e => setTodoString(e.target.value)}
      />
      <IconButton

        type="submit"
        sx={{ p: "10px" }}
        aria-label="submit"
        color="primary"
      >
        <AddCircle fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default TodoForm;
