import React from 'react';
import { Link } from 'react-router-dom';

const SingleInterns = (props) => {

    console.log(props)
    return (
        <div>
            {props.user.name}
            {props.user.phone}
            {props.user.email}
            <Link to={`/interns-details/${props.user.id}`} >Details</Link>

        </div>
    );
};

export default SingleInterns;