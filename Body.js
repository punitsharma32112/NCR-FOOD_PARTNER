import { useEffect, useState } from "react";
import RestaurantCard, { withOfferLabel } from "./RestaurantCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [ListofRestaurant, setListofRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardOffer = withOfferLabel(RestaurantCard);
  console.log("Body rendered", ListofRestaurant);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      const restaurants =
        json?.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
      setAllRestaurants(restaurants);
      setListofRestaurant(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = (text) => {
    setSearchText(text);
    const filteredRestaurants = allRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(text.toLowerCase())
    );
    setListofRestaurant(filteredRestaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1 className="text-center text-red-600 text-lg font-bold mt-10">
        Looks like you are offline! Please check your internet connection.
      </h1>
    );

  if (allRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body bg-gray-100 min-h-screen p-6">
      <div className="filter flex flex-wrap justify-between items-center mb-6">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-gray-300 rounded-md px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={searchText}
            placeholder="Search Restaurants"
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button
            className="ml-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            onClick={() => setSearchText("") || setListofRestaurant(allRestaurants)}
          >
            Reset
          </button>
        </div>
        <div className="m-4 p-4">
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
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
      </div>
      <div className="res-container flex flex-wrap justify-center gap-6">
      {ListofRestaurant.map((res) => (
  <Link key={res.info.id} to={`/city/delhi/${res.info.id}`}>
    {res.info.aggregatedDiscountInfoV3?.header ? (
      <RestaurantCardOffer resData={res} />
    ) : (
      <RestaurantCard resData={res} />
    )}
  </Link>
))}

      </div>
    </div>
  );
};

export default Body;
