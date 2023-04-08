import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Icons = () => {

    const Icons = styled.div`
    display:flex;
    a{
        padding: 6px;
        color: #333;
    }
    `


    return (
        <Icons>
            <Link><FontAwesomeIcon icon="fa-brands fa-facebook" /></Link>
            <Link><FontAwesomeIcon icon="fa-brands fa-twitter" /></Link>
            <Link><FontAwesomeIcon icon="fa-brands fa-instagram" /></Link>
        </Icons>
    );
}

export default Icons;
