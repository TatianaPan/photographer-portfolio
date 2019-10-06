import React, { Component } from 'react';
import styled from 'styled-components';
import SecondHeader from './SecondHeader';
import img1 from '../assets/photography-1.png';


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
            </div>
        )
    }
}

export default Gallery;
