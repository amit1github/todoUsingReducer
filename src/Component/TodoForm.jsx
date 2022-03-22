import React from "react";
import { Box, TextField, Paper, InputBase, IconButton } from "@mui/material";

import { v4 } from "uuid";
import { TodoContext } from "../Context/TodoContext";
import { ADD_TODO } from "../Context/action.types";
import { Add, AddCircle } from "@mui/icons-material";

const TodoForm = () => {
  return (
    <Paper
      component="form"
      sx={{
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
        margin: "auto",
        width: 400,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Write Your Notes Here"
        inputProps={{ "aria-label": "write your notes here" }}
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
