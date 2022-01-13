import React from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Posts from './Posts/Posts';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Posts></Posts>
        </div>
    );
};

export default Home;