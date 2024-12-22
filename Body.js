import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]); // Full list of restaurants
  const [ListofRestaurant, setListofRestaurant] = useState([]); // Filtered list
  const [searchText, setSearchText] = useState(""); // Search input value

  useEffect(() => {
    fetchData();
  }, []); // Fetch data on component mount

  // Function to fetch data
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();

      const restaurants =
        json?.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
      setAllRestaurants(restaurants); // Save full data
      setListofRestaurant(restaurants); // Display initial list
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Function to filter restaurants as user types
  const handleSearch = (text) => {
    setSearchText(text); // Update the search text state
    const filteredRestaurants = allRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(text.toLowerCase())
    );
    setListofRestaurant(filteredRestaurants); // Update filtered list
  };

  // Shimmer UI while data is loading
  if (allRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        {/* Real-time Search Bar */}
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            placeholder="Search Restaurants"
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button onClick={() => setSearchText("") && setListofRestaurant(allRestaurants)}>
            Reset
          </button>
        </div>

        {/* Filter Button: Top Rated Restaurants */}
        <button
          className="filter-btn"
          onClick={() =>
            setListofRestaurant(
              allRestaurants.filter(
                (res) => parseFloat(res.info.avgRatingString || "0") > 4.5
              )
            )
          }
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* Restaurant List */}
      <div
        className="res-container"
        style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}
      >
        {ListofRestaurant.map((res) => (
         <Link key={res.info.id} to={`/city/delhi/${res.info.id}`}>
         <RestaurantCard resData={res} />
       </Link>
       
        ))}
      </div>
    </div>
  );
};

export default Body;
