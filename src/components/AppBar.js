import { useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function AppBar() {
  const boards = useSelector((state) => state.board.boards);
  const boardTodosMap = useSelector((state) => state.todo.boardTodosMap);

  const [unfinishedTodo, finishedTodo] = useMemo(() => {
    let unfinishedTodo = 0;
    let finishedTodo = 0;

    Object.values(boardTodosMap).forEach((todos) => {
      todos.forEach((todo) => {
        if (todo.isFinished) {
          finishedTodo++;
        } else {
          unfinishedTodo++;
        }
      });
    });
    return [unfinishedTodo, finishedTodo];
  }, [boardTodosMap]);

  return (
    <Wrapper>
      <span>
        <b>To Do App</b>
      </span>

      <MenuContainer>
        <ItemCountText>
          {`보드 ${boards.length}개 / `}
          {`할 일 (미완료: ${unfinishedTodo}개, 완료 ${finishedTodo}개)`}
        </ItemCountText>
      </MenuContainer>
    </Wrapper>
  );
}

export default AppBar;

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-bottom: 1px solid black;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ItemCountText = styled.span`
  font-size: 1rem;
`;
