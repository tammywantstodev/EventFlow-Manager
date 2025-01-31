import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";

//My nav bar header that will appear on every page
function Header(){
    return(
        <header className='header'>
            <h1> Event Flow Manager</h1>
            <nav>
                <ul>
                    <li alt='Home'><Link to="/">
                        <FaHome size={60}/></Link>
                    </li>
                    <li alt='About Use'><Link to="/about">    
                        <BsFillPeopleFill size={60}/></Link>
                    </li>
                    <li><Link to='/events'>    
                        Events</Link>
                    </li>
                    <li><Link to="/create-event">
                        Create Events</Link>
                    </li>
                    <li><Link to="/booked-events">
                        Booked Events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;