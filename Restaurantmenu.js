import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

// CDN URL for images
export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const Restaurantmenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams(); // Correct destructuring

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const apiUrl = `${MENU_API}${resId}`; // Construct API URL
            console.log("Fetching menu from:", apiUrl);

            const data = await fetch(apiUrl);
            const json = await data.json();
            console.log("API Response:", json);

            setResInfo(json?.data); // Set restaurant info
        } catch (error) {
            console.error("Error fetching menu:", error.message);
        }
    };

    if (!resInfo) {
        return <Shimmer />; // Show shimmer while data is loading
    }

    // Extracting itemCards
    const itemCards =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[15]?.card?.card?.itemCards || [];

    return (
        <div className="menu" style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
            <h1 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>Restaurant Menu</h1>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {itemCards.length === 0 ? (
                    <p style={{ textAlign: "center", color: "#888" }}>Currently not available</p>
                ) : (
                    itemCards.map((item, index) => {
                        const itemInfo = item?.card?.info;
                        const imageUrl = CDN_URL + itemInfo?.imageId;

                        return (
                            <li
                                key={index}
                                style={{
                                    marginBottom: "20px",
                                    border: "1px solid #ddd",
                                    padding: "10px",
                                    borderRadius: "8px",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "15px",
                                    backgroundColor: "#fff",
                                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                }}
                            >
                                {itemInfo?.imageId && (
                                    <img
                                        src={imageUrl}
                                        alt={itemInfo?.name || "Food Item"}
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                            objectFit: "cover",
                                            borderRadius: "8px",
                                        }}
                                    />
                                )}
                                <div>
                                    <h3 style={{ margin: 0 }}>
                                        {itemInfo?.name || "Item Name Not Available"}
                                    </h3>
                                    <p style={{ margin: "5px 0" }}>
                                        <strong>Category:</strong> {itemInfo?.category || "Not Available"}
                                    </p>
                                    <p style={{ margin: "5px 0" }}>
                                        <strong>Price:</strong> ₹{itemInfo?.price / 100 || "Not Available"}
                                    </p>
                                </div>
                            </li>
                        );
                    })
                )}
            </ul>
        </div>
    );
};

export default Restaurantmenu;
