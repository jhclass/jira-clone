import React from "react";
import styled from "styled-components";
const ShapeCircle = styled.div<CircleProps>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor};
`;

interface CircleProps {
  bgColor?: string;
}
const Circle = ({ bgColor }: CircleProps) => {
  return (
    <>
      <ShapeCircle bgColor={bgColor} />
    </>
  );
};

export default Circle;

// interface shape {
//   name: string;
//   age: number;
// }

// const getUserInfo = (userInfo: shape) => {
//   return `${userInfo.name}님 안녕하세요 ${userInfo.age} 살이 되셨군요!`;
// };

// console.log(getUserInfo({ name: "이진형", age: 24 }));
