import React from "react";

//each event handled by this event card component
const EventCard = ({ event, isBooked, onBook, onRemove }) => {
    return (
        <div className="event-card">
            {/* <img src={event.image} alt={event.title} className="event-image" /> */}
            <div className="event-details">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <p>
                    <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
                </p>
                <p>
                    <strong>Time:</strong> {event.time}
                </p>
                <p>
                    <strong>Location:</strong> {event.location}
                </p>
                <p>
                    <strong>Category:</strong> {event.category}
                </p>
                <p>
                    <strong>Organizer:</strong> {event.organizer}
                </p>
                <p>
                    <strong>Participants:</strong> {event.participants} / {event.max_participants}
                </p>
                {/* <button onClick={() => onBook(event)} className="book-button">
                    Book Event
                </button> */}
                {isBooked ? (
                    <button onClick={() => onRemove(event)} className="remove-button">
                        Delete Event
                    </button>
                ) : (
                    <button onClick={() => onBook(event)} className="book-button">
                        Book Event
                    </button>
                )}
            </div>
        </div>
    );
};

export default EventCard;
