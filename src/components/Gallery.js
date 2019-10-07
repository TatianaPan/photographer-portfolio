import React, { Component } from 'react';
import styled from 'styled-components';
import SecondHeader from './SecondHeader';
import img1 from '../assets/photography-1.png';
import img2 from '../assets/backlit.jpg';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 0 2em;
     img {
        width: 33%;
        padding: .5em;
    }
`;

const TextContainer = styled.div`
    width: 100%; 
    padding: 2em;
    p {
        width: 60%;
        margin: 0 auto;
        text-align: center;
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
        text-decoration: none;
        color: #1f1f2e;
    }
`;

const ParallaxDiv = styled.div`
    background-image: url(${img2});
    height: 600px;
    position: relative;
    opacity: 0.65;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const TextOnParallax = styled.div`
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    text-align: center;
    color: whitesmoke;
    font-family: 'Montserrat', sans-serif;
    font-size: 120px;
    line-height: 1em;
    text-transform: none;
    letter-spacing: 0px;
    font-weight: 700;
    font-style: normal;
`;



class Gallery extends Component {
    render() {
        return (
            <div>
                <SecondHeader />
                <Container>
                    <img src={img1} alt="photography1" />
                    <img src={img1} alt="photography1" />
                    <img src={img1} alt="photography1" />
                    <img src={img1} alt="photography1" />
                    <img src={img1} alt="photography1" />
                    <img src={img1} alt="photography1" />
                </Container>
                <TextContainer>
                    <p> I love capturing natural emotions and joyful moments. I love capturing natural emotions and joyful moments.
                        I love capturing natural emotions and joyful moments. I love capturing natural emotions and joyful moments.</p>
                </TextContainer>
                <ParallaxDiv>
                    <TextOnParallax>Portraits</TextOnParallax>
                </ParallaxDiv>
                <TextContainer>
                <p> I love capturing natural emotions and joyful moments. I love capturing natural emotions and joyful moments.
                        I love capturing natural emotions and joyful moments. I love capturing natural emotions and joyful moments.</p>
                </TextContainer>
                <Container>
                    <img src={img1} alt="photography1" />
                    <img src={img1} alt="photography1" />
                    <img src={img1} alt="photography1" />
                    <img src={img1} alt="photography1" />
                    <img src={img1} alt="photography1" />
                    <img src={img1} alt="photography1" />
                </Container>
            </div>
        )
    }
}

export default Gallery;
