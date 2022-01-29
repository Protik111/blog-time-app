import React from 'react';
import { useSelector } from 'react-redux';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Posts from './Posts/Posts';

const Home = () => {
    const { posts } = useSelector(state => state.postReducer);
    console.log('posts from appjs', posts);
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