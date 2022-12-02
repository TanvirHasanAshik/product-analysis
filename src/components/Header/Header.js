import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    const activeNav = {
        border: '3px solid gray',
        margin: '5px'
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav m-auto">
                            <Link className="nav-link active" to='/home'>Home</Link>
                            <Link className="nav-link active" to='/reviews'>Reviews</Link>
                            <Link className="nav-link active" to='/dashboard'>Dashboard</Link>
                            <Link className="nav-link active" to='/blogs'>Blogs</Link>
                            <Link className="nav-link active" to='/about'>About</Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};


{/* */ }
export default Header;