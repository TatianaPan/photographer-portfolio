import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import matterhorn from './assets/matterhorn.jpg'
import Header from './components/Header';
import './App.css';

const StyledApp = styled.div`
    background-image: url(${matterhorn});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
`;

const TitleSection = styled.div`
  text-align: center;
  color: whitesmoke;
  display: flex;
  flex-direction: column;
    justify-content: center;
    align-items: center;
   height: 100%;
`;

const StyledText = styled.h2`
  font-family: 'Euphoria Script', cursive;
  /* font-family: 'Montserrat', sans-serif; */
  font-size: 70px;
    font-weight: 400;
    font-style: normal;
    text-transform: none;
    letter-spacing: -.01em;
    line-height: 1em;
    animation: animate 3s;
    @keyframes animate {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }  
    }
    @media (max-width: 500px) {
      font-size: 40px;
    }
`;

const StyledButton = styled.div`
    text-transform: uppercase;
    letter-spacing: 3px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-style: normal;
    text-decoration: none;
    padding: 1em 1.75em;
    background-color: transparent;
    display: inline-block;
    line-height: 1em;
    margin: 10px 0 0;
    color: whitesmoke;
    border: 1px solid whitesmoke;
    cursor: pointer;
    &:hover {
      background-color: rgb(240, 240, 245, 0.2);
      transition: all .5s ease-in-out;
    }
    @media (max-width: 500px) {
      padding: .7em 1.5em;
      line-height: .7em;
    }
`;

function App() {
  return (
    <StyledApp>
      <Header />
       <TitleSection>
         <StyledText>Tatiana Panferova Photography</StyledText>
         <Link style={{ textDecoration: 'none' }} to="/gallery"><StyledButton>Explore</StyledButton></Link>
       </TitleSection>
    </StyledApp>
  );
}

export default App;
