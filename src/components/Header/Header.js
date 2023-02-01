import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div className='nav-section d-flex justify-content-center m-auto align-items-center'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/review">Review</Link></li>
            <li><Link to="/dashboard">DashBoard</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/about">About</Link></li>
            
        </div>
    );
};

export default Header;