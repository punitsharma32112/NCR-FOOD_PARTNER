import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {
  const { info } = resData; // Destructure `info` from the passed data
 const {loggedInUser}=useContext(UserContext)
  return (
    <div
      className="m-4 p-4 w-[250px] rounded-lg hover:bg-gray-200"
      style={{ padding: "16px", margin: "8px", borderRadius: "8px" }}
    >
      <img
        className="rounded-lg"
        alt={`${info.name} Logo`}
        src={CDN_URL + info.cloudinaryImageId}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3 className="font-bold py-2 text-lg">{info.name}</h3>
      <h4>Cuisines: {info.cuisines.join(", ")}</h4>
      <h4>Average Rating: {info.avgRatingString} Stars</h4>
      <h4>Cost for Two: {info.costForTwo}</h4>
      {/* Display discount header */}
      {info.aggregatedDiscountInfoV3?.header && (
        <h4 className="text-green-500 font-semibold">
          {info.aggregatedDiscountInfoV3.header}
        </h4>
      )}
      <h4>User:{loggedInUser}</h4>
    </div>
  );
};

// Higher-order component
export const withOfferLabel = (RestaurantCard) => {
  return (props) => {
    const offerHeader = props.resData.info.aggregatedDiscountInfoV3?.header;

    // Display the label only if the header contains a percentage offer
    const hasPercentageOffer = offerHeader && offerHeader.includes("%");

    return (
      <div className="relative">
        {hasPercentageOffer && (
          <div className="absolute top-[-30px] left-0 bg-yellow-300 text-black font-bold px-2 py-1 rounded-t-md shadow-md">
            {offerHeader}
          </div>
        )}
        <RestaurantCard {...props} />
      </div>
    );
  };
};



export default RestaurantCard;
