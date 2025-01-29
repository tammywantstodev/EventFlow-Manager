import React from 'react';
import { Link} from 'react-router-dom';

function Home(){
    return(
        <div className='home'>
            <div className='left-section'>
                <h2> Welcome to Event Manager</h2>
                <p> Discover and manage events effortlessly.</p>
                <div className='info'>
                    <h3> Event Flow Manager</h3>
                    <p>A smooth and intuitive platform to handle your event planning needs.</p>
                </div>
                <div className='mission-vision'>
                    <h3>Mission</h3>
                    <p>To streamline event management and make the process easy for everyone.</p>
                    <h3>Vision</h3>
                    <p>To become the leading platform for event management, empowering organizers worldwide.</p>
                </div>
            </div>
            <div className='right-section'>
                <Link to='/login'><button className='sign-in'>Sign In</button></Link>
                <Link to='/register'><button className='sign-up'>Sign Up</button></Link>
                <Link to='/events'><button className='browse-events'>Click here to browse our events listing</button></Link>
            </div>
        </div>
    );
}
export default Home;