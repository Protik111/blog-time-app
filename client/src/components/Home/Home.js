import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Posts from './Posts/Posts';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Posts></Posts>
            <Footer></Footer>
        </div>
    );
};

export default Home;