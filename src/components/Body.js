import RestuarentCard from "./RestuarentCard";
import { restuarentList } from "../Constants";
import { useState } from "react";

// const searctText='Hello'

function filterRestuarents(searchText, restuarents) {
  return restuarents.filter((restuarent) =>
    restuarent.data.name.includes(searchText)
  );
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restuarents, setRestuarents] = useState(restuarentList);

  return (
    <>
      <div className="search">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            const data = filterRestuarents(searchText, restuarents);
            setRestuarents(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restuarentcard">
        {restuarents.map((restuarent) => {
          return (
            <RestuarentCard {...restuarent.data} key={restuarent.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
