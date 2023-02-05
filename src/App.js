import React from "react";
import ReactDOM from "react-dom/client";
import '../index.css';
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Body from '../src/components/Body'

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
