import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

const Navbar = (props) => {
    return (
        <div className="navbar">
            <Link to="/userhome" onClick={() => window.scrollTo(0, 0)}>
                <p>Get Better Faster 2.0 |</p>
            </Link>
            {props.user.is_coach &&
                <Link to="/coachforms" onClick={() => window.scrollTo(0, 0)}>
                    <button>Coach Feedback Forms</button>
                </Link>
            }
            <Link to="/observe" onClick={() => window.scrollTo(0, 0)}>
                <button>Observe</button>
            </Link>
            <Link to="/feedback" onClick={() => window.scrollTo(0, 0)}>
                <button>Feedback</button>
            </Link>
            <Link to="/actionstep" onClick={() => window.scrollTo(0, 0)}>
                <button>Action Step</button>
            </Link>
            {/* <button>Learn</button>
            <button>Growth</button>
            <button>Lead</button> */}
            <button onClick={() => props.logOutUser()}>Log Out</button>
        </div>
    )
}

export default Navbar