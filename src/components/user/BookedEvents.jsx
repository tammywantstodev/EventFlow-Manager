import React, { useState, useEffect } from "react";
import EventCard from "../events/EventCard";
 

//component for booked events that ends up on user booked event page
function BookedEvents() {
    const [bookedEvents, setBookedEvents] = useState([]);
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const storedEvents = JSON.parse(localStorage.getItem("bookedEvents")) || [];
        // Calculate remaining days for each event
        const today = new Date();
        const updatedEvents = storedEvents.map(event => {
            const eventDate = new Date(event.date);
            const timeDiff = eventDate - today;
            const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert to days
            return { ...event, daysRemaining };
        });

        // Filter events happening in the next 3 days
        const upcomingEvents = updatedEvents.filter(event => event.daysRemaining <= 3);
        setBookedEvents(updatedEvents);
        setNotifications(upcomingEvents);
        // setBookedEvents(storedEvents);
    }, []);

    //function to enable user to remove an event from their page once they are done
    function handleRemoveEvent(event) {
        const updatedBookedEvents = bookedEvents.filter(e => e.id !== event.id);
        setBookedEvents(updatedBookedEvents);
        localStorage.setItem("bookedEvents", JSON.stringify(updatedBookedEvents));
    };

    return (
        <div className="booked-events">
            <h2>Your Booked Events</h2>
            {bookedEvents.length === 0 ? (
                <p>You haven't booked any events yet.</p>
            ) : (
                <div className="events-container">
                    {bookedEvents.map((event) => (
                        <EventCard key={event.id} event={event} isBooked={true} onRemove={handleRemoveEvent}/>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BookedEvents;
