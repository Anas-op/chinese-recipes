import React from 'react';
import styled from 'styled-components';
import background from "/images/background.jpg"

const RecipesPreview = () => {

    const PreviewContent = styled.div`
    height: 100vh;
    width: 100%;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: inset 0px 0px 60px 30px rgba(0,0,0,1);
    
    `



    return (
        <PreviewContent>
           
        </PreviewContent>
    );
}

export default RecipesPreview;
