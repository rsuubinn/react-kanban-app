import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function App() {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="one">
        {(provided) => (
          <ul ref={provided.innerRef} {...provided.droppableProps}>
            <Draggable draggableId="first" index={0}>
              {(provided) => (
                <li ref={provided.innerRef} {...provided.draggableProps}>
                  <span {...provided.dragHandleProps}>💖</span>
                  one
                </li>
              )}
            </Draggable>
            <Draggable draggableId="second" index={1}>
              {(provided) => (
                <li ref={provided.innerRef} {...provided.draggableProps}>
                  <span {...provided.dragHandleProps}>💖</span>
                  two
                </li>
              )}
            </Draggable>
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default App;
