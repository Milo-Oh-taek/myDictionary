import React from 'react'
import { Link } from 'react-router-dom'

const EmptyPage = () => {
    return (
        <div>
            <h2>Wrong page</h2>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default EmptyPage
