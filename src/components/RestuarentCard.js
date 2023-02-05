import { imageLink } from "../Constants";

const RestuarentCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  // const {name, cuisines, avgRating, cloudinaryImageId}= restuarent.data

  return (
    <div className="card">
      <img src={imageLink + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestuarentCard;
