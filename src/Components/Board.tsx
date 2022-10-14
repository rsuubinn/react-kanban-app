import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DraggbleCard from "./DraggbleCard";
import { useForm } from "react-hook-form";
import { IToDo, toDoState } from "../atoms";
import { useSetRecoilState } from "recoil";

interface IBoard {
  toDos: IToDo[];
  boardId: string;
}
const Wrapper = styled.div`
  background-color: ${(props) => props.theme.boardColor};
  padding-top: 30px;
  border-radius: 5px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
`;

interface IForm {
  toDo: string;
}

const Form = styled.form`
  width: 100%;
`;

interface IArea {
  isDraggingOver: boolean;
  isDraggingFromThisWith: boolean;
}

const Area = styled.div<IArea>`
  background-color: ${(props) =>
    props.isDraggingOver
      ? "#dfe6e9"
      : props.isDraggingFromThisWith
      ? "#b2bec3"
      : "transparent"};
  flex-grow: 1;
  transition: background-color 0.2s ease-in-out;
  padding: 20px;
`;

function Board({ toDos, boardId }: IBoard) {
  const setToDo = useSetRecoilState(toDoState);
  const { register, setValue, handleSubmit } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    const newToDo = {
      id: Date.now(),
      text: toDo,
    };
    setToDo((allBoards) => {
      return {
        ...allBoards,
        [boardId]: [...allBoards[boardId], newToDo],
      };
    });
    setValue("toDo", "");
  };
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", { required: true })}
          type="text"
          placeholder={`할 일을 ${boardId}에 추가하세요.`}
        />
      </Form>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(provided, snapshot) => (
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            isDraggingFromThisWith={Boolean(snapshot.draggingFromThisWith)}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DraggbleCard
                key={toDo.id}
                toDoId={toDo.id}
                toDoText={toDo.text}
                index={index}
              />
            ))}
            {provided.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Board;
