import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilValue, useRecoilState } from "recoil";
import { mininuteState, minuteStateFunc } from "../Atom";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
const TodoList = () => {
  const [minute, setMinute] = useRecoilState(mininuteState);
  const [hour, setHour] = useRecoilState(minuteStateFunc);
  const onChangeMinute = (e: React.FormEvent<HTMLInputElement>) => {
    setMinute(+e.currentTarget.value);
  };
  const onChangeHour = (e: React.FormEvent<HTMLInputElement>) => {
    setHour(+e.currentTarget.value);
  };
  const onDragEnd = () => {};
  return (
    <>
      <div>
        <DragDropContext onDragEnd={onDragEnd}>
          <div>
            <Droppable droppableId="one">
              {(dnd) => (
                <ul ref={dnd.innerRef} {...dnd.droppableProps}>
                  <Draggable draggableId="dragOne" index={0}>
                    {(dnd) => (
                      <li
                        ref={dnd.innerRef}
                        {...dnd.draggableProps}
                        {...dnd.dragHandleProps}
                      >
                        hello1
                      </li>
                    )}
                  </Draggable>
                  <Draggable draggableId="dragTwo" index={1}>
                    {(dnd) => (
                      <li ref={dnd.innerRef} {...dnd.draggableProps}>
                        <span {...dnd.dragHandleProps}> hello2</span>{" "}
                        {/**드래그의 시작점 (li 전체? || span 에서만?) === dragHandleProps 가 있는 요소 범위 */}
                      </li>
                    )}
                  </Draggable>
                </ul>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </div>
      <input
        type="text"
        placeholder="분을 입력하세요"
        value={minute}
        onChange={onChangeMinute}
      />
      <input
        type="text"
        placeholder="시간을 입력하세요"
        value={hour}
        onChange={onChangeHour}
      />
    </>
  );
};

export default TodoList;
