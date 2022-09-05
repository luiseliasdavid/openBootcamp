import React from 'react';
import {useNavigate} from 'react-router-dom'
const NotFoundPage = () => {
    const navigate= useNavigate()

    return (
        <div>
            <h1>404 - not found page</h1>
            <button onClick={()=>navigate(-1)}>
            Go back
        </button>
        </div>
    );
}

export default NotFoundPage;

