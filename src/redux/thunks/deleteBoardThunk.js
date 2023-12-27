import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteBoard, selectBoard } from "../slices/boardSlice";
import { deleteBoardTodos } from "../slices/todoSlice";

const deleteBoardThunk = createAsyncThunk(
  "board/deleteBoard",
  async (boardId, thunkAPI) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const rootState = thunkAPI.getState();
        const { selectedBoardId } = rootState.board;

        if (selectedBoardId === Number(boardId)) {
          thunkAPI.dispatch(selectBoard(null));
        }

        thunkAPI.dispatch(deleteBoard(boardId));
        thunkAPI.dispatch(deleteBoardTodos(boardId));

        resolve();
      }, 3000);
    });
  }
);

export default deleteBoardThunk;
