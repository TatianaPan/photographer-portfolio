import React, { Component } from 'react';
import styled from 'styled-components';
import SecondHeader from './SecondHeader';
import portrait1 from '../assets/portraits/p1.jpg';
import portrait2 from '../assets/portraits/p2.jpg';
import portrait3 from '../assets/portraits/p3.jpg';
import portrait4 from '../assets/portraits/p4.jpg';
import portrait5 from '../assets/portraits/p5.jpg';
import portrait6 from '../assets/portraits/p6.jpg';
import parallax1 from '../assets/portraits/portrait-4.jpg';
import parallax2 from '../assets/family/parallax2.jpg';
import family1 from '../assets/family/f1.jpg';
import family2 from '../assets/family/f2.jpg';
import family3 from '../assets/family/f3.jpg';
import family4 from '../assets/family/f4.jpg';
import family5 from '../assets/family/f5.jpg';
import family6 from '../assets/family/f6.jpg';
import parallax3 from '../assets/children/parallax3.jpg';
import child1 from '../assets/children/ch1.jpg';
import child2 from '../assets/children/ch2.jpg';
import child3 from '../assets/children/ch3.jpg';
import child4 from '../assets/children/ch4.jpg';
import child5 from '../assets/children/ch5.jpg';
import child6 from '../assets/children/ch6.jpg';
import parallax4 from '../assets/landscape/parallax4.jpg'
import Footer from './Footer';
import land1 from '../assets/landscape/land1.jpg';
import land2 from '../assets/landscape/land2.jpg';
import land3 from '../assets/landscape/land3.jpg';
import land4 from '../assets/landscape/land4.jpg';
import land5 from '../assets/landscape/land5.jpg';
import land6 from '../assets/landscape/land6.jpg';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 3em;
    max-width: 1200px;
    margin: 0 auto;
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
        margin-top: 1em;
        margin-left: auto;
        margin-right: auto;
        /* margin-bottom: 1em; */
        line-height: 1.5em;
        text-align: center;
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
        font-weight: 600;
        text-decoration: none;
        color: #1f1f2e;
    }
`;

const ParallaxDiv = styled.div`
    background-image: url(${parallax1});
    height: 600px;
    position: relative;
    opacity: 0.65;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .family {
        background-image: url(${parallax2});
    }
`;

const ParallaxDiv2 = styled.div`
    background-image: url(${parallax2});
    height: 600px;
    position: relative;
    opacity: 0.65;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;
const ParallaxDiv3 = styled.div`
    background-image: url(${parallax3});
    height: 600px;
    position: relative;
    opacity: 0.65;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const ParallaxDiv4 = styled.div`
    background-image: url(${parallax4});
    height: 600px;
    position: relative;
    opacity: 0.65;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .family {
        background-image: url(${parallax2});
    }
`;

const TextOnParallax = styled.div`
    position: absolute;
    left: 0;
    top: 40%;
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
               
                <ParallaxDiv>
                    <TextOnParallax>Portraits</TextOnParallax>
                </ParallaxDiv>
                <Container>
                    <img src={portrait1} alt="photography1" />
                    <img src={portrait2} alt="photography1" />
                    <img src={portrait3} alt="photography1" />
                    <img src={portrait4} alt="photography1" />
                    <img src={portrait5} alt="photography1" />
                    <img src={portrait6} alt="photography1" />
                </Container>
                <TextContainer>
                    <p>I do lifestyle portraits, family and children photo shoots. I also take pictures of events. 
                        As a hobby, I do lanscape photography</p>
                </TextContainer>
                <ParallaxDiv2 className='family'>
                    <TextOnParallax>Family</TextOnParallax>
                </ParallaxDiv2>
                <TextContainer>
                <p> I love capturing natural emotions and joyful moments. </p>
                </TextContainer>
                <Container>
                <img src={family1} alt="photography1" />
                    <img src={family2} alt="photography1" />
                    <img src={family3} alt="photography1" />
                    <img src={family4} alt="photography1" />
                    <img src={family5} alt="photography1" />
                    <img src={family6} alt="photography1" />
                </Container>
                <TextContainer>
                <p>  I will catch the sweetest memories for your family album.</p>
                </TextContainer>
                <ParallaxDiv3>
                    <TextOnParallax>Children</TextOnParallax>
                </ParallaxDiv3>
                <Container>
                    <img src={child1} alt="photography1" />
                    <img src={child2} alt="photography1" />
                    <img src={child3} alt="photography1" />
                    <img src={child4} alt="photography1" />
                    <img src={child5} alt="photography1" />
                    <img src={child6} alt="photography1" />
                </Container>
                <TextContainer>
                <p> </p>
                </TextContainer>
                <ParallaxDiv4>
                    <TextOnParallax>Landscape</TextOnParallax>
                </ParallaxDiv4>
                <Container>
                    <img src={land1} alt="photography1" />
                    <img src={land2} alt="photography1" />
                    <img src={land3} alt="photography1" />
                    <img src={land4} alt="photography1" />
                    <img src={land5} alt="photography1" />
                    <img src={land6} alt="photography1" />
                </Container>
               <Footer />
            </div>
        )
    }
}

export default Gallery;
