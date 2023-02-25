import RestuarentCard from "./RestuarentCard";
import { restuarentList } from "../Constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

// const searctText='Hello'

function filterRestuarents(searchText, restuarents) {
  return restuarents.filter((restuarent) =>
    restuarent?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestuarents, setAllRestuarents] = useState([]);
  const [filteredRestuarents, setFilteredRestuarents] = useState([]);
  const [toogle, setToogle] = useState("false");

  useEffect(() => {
    getapi();
  }, 
  []
  );  

  async function getapi() {
    const result = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4340985&lng=78.3718221&page_type=DESKTOP_WEB_LISTING"
    );
    const Json = await result.json();
    console.log(Json?.data?.cards[2]?.data?.data?.cards);

    setAllRestuarents(Json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestuarents(Json?.data?.cards[2]?.data?.data?.cards);
    setToogle("true");
  }

console.log("hello")

  return allRestuarents.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            const data = filterRestuarents(searchText, allRestuarents);
            setFilteredRestuarents(data);
          }}
        >
          Search
        </button>
        <button
          onClick={() => {
            if (toogle === "True") setToogle("False");
            else setToogle("True");
          }} 
        >
          toogle
        </button>

        <div> {toogle}</div>
      </div>
      {filteredRestuarents.length===0? <h1>No results</h1>: null}
      <div className="restuarentcard">
        {filteredRestuarents.map((restuarent) => {
          return (
            <RestuarentCard {...restuarent.data} key={restuarent.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
