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
        <div>
            InternsDetails of id {id};
            <h3> {data.name}</h3>
            <h3> {data.username}</h3>
            <h3> {data.email}</h3>


            <span className='button'><Link to="/hire">Go Back</Link></span>
        </div>
    );
};

export default InternsDetails;