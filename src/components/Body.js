import { CDN_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  //const [FilteredRestaurant,setFilteredRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log("fetchdata==>", json);

    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
  ``      
    console.log("res==>", restaurants);

    const check = json.data.cards[4].card.card;
    console.log("check==>", check);

    //optional chaining
    setListOfRestraunt(restaurants);
  };
  
  //condiional Rendering--->for a show fack cards
  return listOfRestaurants.length === 0?<Shimmer />: (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setListOfRestraunt(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {console.log("filterres==>", listOfRestaurants)}
        {listOfRestaurants.length === 0 ? (
          <h2>Loading restaurants...</h2>
        ) : (
          listOfRestaurants.map((item) => (
            <RestaurantCard key={item.info.id} resData={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
