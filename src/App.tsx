import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function App() {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="one">
        {() => (
          <ul>
            <Draggable draggableId="first" index={0}>
              {() => <li>one</li>}
            </Draggable>
            <Draggable draggableId="second" index={1}>
              {() => <li>two</li>}
            </Draggable>
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default App;
