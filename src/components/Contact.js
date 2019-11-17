import React, { Component } from 'react';
import SecondHeader from './SecondHeader';
import styled from 'styled-components';
import Footer from './Footer';


const StyledContactPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    height: 100vh;
`;

const Container = styled.div`
    
    padding: 2em;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    height: 100%;
    h1 {
        margin-bottom: 2em;
        margin-top: 2em;
        font-weight: 600;
        padding: 1em;
        width: 60%;
        margin-left: auto;
        margin-right: auto;
        @media(max-width: 550px) {
            margin-bottom: 1em;
            margin-top: 0;
            padding-top: 0;
        }   
    }
    
`;

const TextContainer = styled.div`
    p {
        color: #a6a6a6;
    }
`;

class Contact extends Component {
    render() {
        return (
            <StyledContactPage>
                
                    <SecondHeader />

                <Container>
                    <h1>Get in touch</h1>
                    <TextContainer>
                        <p>Thank you for visiting my website!</p>
                        <p>I'm looking forward to meeting you and working together.</p>
                        <p>Please drop me a line via email, sms or simply call me.</p>

                        <p><a style={{ color: '#a6a6a6' }} target="_blank" rel='noopener noreferrer' href="mailto:tatiana.panferova@gmail.com">tatiana.panferova@gmail.com</a></p>
                        <p>+41 78 936 56 27</p>
                        <p>I speak English, Russian and German.</p>
                    </TextContainer>
                </Container>
                <Footer />
            </StyledContactPage>
        )
    }
}

export default Contact;
