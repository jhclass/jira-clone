import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilValue, useRecoilState } from "recoil";
import { mininuteState, minuteStateFunc, todoState } from "../Atom";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { isIPv4 } from "net";
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

const toDos = ["a", "b", "c", "d", "e"];

const TodoList = () => {
  const [minute, setMinute] = useRecoilState(mininuteState);
  const [hour, setHour] = useRecoilState(minuteStateFunc);
  const [todos, setTodos] = useRecoilState(todoState);
  const onChangeMinute = (e: React.FormEvent<HTMLInputElement>) => {
    setMinute(+e.currentTarget.value);
  };
  const onChangeHour = (e: React.FormEvent<HTMLInputElement>) => {
    setHour(+e.currentTarget.value);
  };
  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return;
    setTodos((oldTodos) => {
      const copy = [...oldTodos];
      const newItem = copy.splice(source.index, 1);
      copy.splice(destination?.index, 0, String(newItem));
      return copy;
    });
  };
  return (
    <>
      <Wrapper>
        <DragDropContext onDragEnd={onDragEnd}>
          <Board>
            <Droppable droppableId="one">
              {(dnd) => (
                <Cards ref={dnd.innerRef} {...dnd.droppableProps}>
                  {todos.map((item, index) => (
                    <Draggable
                      draggableId={"one" + index}
                      index={index}
                      key={index}
                    >
                      {(dnd) => (
                        <Card
                          ref={dnd.innerRef}
                          {...dnd.draggableProps}
                          {...dnd.dragHandleProps}
                        >
                          {item}
                        </Card>
                      )}
                    </Draggable>
                  ))}
                  {dnd.placeholder}
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
