import { useState } from "react";

//filter component to help filter using different components
function FilterBar({ onFilter }) {
    //setting state for filter
    const [filters, setFilters] = useState({
        date: "",
        location: "",
        category: "",
        organizer: ""
    });

    //function to handle change
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        const updatedFilters = {...filters, [name]: value };
        setFilters(updatedFilters);
        onFilter(updatedFilters);

    };

    return (
        <div className="filter-bar">
            <select name="date" onChange={handleFilterChange}>
                <option value="">All Dates</option>
                <option value="today">Today</option>
                <option value="this-week">This Week</option>
                <option value="this-month">This Month</option>
            </select>

            <select name="location" onChange={handleFilterChange}>
                <option value="">All Locations</option>
                <option value="online">Online</option>
                <option value="physical">Physical</option>
                <option value="both">Both</option>
            </select>

            <select name="category" onChange={handleFilterChange}>
                <option value="">All Categories</option>
                <option value="tech">Tech</option>
                <option value="gaming">Gaming</option>
                <option value="anime">Anime</option>
                <option value="hackathon">Hackathon</option>
                <option value="workshop">Workshop</option>
                <option value="art">Art</option>
                <option value="meetup">Meetup</option>
            </select>

            <select name="organizer" onChange={handleFilterChange}>
                <option value="">All Organizers</option>
                <option value="GameDev Hub">GameDev Hub</option>
                <option value="DevTalks">DevTalks</option>
                <option value="Indie Devs">Indie Devs</option>
                <option value="eSports League">eSports League</option>
                <option value="Anime Convention">Anime Convention</option>
                <option value="OtakuEvents">OtakuEvents</option>
                <option value="iHub Nairobi">iHub Nairobi</option>
                <option value="Women In Tech">Women In Tech</option>
                <option value="Cosplay Kenya">Cosplay Kenya</option>
                <option value="HackGames">HackGames</option>
                <option value="Nairobi Hackers">Nairobi Hackers</option>
                <option value="Speedrun Legends">Speedrun Legends</option>
                <option value="VR Innovators">VR Innovators</option>
                <option value="coderush">CodeRush</option>
                <option value="AI Game Labs">AI Game Labs</option>
            </select>
        </div>
    );
}

export default FilterBar;
