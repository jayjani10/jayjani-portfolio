import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Develop } from "./AllSvgs";
import SocialIcons from "../subComponents/SocialIcons";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
      color: ${props => props.theme.body};
      background-color: ${props => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  ${Main}:hover &{
    &>*{
        fill: ${props => props.theme.body};
    }
  }
  &>*:first-child{
    margin-right: 1rem;
}
`;
const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  strong {
    margin-bottom: 1rem;
    test-transformation: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
  ${Main}:hover &{
    color: ${props => props.theme.body};
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
          <LogoComponent />
          <SocialIcons />
          <PowerButton />
        <Main>
          <Title>
            <Develop width={40} height={40} />
            Front End Developer
          </Title>
          <Description>
            I value business or brand for which I am working, thus I enjoy bringing new ideas to life.

          </Description>
          <Description>
            <strong>Skills</strong>
            <ul>
              <li>
                HTML, CSS, JavaScript, ReactJs, Redux, node.js, Firebase,
                Mongodb, Docker, Jenkins
              </li>
            </ul>
          </Description>
          {/* <Description>
                        <strong>Tools</strong>
                        <ul>
                            <li>
                                VScode, 
                            </li>
                        </ul>
                    </Description> */}
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
