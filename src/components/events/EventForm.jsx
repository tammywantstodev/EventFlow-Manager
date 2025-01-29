import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

//create event component that help user to create an event
function EventForm(){
    const navigate = useNavigate();
    const [eventData, setEventData] = useState({
        title: "",
        description: "",
        date: "",
        time: "",
        location: "",
        category: "",
        organizer: "",
        participants: 0,
        max_participants: "",
        image: "",
    });

    const handleChange = (e) => {
        setEventData({
            ...eventData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newEvent = {
            ...eventData,
            id: Date.now(),
            date: new Date(eventData.date).toISOString(),
        };

        // Save to database (JSON server)
        await fetch("http://localhost:3000/events", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newEvent),
        });

        // Save to booked events
        const bookedEvents = JSON.parse(localStorage.getItem("bookedEvents")) || [];
        bookedEvents.push(newEvent);
        localStorage.setItem("bookedEvents", JSON.stringify(bookedEvents));

        // Redirect to booked events page
        navigate("/booked-events");
    };

    return(
        <div className="create-event">
            <h2>Create a New Event</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Event Title" required onChange={handleChange} />
                <textarea name="description" placeholder="Event Description" required onChange={handleChange} />
                <input type="date" name="date" required onChange={handleChange} />
                <input type="time" name="time" required onChange={handleChange} />
                <input type="text" name="location" placeholder="Event Location" required onChange={handleChange} />
                <input type="text" name="category" placeholder="Category (e.g., Game Jam, Tech)" required onChange={handleChange} />
                <input type="text" name="organizer" placeholder="Organizer Name" required onChange={handleChange} />
                <input type="number" name="max_participants" placeholder="Max Participants" required onChange={handleChange} />
                <input type="url" name="image" placeholder="Image URL" required onChange={handleChange} />
                <button type="submit">Create Event</button>
            </form>
        </div>
    )
}
export default EventForm;