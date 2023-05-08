import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Main from "../styles/Main"
import RecipesPreview from '../components/RecipesPreview/RecipesPreview';



const Home = () => {
    return (
        <Main>    
         <Hero />
         <RecipesPreview />
        </Main>
        
    );
}

export default Home;

