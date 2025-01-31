import React from 'react';
import { Link} from 'react-router-dom';
import ImageSlider from './ImageSlider';

function Home(){
    return(
        <div className='home'>
            <div className='left-section'>
                <h2> Welcome to Event Manager</h2>
                <p> Discover and manage events effortlessly.</p>
                <div className='info'>
                    <p>A smooth and intuitive platform to handle your event planning needs.</p>
                </div>
                <ImageSlider />
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