import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const FixedHeader = styled.div`
  position: fixed;
  top: 0;
  right: 20px;
`;
const Header = () => {
  return (
    <FixedHeader>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/About"}>About</Link>
        </li>
        <li>
          <Link to={"/screen/Info"}>Info</Link>
        </li>
        <li>
          <Link to={"/todo/todolist"}>Todo</Link>
        </li>
      </ul>
    </FixedHeader>
  );
};
export default Header;
