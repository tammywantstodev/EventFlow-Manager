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
                <option value="business">Business</option>
            </select>

            <select name="organizer" onChange={handleFilterChange}>
                <option value="">All Organizers</option>
                <option value="Google">Google</option>
                <option value="Microsoft">Microsoft</option>
                <option value="Indie">Indie Devs</option>
            </select>
        </div>
    );
}

export default FilterBar;
