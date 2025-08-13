import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId  , name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  return (
    <div className="w-[250px] m-4 p-4 bg-gray-500 hover:bg-gray-700 rounded-xl " >
       <img
        className="rounded-lg w-full h-48 "
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
        /> 
   
      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
