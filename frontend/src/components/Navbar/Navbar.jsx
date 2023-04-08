import React from 'react';
import styled from 'styled-components';
import Main from '../../styles/Main';
import Icons from './Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Container = styled.nav`
background-color: transparent;
display:flex;
align-items:center;
padding:20px 30px 0px 30px;
justify-content: space-between;

`

const Logo = styled.span`
    font-size:15px;
    font-weight: 500;
    min-width: 10px;
    width:45px;
    text-transform: uppercase;
    word-wrap: break-word;
`

const Right = styled.div`
    display:flex;
    color: #333;
`

const Search = styled.div`
justify-content:center;
align-items:center;
display:flex;

input{
    display:none;
}
a{
    color:#333;
    margin-left: 40px;
}


`


const Contacts = styled.span`

`


const Navbar = () => {
    return (
        <Container>
            <Logo>Cookery.</Logo>

        <Right>
            <Contacts>
                <Icons />
            </Contacts>
            <Search>
                <input></input>
                <Link><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></Link>
            </Search>
        </Right>
        </Container>
    );
}

export default Navbar;
