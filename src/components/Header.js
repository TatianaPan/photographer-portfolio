import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledHeader = styled.div`
    display: flex;
    width: 100%;
    background-color: rgb(240, 240, 245, 0.2);
    padding: .5rem 1rem;
`;

const Nav = styled.ul`
    float: left;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    color: whitesmoke;
    margin: 0;
`;

const NavItem = styled.li`
    list-style: none;
    padding: 1em; 
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    color: whitesmoke;
    :hover {
        color: #d1d1e0; 
        transition: all .5s ease-in-out;
    }
`;

class Header extends Component {
    render() {
        return (
            <StyledHeader>
                <Nav>
                    <Link style={{ textDecoration: 'none' }} to="/"><NavItem>Home</NavItem></Link>
                    <Link style={{ textDecoration: 'none' }} to="/gallery"><NavItem>Gallery</NavItem></Link>
                    <Link style={{ textDecoration: 'none' }} to="about"><NavItem>About</NavItem></Link>
                    <Link style={{ textDecoration: 'none' }} to="/contact"><NavItem>Contact</NavItem></Link>
                </Nav>
            </StyledHeader>
        )
    }
}

export default Header;
