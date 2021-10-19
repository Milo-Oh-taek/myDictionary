import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <h1>
                <Link to="/">English Words</Link>
            </h1>
            <div className="menu">
                <Link to="/create_word" className="link">
                    add a word
                </Link>
                <Link to="/create_day" className="link">
                    add a day
                </Link>
            </div>
        </div>
    )
}

export default Header
