import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DraggbleCard from "./DraggbleCard";

interface IBoard {
  toDos: string[];
  boardId: string;
}
const Wrapper = styled.div`
  background-color: ${(props) => props.theme.boardColor};
  padding: 20px 10px;
  padding-top: 30px;
  border-radius: 5px;
  min-height: 200px;
`;

const Title = styled.h2`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
`;

function Board({ toDos, boardId }: IBoard) {
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {toDos.map((toDo, index) => (
              <DraggbleCard key={toDo} toDo={toDo} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Board;
