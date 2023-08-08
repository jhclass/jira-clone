import React, { useState } from "react";
import { Navigation } from "react-router-dom";
import Circle from "./Circle";
import styled, { keyframes } from "styled-components";

const slideOut = keyframes`
  from {
    bottom: 50px;
  }
  to {
    bottom: -500px;
  }
`;
const slideIn = keyframes`
  from {
    bottom: -500px;
  }
  to {
    bottom: 50px;
  }
`;
const PopContainer = styled.div<ActiveProps>`
  width: 300px;
  height: 500px;
  position: fixed;
  right: 0;
  bottom: ${({ active }) => (active ? "50px" : "-500px")};
  animation: ${({ active }) => (active ? slideIn : slideOut)} 0.3s ease-in-out;
  background-color: red;
`;
interface ActiveProps {
  active: boolean;
}
function Main() {
  const [tur, setTur] = useState(0);
  const [value, setValue] = useState("");
  const [isActive, setIsActive] = useState(false);

  const plusNumber = () => {
    setTur((res) => res + 1);
  };
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    setValue(e.currentTarget.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("완료");
  };
  const togglePopContainer = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <>
      <h3>1.Props 와 typescript 에 관하여 알아보자</h3>
      <Circle bgColor="tomato" />
      <Circle bgColor="black" />
      <Circle bgColor="teal" />
      <h3>2.useState 에 관하여 알아보자</h3>
      <div>{tur}</div>

      <button onClick={plusNumber}>+</button>
      <h3>3.Form 에 관하여 알아보자</h3>
      <form onSubmit={onSubmit}>
        <input
          placeholder="hello"
          onChange={onChange}
          type="text"
          value={value}
          name="inputName"
        />
      </form>
      <h3>4.슬라이딩 팝업에 관해 알아보자</h3>
      <PopContainer active={isActive}>asdfasdfasdf</PopContainer>
      <button onClick={togglePopContainer}>Play</button>
      <h3>5.Step2로 넘어가기</h3>
    </>
  );
}

export default Main;
