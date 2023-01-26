import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading1= React.createElement("h1", {
//     id: "title"
    
// }, "Heading 1");

// const heading2= React.createElement("h2", {
//     id: "title"
    
// }, "Heading 2");

// const heading3= React.createElement("h3", {
//     id: "title"
    
// }, "Heading 3");

// const container= React.createElement("div", {
//     id: "container"
    
// }, [heading1, heading2, heading3]);


// const heading= <div><h1>heading1</h1><h2>heading2</h2><h3>heading3</h3></div>;

// heading= 
// (<div>
//     <h1>heading1</h1>
//     <h2>heading2</h2>
//     <h3>heading3</h3>
//     </div>
//     );


// const Heading=() => {
//    return(

//    <div className= 'design'>
//     {heading}
//            <h1>heading1</h1>
//             <h2>heading2</h2>
//             <h3>heading3</h3>
//             </div>
//             );

// };

const Header= () => {

return( 
    <div>
        <img src="images/logo1.jpg"></img>
        <input type='search'>
        </input>
        <img src='images/user1.jpg'></img>

    </div>
);

};




const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header/>);

