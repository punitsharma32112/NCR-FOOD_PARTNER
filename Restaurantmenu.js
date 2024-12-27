import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";

// CDN URL for images
export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const Restaurantmenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    // State to track the currently opened category
    const [openCategory, setOpenCategory] = useState(null);

    if (!resInfo) {
        return <Shimmer />; // Show shimmer while data is loading
    }

    // Extracting categories
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    // Handle accordion toggle
    const toggleAccordion = (index) => {
        setOpenCategory(openCategory === index ? null : index); // Toggle the category (close if already open)
    };

    return (
        <div className="menu max-w-3xl mx-auto p-4">
            <h1 className="text-center text-2xl font-semibold text-gray-800 mb-6">Restaurant Menu</h1>

            {/* Check if categories exist before mapping */}
            {categories && categories.length > 0 ? (
                categories.map((category, index) => {
                    const categoryTitle = category?.card?.card?.title;
                    const itemCards = category?.card?.card?.itemCards || []; // Get the items for the current category

                    return (
                        <div key={index} className="mb-6">
                            {/* Accordion Header */}
                            <div
                                className="p-4 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200 transition"
                                onClick={() => toggleAccordion(index)} // Toggle on click
                            >
                                <h2 className="text-lg font-semibold text-gray-800">{categoryTitle}</h2>
                            </div>

                            {/* Accordion Body */}
                            <div
                                className={`p-4 bg-gray-50 rounded-md mt-2 transition-all duration-300 ease-in-out ${
                                    openCategory === index ? "max-h-screen" : "max-h-0 overflow-hidden"
                                }`}
                            >
                                <ul className="list-none p-0 space-y-4">
                                    {itemCards.length === 0 ? (
                                        <p className="text-center text-gray-600">Currently not available</p>
                                    ) : (
                                        itemCards.map((item, itemIndex) => {
                                            const itemInfo = item?.card?.info;
                                            const imageUrl = CDN_URL + itemInfo?.imageId;

                                           

                                            return (
                                                <li
                                                    key={itemIndex}
                                                    className="bg-white border border-gray-300 rounded-lg shadow-md p-4 flex flex-col md:flex-row items-start gap-4"
                                                >
                                                    {/* Item Image */}
                                                    {itemInfo?.imageId && (
                                                        <img
                                                            src={imageUrl}
                                                            alt={itemInfo?.name || "Food Item"}
                                                            className="w-24 h-24 object-cover rounded-md"
                                                        />
                                                    )}
                                                    
                                                    {/* Item Details */}
                                                    <div className="flex-1">
                                                        <h3 className="text-xl font-semibold text-gray-800">
                                                            {itemInfo?.name || "Item Name Not Available"}
                                                        </h3>
                                                        <div className="mt-2 text-gray-600">
                                                            <p>
                                                                <strong>Category:</strong> {itemInfo?.category || "Not Available"}
                                                            </p>
                                                            <p>
                                                                <strong>Price:</strong> ₹{itemInfo?.price / 100 || "Not Available"}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                            );
                                        })
                                    )}
                                </ul>
                            </div>
                        </div>
                    );
                })
            ) : (
                <p className="text-center text-gray-600">No categories found</p>
            )}
        </div>
    );
};

export default Restaurantmenu;
