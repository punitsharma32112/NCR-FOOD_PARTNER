import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData"; // Import resList

const Body = () => {
  // Initial restaurant list
  const [ListofRestaurant, setListofRestaurant] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() =>
            setListofRestaurant(
              ListofRestaurant.filter(
                (res) => parseFloat(res.info.avgRatingString) > 4.5
              )
            )
          }
        >
          Top Rated Restaurant
        </button>
      </div>
      <div
        className="res-container"
        style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}
      >
        {ListofRestaurant.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
