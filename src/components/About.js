import React, { Component } from 'react';
import SecondHeader from './SecondHeader';
import Headroom from 'react-headroom';
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
    max-width: 50%;
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
    #description {
        color: #a6a6a6;
        max-width: 100%;
        line-height: 1.8em;
        font-size: 18px;
    }
`;

const AboutMe = styled.div`
    padding: 2em;
    display: flex;
    /* max-width: 1200px; */
    margin: 0 auto;
    @media (max-width: 550px) {
        flex-direction: column;
    }
    div {
        max-width: 50%;
        @media (max-width: 550px) {
                max-width: 100%;
            }
        img {
            max-width: 100%;
            height: auto;
            
        }
    }
    
`;

class About extends Component {
    render() {
        return (
            <div>
                <Headroom>
                    <SecondHeader />
                </Headroom>
                <TextContainer>
                    <p>Passionate about photography, hiking and web development.</p>
                </TextContainer>  
                <AboutMe>
                    <div><img src={tanya} alt='photographer'/></div>
                    <AboutText>
                        <h2>Hi, I'm Tatiana. Nice to meet you!</h2>
                        <div id='description'>
                            <p>I am Zurich-based photographer, specializing in family, kids and woman portrait's photoshoots. 
                            Love to capture natural moments of life and true emotions. I will catch the sweetest memories for your family album.</p>
                             
                            <p></p>
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
