import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
    return (
        <div>
            <p>Error -404 No matching path Found</p>
            <Link to={'/'}>Home</Link>
        </div>


    )
}

export default NotFound