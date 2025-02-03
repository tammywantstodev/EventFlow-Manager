import { useState } from 'react';
import { useNavigate } from "react-router-dom";



//Register component
function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    
    const [selectedEvents, setSelectedEvents] = useState([]);
    const [eventType, setEventType] = useState('both');  

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let userData = {name, email, password, confirmPassword, selectedEvents, eventType};
        
        fetch("http://localhost:8000/users",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(userData),
        }).then(()=>{
            if(password === confirmPassword){
                alert("Registered Successfully.")
                navigate('/home');
            } else{
                alert("Confirmation Password does not match First Password. Try again.")
            }
        });
    }
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
            <form onSubmit={handleSubmit}>
                <div className="user-register">
                    <div>
                        <label htmlFor="name">Full Name:</label>
                        <input value={name} onChange={e => setName(e.target.value)} type="text" id="name" name="name" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} type="email" id="email" name="email" required />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input value={password} onChange={e => setPassword(e.target.value)} type="password" id="password" name="password" required />
                    </div>
                    <div>
                        <label htmlFor="confirm-password">Confirm Password:</label>
                        <input value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type="password" id="confirm-password" name="confirm-password" required />
                    </div>
                </div>
                <div className="choices">
                    <h3>Event Preferences:</h3>
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
                            <input type="checkbox" value="Hackathon" onChange={handleEventChange} />
                            Hackathon
                        </label>
                        <label>
                            <input type="checkbox" value="Game Tournaments" onChange={handleEventChange} />
                            Game Tournaments
                        </label>
                        <label>
                            <input type="checkbox" value="Workshop" onChange={handleEventChange} />
                            Workshop
                        </label>
                        <label>
                            <input type="checkbox" value="Meetup" onChange={handleEventChange} />
                            Meetup
                        </label>
                        <label>
                            <input type="checkbox" value="Anime" onChange={handleEventChange} />
                            Anime
                        </label>
                    </div>
                    <h3>Event Type:</h3>
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
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
}

export default Register;
