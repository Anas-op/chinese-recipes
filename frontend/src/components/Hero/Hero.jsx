import React from 'react';
import { Button,Image } from 'react-bootstrap';
import styled from 'styled-components';
import media from '../../styles/media';

const HeroContent = styled.div`
justify-content: flex-start;
padding-top: 20px;
display:flex;
height: auto;
align-items:center;
flex-direction:column;
button{
    align-self: center;
}


img{
    width:700px;
    margin-right:20px;
    z-index:1;
}

${media.tablet`
    padding-top: 100px;
    img{
        width:300px;
    }
`}

`

const RecipesButton = styled(Button)`
    font-size: 20px;
    border-radius: 10px;
    background-color: transparent;
    border: 1px solid #979797;
    color:#979797;
    padding: 15px 20px;
    margin-left: 30px;
    letter-spacing: 0.1rem;
    font-weight: 400;
    transition: 200ms ease-in-out;
    ${media.tablet`
    font-size: 14px; 
    margin-left: 10px;
    padding: 10px 20px;  
    `}

    &:hover{
        background-color:#fff;
        color:black;
        border: 1px solid #fff;
        transition: 200ms ease-in-out;
    }
`


const Banner = styled.span`
    font-size: 150px;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: -120px;
    display: flex;
    text-shadow: 10px 0px 0px rgba(0, 0, 0, 0.1);
    > span:first-child{
        color:#252525;
    }
    > span:last-child{
        color:#D60106;
        opacity:0.7;
    }

    ${media.netbook`
    font-size:110px;
    margin-bottom: -100px;
`}

    ${media.tablet`
        margin-bottom: -40px;
        font-size:50px;
    `}
    

`


const Hero = () => {
    return (
        <HeroContent>
            <Banner><span>Let's</span>&nbsp;<span>Cook</span></Banner>
            <Image src='/images/chinese-food.png' alt='logo'></Image>
            <RecipesButton>RECIPES</RecipesButton>
        </HeroContent>
    );
}

export default Hero;
