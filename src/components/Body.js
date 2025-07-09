// Import necessary modules and components
// import { CDN_URL } from "../utils/constants"; // (Commented out - used if image CDN URL was needed)
import RestaurantCard from "./RestaurantCard"; // Component to display each restaurant
import { useState, useEffect } from "react"; // React hooks for state and lifecycle
import Shimmer from "./Shimmer"; // Shimmer UI for loading effect
import { Link } from "react-router-dom"; // To navigate to individual restaurant pages
import useOnlineStatus from "../utils/useOnlineStatus";

// Body component to render the main content
const Body = () => {
  // State to store the complete list of restaurants
  const [listOfRestaurants, setListOfRestraunt] = useState([]);

  // State to store filtered list for search or rating-based filtering
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // State to store the text typed into the search box
  const [searchText, setsearchText] = useState("");

  // useEffect will call fetchData only once after the component mounts (like componentDidMount)
  useEffect(() => {
    fetchData(); // Fetch restaurant data on page load
  }, []);

  // Function to fetch restaurant data from Swiggy API
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json(); // Convert response to JSON
    console.log("fetchdata==>", json); // Log full response for debugging

    // Extract restaurant array using optional chaining
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log("listOf-res==>", restaurants); // Log extracted list

    // Set the full list and filtered list
    setListOfRestraunt(restaurants);
    setFilteredRestaurants(restaurants);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>you are offline please check your internet connection </h1>

    )

  // Conditional rendering: if restaurants not yet loaded, show shimmer effect
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          {/* Input for search functionality - controlled input with value from state */}
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value); // Update searchText on change
            }}
          />
          {/* Search button triggers filter on click */}
          <button
            onClick={() => {
              console.log(searchText); // Log current search text
              // Filter restaurants by name using case-insensitive comparison
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurant); // Update filtered list
            }}
          >
            search
          </button>
        </div>

        {/* Button to show only top-rated restaurants with rating > 4.3 */}
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setListOfRestraunt(filteredList); // Update main list (note: this overwrites original)
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {/* Debug log to see the filtered list */}
        {console.log("filterres==>", listOfRestaurants)}

        {/* Render filtered restaurants or loading text */}
        {listOfRestaurants.length === 0 ? (
          <h2>Loading restaurants...</h2>
        ) : (
          // Map through filteredRestaurants to render each card
          filteredRestaurants.map((item) => (
            <Link
              key={item.info.id} // Unique key for each item
              to={"/restaurans/" + item.info.id} // Link to individual restaurant page
            >
              {/* Pass restaurant data as props to RestaurantCard component */}
              <RestaurantCard resData={item} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

// Export the Body component so it can be used in other parts of the app
export default Body;
