import React from "react";
import Navbar from '../components/navbar';
import Content from '../components/content';
import Sidebar from '../components/sidebar';
import Copy from '../components/copy';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Content />
            <Sidebar />
            <Copy />
        </div>
    )
}

export default Home;