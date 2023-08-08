import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { textState } from "./Atom";
import { charCountState, changeToggleboolean, toggleBoolean } from "./Atom";
import styled from "styled-components";
interface ItoggleProps {
  changeBoolean: boolean;
}

const Box = styled.div<ItoggleProps>`
  width: 500px;
  height: 500px;
  background-color: ${(props) => (props.changeBoolean ? "red" : "green")};
`;

const Home = () => {
  const [text, setText] = useRecoilState(textState);
  const count = useRecoilValue(charCountState);
  const [toggleBooleans, setToggleBooleans] = useRecoilState(toggleBoolean);
  const changeBoolean = useRecoilValue(changeToggleboolean);
  const onChange = (e: any) => {
    setText(e.currentTarget.value);
  };
  const changebg = () => {
    setToggleBooleans((res) => !res);
  };
  return (
    <div>
      <h1>home</h1>
      <p>여기가 홈이다</p>
      <div>
        <input
          type="text"
          placeholder="작성"
          value={text}
          onChange={onChange}
        />
      </div>
      <div>
        <span>charactor : Count {count}</span>
      </div>
      <div>
        <button onClick={changebg}>변경해보자</button>
        <Box changeBoolean={toggleBooleans}></Box>
        <span>{changeBoolean}</span>
      </div>
    </div>
  );
};
export default Home;
