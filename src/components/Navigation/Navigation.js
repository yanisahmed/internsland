import React, { useEffect } from 'react';
import './Navigation.css'
import { Link } from 'react-router-dom';
import Logo from '../../images/logo-internsland.png'

function Navigation(props) {
    return (
        <header>
            <div className="container">
                <div className='primary-menu'>
                    <div className='logo'>
                        <img src={Logo} alt="" />
                    </div>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/hire">Hire</Link>
                    </nav>
                </div>
            </div>

        </header>
    );
}

export default Navigation;