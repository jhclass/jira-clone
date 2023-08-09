import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilValue, useRecoilState } from "recoil";
import { mininuteState, minuteStateFunc } from "../Atom";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.bgColor};
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const Board = styled.div`
  background-color: ${(props) => props.theme.boardColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Cards = styled.div`
  width: 100%;
  padding: 10px;
`;
const Card = styled.li`
  background-color: ${(props) => props.theme.cardColor};
  list-style: none;
  margin-bottom: 20px;
  padding: 20px 0;
  width: 100%;
  &:last-child {
    margin-bottom: 0;
  }
`;

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
      <Wrapper>
        <DragDropContext onDragEnd={onDragEnd}>
          <Board>
            <Droppable droppableId="one">
              {(dnd) => (
                <Cards ref={dnd.innerRef} {...dnd.droppableProps}>
                  <Draggable draggableId="dragOne" index={0}>
                    {(dnd) => (
                      <Card
                        ref={dnd.innerRef}
                        {...dnd.draggableProps}
                        {...dnd.dragHandleProps}
                      >
                        hello1
                      </Card>
                    )}
                  </Draggable>
                  <Draggable draggableId="dragTwo" index={1}>
                    {(dnd) => (
                      <Card
                        ref={dnd.innerRef}
                        {...dnd.draggableProps}
                        {...dnd.dragHandleProps}
                      >
                        <span> hello2</span>{" "}
                        {/**드래그의 시작점 (li 전체? || span 에서만?) === dragHandleProps 가 있는 요소 범위 */}
                      </Card>
                    )}
                  </Draggable>
                </Cards>
              )}
            </Droppable>
          </Board>
        </DragDropContext>
      </Wrapper>
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
