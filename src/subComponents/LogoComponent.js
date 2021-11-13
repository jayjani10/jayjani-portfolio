import React from "react";
import styled from "styled-components";
import { darkTheme } from "../components/Themes";

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === 'dark' ? darkTheme.text : darkTheme.body};
  font-family: "Pacifico", cursive;
  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 3;
`;
const name = "Jay";

const LogoComponent = (props) => {
  return <Logo color={props.theme}>{name}</Logo>;
};

export default LogoComponent;
