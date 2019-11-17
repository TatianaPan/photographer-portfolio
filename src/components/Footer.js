import React, { Component } from 'react';
import styled from 'styled-components';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';

const StyledFooter = styled.div`
    padding: 40px 0 10px 0;
    width: 100%;
    margin-top: 2em;
    bottom: 0;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    :before {
        content: "";
        position: absolute;
        width: 18px;
        height: 2px;
        background: #000;
        left: 50%;
        margin-left: -9px;
        margin-top: -40px;
    }
    .social-icons {
        margin: 0 auto;
        max-width: 1000px;
        img {
            opacity: 0.7;
            margin: 0 0.4em;
        }
    }
    #copyright {
        font-size: 10px;
        margin-top: 10px;
    }
`;

class Footer extends Component {
    render() {
        return (
            <StyledFooter>
                <div className='social-icons'>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tacia_panferova/"><img height='30px' src={instagram} alt='instagram-logo'/></a>
                    <a target="_blank"rel="noopener noreferrer" href="https://www.linkedin.com/in/tatiana-panferova/" ><img height='30px' src={linkedin} alt='linkedin-logo'/></a>
                </div>
                <div id='copyright'>© 2019 Tatiana Panferova.  All rights reserved. </div>
            </StyledFooter>
        )
    }
}

export default Footer;
