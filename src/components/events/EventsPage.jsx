import React, {useEffect, useState} from "react";
import FilterBar from "../shared/FilterBar";
import SearchBar from "../shared/SearchBar";
import EventCard from "./EventCard";

//event ppage component
function EventsPage() {
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [bookedEvents, setBookedEvents] = useState([]);

    useEffect(() => {
        
        fetch("http://localhost:3000/events")
            .then((response) => response.json())
            .then((data) => {
                const sortedEvents = data.sort(
                    (a, b) => new Date(a.date) - new Date(b.date)
                );
                setEvents(sortedEvents);
                setFilteredEvents(sortedEvents);
            })
            .catch((error) => console.error("Error fetching events:", error));

            // Load booked events from localStorage
        const storedBookedEvents = JSON.parse(localStorage.getItem("bookedEvents")) || [];
        setBookedEvents(storedBookedEvents);
    }, []);

    // search function
    function handleSearch (query) {
        const filtered = events.filter((event) =>
            event.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredEvents(filtered);
    };
    //filter function 
    function handleFilter({type, value}) {
        let filtered = events;

        if (type === "location" && value) {
            filtered = filtered.filter((event) => event.location.toLowerCase().includes(value.toLowerCase()));
        } else if (type === "category" && value) {
            filtered = filtered.filter((event) => event.category.toLowerCase() === value.toLowerCase());
        } else if (type === "date" && value) {
            const today = new Date();
            if (value === "today") {
                filtered = filtered.filter(
                    (event) => new Date(event.date).toDateString() === today.toDateString()
                );
            }
        }

        setFilteredEvents(filtered);
    };

    //function to help handle booked events
   function handleBookEvent (event) {
        if (bookedEvents.some((e) => e.id === event.id)) {
            alert("You have already booked this event!");
            return;
        }

        const updatedBookedEvents = [...bookedEvents, event];
        setBookedEvents(updatedBookedEvents); 
        localStorage.setItem("bookedEvents", JSON.stringify(updatedBookedEvents));
        alert(`You have successfully booked: ${event.title}`);
    };

    return (
        <div className="events-page">
            <h2>Browse Events</h2>
            <div className="top-bar">
                <div className="search-bar">
                    <SearchBar onSearch={handleSearch}/>
                </div>
                <div className="filter-bar">
                    <FilterBar onFilter={handleFilter}/>
                </div>
            </div>  
            <div className="events-container">
                {filteredEvents.map((event) => (
                    <EventCard key={event.id} event={event} isBooked={false} onBook={handleBookEvent}/>
                ))}
            </div>  
        </div>
    );
}

export default EventsPage;
