import { CDN_URL } from "../utils/constant";
const RestaurantCard = ({ resData }) => {
    const { info } = resData; // Destructure `info` from the passed data
  
    return (
      <div className="res-cards" style={{ backgroundColor: "#f0f0f0", padding: "16px", margin: "8px", borderRadius: "8px" }}>
        <img
          className="res-logo"
          alt={`${info.name} Logo`}
          src={
            CDN_URL +
            info.cloudinaryImageId
          }
          style={{ width: "100%", borderRadius: "8px" }}
        />
        <h3>{info.name}</h3>
        <h4>Cuisines: {info.cuisines.join(", ")}</h4>
        <h4>Average Rating: {info.avgRatingString} Stars</h4>
        <h4>Cost for Two: {info.costForTwo}</h4>
        <h4>Veg</h4>
      </div>
    );
  };
 
  export default RestaurantCard