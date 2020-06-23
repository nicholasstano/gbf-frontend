import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
    return (
        <div className="navbar">
            <p>Get Better Faster 2.0 |</p>
            <Link to="/observeform" onClick={() => window.scrollTo(0, 0)}>
                <button>Observe</button>
            </Link>
            <button>Feedback</button>
            <button>Learn</button>
            <button>Growth</button>
            <button>Lead</button>
        </div>
    )
}

export default Navbar