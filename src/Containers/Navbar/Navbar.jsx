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
            <Link to="/feedbackform" onClick={() => window.scrollTo(0, 0)}>
                <button>Feedback</button>
            </Link>
            <Link to="/actionstepform" onClick={() => window.scrollTo(0, 0)}>
                <button>Action Step</button>
            </Link>
            <button>Learn</button>
            <button>Growth</button>
            <button>Lead</button>
        </div>
    )
}

export default Navbar