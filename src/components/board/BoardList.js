import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { selectBoard, deleteBoard } from "../../redux/slices/boardSlice";
import BoardItem from "./BoardItem";
import deleteBoardThunk from "../../redux/thunks/deleteBoardThunk";

function BoardList(props) {
  const boards = useSelector((state) => state.board.boards);
  const selectedBoardId = useSelector((state) => state.board.selectedBoardId);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      {boards.map((board, index) => {
        const isSelected = board.id === selectedBoardId;
        return (
          <BoardItem
            key={index}
            board={board}
            isSelected={isSelected}
            onSelect={() => {
              dispatch(selectBoard(board.id));
            }}
            onDelete={() => {
              dispatch(deleteBoardThunk(board.id));
            }}
          />
        );
      })}
    </Wrapper>
  );
}

export default BoardList;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
