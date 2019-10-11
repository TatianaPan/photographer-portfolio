import React, { Component } from 'react';
import SecondHeader from './SecondHeader';
import styled from 'styled-components';
import tanya from '../assets/Tatiana.jpg';
import Footer from './Footer';


const TextContainer = styled.div`
    width: 100%; 
    padding: 2em;
    p {
        width: 40%;
        margin-top: 1em;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 1em;
        line-height: 1.5em;
        text-align: center;
        font-family: 'Montserrat', sans-serif;
        font-size: 30px;
        font-weight: 600;
        text-decoration: none;
        color: #333;
        @media(max-width: 550px) {
            font-size: 20px;
            width: 60%;
        }
    }
`; 

const AboutText = styled.div`
    padding-left: 2em;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    text-decoration: none;
    color: #1f1f2e;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media(max-width: 550px) {
        padding: 0;
    }
    h2 {
        width: 120%;
        font-weight: 600;
        margin-left: -20%;
        background-color: #f0f0f5;
        padding: 1em;
        @media(max-width: 550px) {
            width: 100%;
            margin-left: 0;
            text-align: center;
            font-size: 18px;
        }
    }
    div {
        color: #a6a6a6;
        line-height: 1.8em;
        font-size: 18px;
    }
`;

const AboutMe = styled.div`
    padding: 2em;
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    @media (max-width: 550px) {
        flex-direction: column;
    }
    img {
        width: 50%;
        @media (max-width: 550px) {
            width: 100%;
        }
    }
`;

class About extends Component {
    render() {
        return (
            <div>
                <SecondHeader />
                <TextContainer>
                    <p>Passionate about photography, hiking and web debelopment.</p>
                </TextContainer>  
                <AboutMe>
                    <img src={tanya} alt='photographer'/>
                    <AboutText>
                        <h2>Hi, I'm Tatiana. Nice to meet you!</h2>
                        <div>
                            <p>I am Zurich-based photographer, specializing in family, kids and woman portrait's photoshoots. 
                            Love to capture true moments of life. I will catch the sweetest memories for your family photoalbum.</p>
                            I am Zurich-based photographer, specializing in family, kids and woman portrait's photoshoots. 
                            <p>Love to capture true moments of life. I will catch the sweetest memories for your family photoalbum.</p>
                            <p>I have recently switched to IT and yes, this web page I have made by myself ;)</p>
                        </div>
                    </AboutText>
                </AboutMe>          
                <Footer />
            </div>
        )
    }
}

export default About;
