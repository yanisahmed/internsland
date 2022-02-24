import React, { Component } from 'react';
import Interns from '../components/Interns/Interns';
import Navigation from '../components/Navigation/Navigation';

class Hire extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Interns />
            </div>
        );
    }
}

export default Hire;