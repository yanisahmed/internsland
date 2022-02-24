import React from 'react';
import { Link } from 'react-router-dom';
import './Interns.css';

const SingleInterns = (props) => {

    console.log(props)
    return (
        <div className='single-interns'>
            <h3>{props.user.name}</h3>
            <h4>{props.user.phone}</h4>
            <p><strong>{props.user.email}</strong></p>




            <Link className='link-button' to={`/interns-details/${props.user.id}`} >Details</Link>

        </div>
    );
};

export default SingleInterns;