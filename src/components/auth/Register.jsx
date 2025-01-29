import { useState } from 'react';


//Register component
function Register() {
    const [selectedEvents, setSelectedEvents] = useState([]);
    const [eventType, setEventType] = useState('both');  // Default to "both"

    const handleEventChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedEvents(prevState => [...prevState, value]);
        } else {
            setSelectedEvents(prevState => prevState.filter(item => item !== value));
        }
    };

    const handleEventTypeChange = (event) => {
        setEventType(event.target.value);
    };

    return (
        <div className="register">
            <h2>Create an Account</h2>
            <form>
                <div>
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div>
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" name="confirm-password" required />
                </div>
                <div>
                    <label>Event Preferences:</label>
                    <div>
                        <label>
                            <input type="checkbox" value="Game Jams" onChange={handleEventChange} />
                            Game Jams
                        </label>
                        <label>
                            <input type="checkbox" value="Tech Events" onChange={handleEventChange} />
                            Tech Events
                        </label>
                        <label>
                            <input type="checkbox" value="Game Tournaments" onChange={handleEventChange} />
                            Game Tournaments
                        </label>
                    </div>
                </div>
                <div>
                    <label>Event Type:</label>
                    <div>
                        <label>
                            <input 
                                type="radio" 
                                name="event-type" 
                                value="physical" 
                                checked={eventType === 'physical'} 
                                onChange={handleEventTypeChange}
                            />
                            Physical
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                name="event-type" 
                                value="online" 
                                checked={eventType === 'online'} 
                                onChange={handleEventTypeChange}
                            />
                            Online
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                name="event-type" 
                                value="both" 
                                checked={eventType === 'both'} 
                                onChange={handleEventTypeChange}
                            />
                            Both
                        </label>
                    </div>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
