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
    function handleFilter(filters) {
        let filtered = events;

        //location filter
        if (filters.location) {
            filtered = filtered.filter((event) =>
                event.location.toLowerCase().includes(filters.location.toLowerCase())
            );
        }
        //organizer filter
        if (filters.organizer) {
            filtered = filtered.filter((event) =>
                event.organizer.toLowerCase() === filters.organizer.toLowerCase()
            );
        }
//category filter
        if (filters.category) {
            filtered = filtered.filter((event) =>
                event.category.toLowerCase().includes(filters.category.toLowerCase().slice(0, 3))
            );
        }
        //date filter
        const today = new Date();
        if (filters.date === "today") {
            filtered = filtered.filter(
                (event) => new Date(event.date).toDateString() === today.toDateString()
            );
        } else if (filters.date === "this-week") {
            const weekFromNow = new Date();
            weekFromNow.setDate(today.getDate() + 7);
            filtered = filtered.filter(
                (event) => new Date(event.date) >= today && new Date(event.date) <= weekFromNow
            );
        } else if (filters.date === "this-month") {
            const nextMonth = new Date();
            nextMonth.setMonth(today.getMonth() + 1);
            filtered = filtered.filter(
                (event) => new Date(event.date) >= today && new Date(event.date) < nextMonth
            );
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
