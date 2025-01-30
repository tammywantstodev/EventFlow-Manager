import React from "react";

//Search Bar component to enable user to directly search an event
function SearchBar({ onSearch }) {

    return (
        <input
            type="text"
            placeholder="Search events..."
            onChange={(e) => onSearch(e.target.value)}
            className="search-bar"
        />
    );
}

export default SearchBar;
