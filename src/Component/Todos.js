import React, { useContext } from "react";
import { IconButton, List, ListItem, ListItemText, Paper } from "@mui/material";
import { Delete, DoneAll } from "@mui/icons-material";

import { TodoContext } from "../Context/TodoContext";
import { REMOVE_TODO } from "../Context/action.types";

const Todos = () => {
  const { todos, dispatch } = useContext(TodoContext);

  return (
    <Paper sx={{ width: 400, margin: "auto" }}>
      <List
        sx={{
          width: 400,
          maxWidth: 360,
          bgcolor: "background.paper",
          margin: "auto",
          marginTop: "20px",
          padding: "0",
        }}
      >
        {todos.map((todo) => (
          <ListItem key={todo.id} disableGutters>
            <ListItemText primary={todo.todoString} />
            <span
              onClick={() => {
                dispatch({
                  type: REMOVE_TODO,
                  payload: todo.id,
                });
              }}
              sx={{ display: "flex", alignItems: "flex-end" }}
            >
              <IconButton>
                <DoneAll />
              </IconButton>
            </span>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Todos;
