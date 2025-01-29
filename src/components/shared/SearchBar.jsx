import React from "react";

//Search Bar component to enable user to directly search an event
function SearchBar({ searchQuery, setSearchQuery }) {
    return (
        <input
            type="text"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-bar"
        />
    );
}

export default SearchBar;
