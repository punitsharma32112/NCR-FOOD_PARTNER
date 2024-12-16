import React from "react";
import ReactDOM from "react-dom/client";

// Header Component
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://th.bing.com/th/id/OIP.9hl54qFeHA_2o_PIo3JhswAAAA?pid=ImgDet&w=185&h=176&c=7&dpr=1.3"
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};


// RestaurantCard Component
const RestaurantCard = ({ resData }) => {
  const { info } = resData; // Destructure `info` from the passed data

  return (
    <div className="res-cards" style={{ backgroundColor: "#f0f0f0", padding: "16px", margin: "8px", borderRadius: "8px" }}>
      <img
        className="res-logo"
        alt={`${info.name} Logo`}
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
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

// Restaurant Data Array
const resList = [
  {
    info: {
      id: "137369",
      name: "Domino's Pizza",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/77b107c9-cb36-4f1b-bf8e-cc241974d171_137369.jpg",
      locality: "A Block",
      areaName: "Sector 62",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRatingString: "4.3"
    }
  },
  {
    info: {
      id: "854337",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "e0d5fd488228a6a9d5942b9f56c0f4ac",
      locality: "Sector-63",
      areaName: "D-Square Mall",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRatingString: "4.2"
    }
  },
  {
    info: {
      id: "681530",
      name: "LeanCrust Pizza- ThinCrust Experts",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/5a9a8351-4b54-4e84-82f0-76d2ed4f971d_681530.jpg",
      locality: "Mamura",
      areaName: "Sector 60",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Italian", "Desserts"],
      avgRatingString: "4.3"
    }
  },{
  info: {
        id: "750313",
        name: "Daily Kitchen - Homely Meals",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/741d7d41-1341-4358-b6e0-cc22b8e82f9a_750313.JPG",
        areaName: "Sector 66, Noida",
        costForTwo: "₹250 for two",
        cuisines: [
          "Home Food",
          "Indian",
          "North Indian",
          "Thalis"
        ],
        avgRatingString: "4.3"
       
      }
    },
    {
      "info": {
        "id": "622119",
        "name": "MOJO Pizza - 2X Toppings",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/12/928a8be6-c0da-4af7-9f85-26d76218cf55_622119.jpg",
        "locality": "Gautam Buddha Nagar",
        "areaName": "Sector 66",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Fast Food",
          "Desserts"
        ],
        "avgRatingString": 4.5,
        "totalRatingsString": "624",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 2.3,
          "slaString": "20-30 mins"
        },
        "isOpen": true,
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹159"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/noida-1/mojo-pizza-2x-toppings-gautam-buddha-nagar-sector-66-rest622119",
          "type": "WEBLINK"
        }
      }
    },
    {
      "info": {
        "id": "19014",
        "name": "Subway",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/d28e6658-d7e4-4649-8ee8-0dbc4704a426_19014.JPG",
        "locality": "C Block",
        "areaName": "Sector 62",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "sandwich",
          "Salads",
          "wrap",
          "Healthy Food"
        ],
        "avgRatingString": 4.1,
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 18,
          "lastMileTravel": 0.8,
          "slaString": "15-20 mins"
        },
        "isOpen": true,
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹119"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/noida-1/subway-c-block-sector-62-rest19014",
          "type": "WEBLINK"
        }
      }
    },
    {
      "info": {
        "id": "677933",
        "name": "Goila Butter Chicken",
        "cloudinaryImageId": "5e19832da032dd69547565e27104706f",
        "locality": "Sector 63",
        "areaName": "Sector 64",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "North Indian",
          "Biryani",
          "Kebabs",
          "Desserts"
        ],
        "avgRatingString": 4.1,
        "totalRatingsString": "604",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 3.5,
          "slaString": "30-35 mins"
        },
        "isOpen": true,
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹189"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/noida-1/goila-butter-chicken-sector-63-sector-64-rest677933",
          "type": "WEBLINK"
        }
      }
    },
    {
      "info": {
        id: "524942",
        name: "Theobroma",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/edf26d45-bf9a-41cc-bf0b-e0dedafa353e_524942.jpg",
        locality: "Indirapuram",
        areaName: "Ghaziabad",
        costForTwo: "₹400 for two",
        cuisines: [
          "Bakery",
          "Desserts"
        ],
        avgRatingString: "4.3"
      }
    },
    {
        "info": {
          "id": "53773",
          "name": "Pizza Hut",
          "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
          "locality": "Sector 62",
          "areaName": "Sector 62",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Pizzas"
          ],
          "avgRatingString": 4.0,
        }
    },
    {
        "info": {
          "id": "254133",
          "name": "McDonald's",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/22/5b6b7db2-d35d-439f-a173-25cdc8f22cd9_254133.JPG",
          "locality": "Vishwakarma Road",
          "areaName": "Sector 63",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "American"
          ],
          "avgRatingString": 4.5,
        }
    },
    {
        "info": {
          "id": "485420",
          "name": "KFC",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/08bed38c-b2df-4778-bb45-431ea2198d75_485420.JPG",
          "locality": "H Block",
          "areaName": "Sector 63",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Burgers",
            "Fast Food",
            "Rolls & Wraps"
          ],
          "avgRating": 4.2,
          "parentId": "547",
          "avgRatingString": "4.2",
        }
    },
    {
        "info": {
          "id": "90170",
          "name": "Burger King",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/1d6a4dbe-8836-4bad-9733-ccf51912067a_90170.jpg",
          "locality": "H Block",
          "areaName": "Sector 63",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Burgers",
            "American"
          ],
          "avgRatingString": 4.4,
        }
    },
    {
        "info": {
          "id": "42808",
          "name": "Rollsking",
          "cloudinaryImageId": "rpoiziw5dhc1h59y5tje",
          "locality": " Gautam Buddha Nagar",
          "areaName": "Sector 62",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Fast Food",
            "Rolls & Wraps",
            "North Indian",
            "Snacks"
          ],
          "avgRatingString": 4.3,
        }
    },
    {
        "info": {
          "id": "741449",
          "name": "Good Flippin' Burgers",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/30/05e07376-1941-4738-bd2c-166276cf2db6_741449.jpg",
          "locality": "Sector 73",
          "areaName": "Sector 73, Noida",
          "costForTwo": "₹600 for two",
          "cuisines": [
            "Burgers",
            "American",
            "Fast Food",
            "Beverages"
          ],
          "avgRatingString": 4.6,
        }
    },
    {
        "info": {
          "id": "727061",
          "name": "Olio - The Wood Fired Pizzeria",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/4abf8b3a-1e7c-4b90-a004-e32a291c7547_727061.jpg",
          "locality": "C Block",
          "areaName": "Sector 63",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Pizzas",
            "Pastas",
            "Fast Food",
            "Snacks",
            "Beverages"
          ],
          "avgRating": 4.4,
          "parentId": "11633",
          "avgRatingString": "4.4",
        }
    },
    {
        "info": {
          "id": "181150",
          "name": "Wow! Momo",
          "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
          "locality": "Indirapuram",
          "areaName": "Indirapuram",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Tibetan",
            "Healthy Food",
            "Asian",
            "Chinese",
            "Snacks",
            "Continental",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.2,
          "parentId": "1776",
          "avgRatingString": "4.2",
        }
    },
    {
        "info": {
          "id": "183389",
          "name": "NIC Ice Creams",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/22/6f39f27c-2bb6-461c-bff7-ee1a6dc06bc6_183389.jpg",
          "locality": "Jaipuria Sunrise Greens",
          "areaName": "Indirapuram",
          "costForTwo": "₹120 for two",
          "cuisines": [
            "Desserts",
            "Ice Cream"
          ],
          "avgRatingString": 4.6,
        }
    },

    
];

// Body Component
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

// App Layout
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

// Render to DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
