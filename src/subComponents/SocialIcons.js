import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Github } from '../components/AllSvgs';
import { darkTheme } from '../components/Themes';

const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: fixed;
bottom: 0;
left: 2rem;
z-index: 3;

&>*:not(last-child) {
    margin: 0.5rem 0;
}
`

const Line = styled.span`
width: 2px;
height: 8rem;
background-color: ${props => props.color === "dark" ? darkTheme.text : darkTheme.body}
`

const SocialIcons = (props) => {
    const isDark = props.theme === "dark" ? darkTheme.text : darkTheme.body;
    return (
        <Icons>
            <div>
                <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname: "https://github.com/jayjani10"}}>
                    <Github width={30} height={30} fill={isDark}/>
                </NavLink>
            </div>
            <Line color={props.theme} />
        </Icons>
    )
}

export default SocialIcons
