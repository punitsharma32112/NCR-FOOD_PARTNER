import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
const Body = () => {
    return (
      <div className="body">
        <div className="search" style={{ marginBottom: "16px" }}>
          <input
            type="text"
            placeholder="Search for Restaurants"
            style={{ padding: "8px", width: "100%", borderRadius: "4px", border: "1px solid #ddd" }}
          />
        </div>
        <div className="res-container" style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
          {resList.map((res) => (
            <RestaurantCard key={res.info.id} resData={res} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;