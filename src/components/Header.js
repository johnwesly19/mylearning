import { useState } from "react";


const Title = () => {
  return (
    <img
      className="logo"
      alt="logo"
      src="https://yt3.googleusercontent.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
    />
  );
};

const Header = () => {

  const [isloggedin, setIsLoggedin]= useState(false)


  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
      { isloggedin? <button onClick={()=>setIsLoggedin(false)}>Logout</button>:
      <button onClick={()=>setIsLoggedin(true)}>Login</button>}
    </div>
  );
};

export default Header;
