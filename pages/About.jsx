import React from 'react';

//what says about us than this about section component
function About(){
    return(
        <div className='about'>
            <h2>About Us</h2>
            <p>EventFlow is a simple, easy-to-use app that helps you manage all your events in one place. It allows you to create, edit, delete, and view event details effortlessly.
                You can search and filter events by their themes or dates, and a notification bell will remind you when an event is coming up.</p>
            <div className='mission-vision'>
                <h3>Mission</h3>
                <p>To streamline event management and make the process easy for everyone.</p>
                <h3>Vision</h3>
                <p>To become the leading platform for event management, empowering organizers worldwide.</p>
            </div>
        </div>
    )
}
export default About;