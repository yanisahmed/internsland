import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const InternsDetails = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(resData => {
                setData(resData)
                console.log(data);
            })
    }, [])


    return (
        <div className='container'>
            <h3>Username: {data.username}</h3>
            <h3>Name:  {data.name}</h3>
            <h3>Email: {data.email}</h3>
            <h3>Website: {data.website}</h3>


            <span className='button'><Link className='link-button' to="/hire">Go Back</Link></span>
        </div>
    );
};

export default InternsDetails;