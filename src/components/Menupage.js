import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imageLink } from "../Constants";
import '../../index.css'

const Menupage = () => {
  const { resid } = useParams();


  const [restuarent, setRestuarent] = useState();
  const [menu, setMenu] = useState();

  console.log(useState())

  useEffect(() => {
    
    getMenu();
  }, []);

  async function getMenu() {
    const results = await fetch(  
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4340985&lng=78.3718221&restaurantId="+resid
      // "https://www.swiggy.com/dapi/menu/v4/full?lat=17.4340985&lng=78.3718221&menuId="+resid
    );
    const data = await results.json();
  //   console.log(data);
    // setRestuarent(data.data);
    setRestuarent(data?.data?.cards[0]?.card?.card?.info)
    setMenu(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards)

    console.log(data?.data?.cards[0]?.card?.card?.info, "restuarent")
    console.log(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards,"menu")
    console.log("1")
    // console.log(restuarent,"testing")
  }

  // console.log(Object.values(menu), "fdfdsfdsa")

  return !restuarent ? null : (
    <>
    <div className="menu-style">
    <div>
      <h1> Restuarent ID : {resid}</h1>
      <img src={imageLink + restuarent?.cloudinaryImageId} />



      <h1> Name: {restuarent?.name}</h1>
      <h1> Area: {restuarent?.areaName}</h1>  
      <h1> Cost: {restuarent?.costForTwoMessage}</h1>
      <h1> Rating: {restuarent?.avgRating}</h1>


      </div>
      <div>
        <h1> Menu</h1>
        <ul>
          {menu && Object.values(menu).map((item) => (
            <li key={item?.card?.info?.id}> {item?.card?.info?.name}</li>
          ))}
        </ul>
      </div>
      </div>
    </>
  );
};

export default Menupage;
