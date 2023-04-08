import React from 'react';
import { Button,Image } from 'react-bootstrap';
import styled from 'styled-components';

const HeroContent = styled.div`
justify-content:center;
display:flex;
height:100vh;
align-items:center;
flex-direction:column;
button{
    align-self:center;
}
`


const Hero = () => {
    return (
        <HeroContent>

            <Image src='/images/chinese-food.png' alt='logo'></Image>
            <Button>RECIPES</Button>
        
        </HeroContent>
    );
}

export default Hero;
