import React from "react";
import Navbar from '../components/layout/navbar';
import Content from '../components/content/content';
import Sidebar from '../components/layout/sidebar';
import Copy from '../components/utils/copy';

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