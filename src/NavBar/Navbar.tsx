import React from 'react';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <span className="navbar__brand-name">Brand Name</span>
            <ul className="navbar__list">
                <li className="navbar__list-item">Blogs</li>
                <li className="navbar__list-item">Posts</li>
            </ul>
        </nav>
    );
};

