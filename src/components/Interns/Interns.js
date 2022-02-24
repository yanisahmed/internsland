import React, { useEffect, useState } from 'react';
import './Interns.css'
import SingleInterns from './SingleInterns';

const Interns = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            })
    }, [])

    return (
        <div className='container'>
            <div className='interns'>
                {

                    users.map(user => <SingleInterns key={user.id} user={user} />)
                }
            </div>
        </div>
    );
};

export default Interns;