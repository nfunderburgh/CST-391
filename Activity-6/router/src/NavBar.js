import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link className='navbar-brand' to='/'>
                NavBar
            </Link>
            <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarNavAltMarkup'
                aria-controls='navbarNavAltMarkup'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                <div className='navbar-nav'>
                    <Link className='nav-item nav-link active' to='/about'>
                        About <span className='sr-only'>(current)</span>
                    </Link>
                    <Link className='nav-item nav-link' to='/contact'>
                        Contact Us
                    </Link>
                    <Link className='nav-item nav-link' to='/user/Ned Navigator'>
                        User
                    </Link>
                    <Link className='nav-item nav-link' to='/login'>
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
