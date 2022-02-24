import React from 'react';
import './Navigation.css'
import { Link } from 'react-router-dom';
import Logo from '../../images/logo-internsland.png'

function Navigation(props) {
    return (
        <header>
            <div className="container">
                <div className='primary-menu'>
                    <div className='logo'>
                        <Link to="/"><img src={Logo} alt="" /></Link>
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