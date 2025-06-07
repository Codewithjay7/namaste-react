//import { CDN_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setsearchText] = useState("");

//this use effect is used to fetch the data from the api all time when the page is loaded
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log("fetchdata==>", json);

    const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log("listOf-res==>", restaurants);

    //optional chaining
    setListOfRestraunt(restaurants);
    setFilteredRestaurants(restaurants);
  };

  //condiional Rendering--->for a show fack cards
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          {/* //when i am write all body component are re reander */}
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            search
          </button>
        </div>
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
          filteredRestaurants.map((item) => (
            <Link key={item.info.id} 
            to = {"/restaurans/"+item.info.id}>
              <RestaurantCard  resData={item} /></Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
