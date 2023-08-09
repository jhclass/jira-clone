import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilValue, useRecoilState } from "recoil";
import { mininuteState, minuteStateFunc } from "../Atom";
import { DragDropContext } from "react-beautiful-dnd";
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
          <span>he</span>
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
