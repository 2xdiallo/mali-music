import React, { useState } from "react";
import "./search.css";
import { searchData } from "./data";
import { Link } from "react-router-dom";

const Search = () => {
  const [activeSearch, setActiveSearch] = useState([]);

  const handleSearch = (e) => {
    const inputValue = e.target.value.toLowerCase();

    if (inputValue === "") {
      setActiveSearch([]);
      return;
    }

    const filteredResults = searchData.filter(
      (item) =>
        item.name.toLowerCase().includes(inputValue) ||
        item.title.toLowerCase().includes(inputValue) // Ajouter la recherche par titre
    );
    setActiveSearch(filteredResults);
  };

  return (
    <div className="search">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search a song"
          onChange={handleSearch}
          className="search-input"
        />
        <div className="search_icon">
          <i
            className="fa-solid fa-magnifying-glass"
            style={{ color: "#000" }}
          ></i>
        </div>
      </div>

      {activeSearch.length > 0 && (
        <div className="search-box">
          {activeSearch.map((result) => (
            <Link to="" key={result.id} className="resDiv">
              <Link to="" key={result.id} className="search-result">
                {result.name}
              </Link>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
