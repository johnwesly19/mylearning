import { useState } from "react";
import {Link} from "react-router-dom";
import Logo from "../assets/img/food_villa.png"


const Title = () => {
  return (
    <img
      className="logo"
      alt="logo"
      src={Logo}
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
          <li> 
            <Link to="/" >Home</Link></li>
          <li>Contact</li>
          <li>
            <Link to="/about" > About</Link></li>
          <li>Cart</li>
        </ul>
      </div>
      { isloggedin? <button onClick={()=>setIsLoggedin(false)}>Logout</button>:
      <button onClick={()=>setIsLoggedin(true)}>Login</button>}
    </div>
  );
};

export default Header;
