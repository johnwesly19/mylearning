import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
    </div>
  );
};

// const burgerking = {
//   name: "Burger King",
//   image:
//     "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dyewhwljehwirmiy6i63",
//   cusines: ["Burger", "American"],
//   rating: "4.2 stars",
// };

const restuarentList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "618626",
      name: "Leon's - Burgers & Wings (Leon Grill)",
      uuid: "c877bd44-519d-433f-b130-d66a09a6bfba",
      city: "3",
      area: "Hitech City",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "znnusox0tpamu6pvol34",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 23,
      minDeliveryTime: 23,
      maxDeliveryTime: 23,
      slaString: "23 MINS",
      lastMileTravel: 2,
      slugs: {
        restaurant: "leon-grill-vanasthalipuram-vanasthalipuram",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "SHOP NO G4,BIZNESS SQUARE,1-98/3/5/23-27, JUBILEES ENCLAVE, OPP HITEX ENTRANCE, MADHAPUR, Serlingampally Circle No 20, Hyderabad, Telangana - 500081",
      locality: "Hitech City",
      parentId: 371281,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2700,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2700,
        message: "",
        title: "Delivery Charge",
        amount: "2700",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5777288~p=1~eid=00000185-ed8e-952d-0ffa-dc1b002c0114",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "618626",
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        lastMileTravel: 2,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.2",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "39546",
      name: "Mehfil",
      uuid: "4d24b2f1-59ef-41a2-9777-5947b08da1d1",
      city: "3",
      area: "Hitec City",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "stnwpjuu5fhehsx1dw4z",
      cuisines: [
        "Biryani",
        "Chinese",
        "Indian",
        "Kebabs",
        "Tandoor",
        "Desserts",
      ],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 16,
      minDeliveryTime: 16,
      maxDeliveryTime: 16,
      slaString: "16 MINS",
      lastMileTravel: 1.600000023841858,
      slugs: {
        restaurant: "mehfil-restaurant-madhapur-madhapur",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "Jaihind Enclave, Beside Indiblaze, Madhapur, Hyderabad, Telangana 500081",
      locality: "Jaihind Enclave",
      parentId: 637,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "10% off",
        shortDescriptionList: [
          {
            meta: "10% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "10% off up to ₹40 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "10% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "10% off up to ₹40 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2700,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2700,
        message: "",
        title: "Delivery Charge",
        amount: "2700",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "39546",
        deliveryTime: 16,
        minDeliveryTime: 16,
        maxDeliveryTime: 16,
        lastMileTravel: 1.600000023841858,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.9",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "431899",
      name: "California Burrito",
      uuid: "38b4d2a1-c065-4e3a-998d-7acdb09abc35",
      city: "3",
      area: "Kukatpally",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "bq6xh4vlkp3f4gz4t54f",
      cuisines: ["Mexican"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 28,
      minDeliveryTime: 28,
      maxDeliveryTime: 28,
      slaString: "28 MINS",
      lastMileTravel: 3.700000047683716,
      slugs: {
        restaurant: "califronia-burrito-kukatpally-kukatpally",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "Nexus Hyderabad Mall, Food Court, 3rd Floor, Forum Sujana Mall, Housing Board Rd, KPHB Phase - 9, Kukatpally, Hyderabad - 500085",
      locality: "Housing Board Rd",
      parentId: 1252,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "20% off",
        shortDescriptionList: [
          {
            meta: "20% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹50 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "20% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹50 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3400,
        message: "",
        title: "Delivery Charge",
        amount: "3400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5775002~p=4~eid=00000185-ed8e-952d-0ffa-dc1c002c0413",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "431899",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        lastMileTravel: 3.700000047683716,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.5",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "386987",
      name: "Lucky Multicuisine Restaurant",
      uuid: "ffd75687-9895-464a-82d0-c0ca4064df8a",
      city: "3",
      area: "Kukatpally",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "g8c7gkig9zxgqxpeqmas",
      cuisines: ["Biryani", "North Indian", "Tandoor", "South Indian"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 20,
      minDeliveryTime: 20,
      maxDeliveryTime: 20,
      slaString: "20 MINS",
      lastMileTravel: 2.799999952316284,
      slugs: {
        restaurant: "lucky-multi-cuisine-restaurant-kukatpally-kukatpally",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "Shop No.B-2, B-3, B-4, Phase-IV, KPHB Colony, Hyderabad - 500072",
      locality: "Kphb Colony",
      parentId: 18963,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "Free Sweets",
        shortDescriptionList: [
          {
            meta: "Free Sweets on orders above ₹365",
            discountType: "Freebie",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Free Sweets on orders above ₹365",
            discountType: "Freebie",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Free Sweets",
            discountType: "Freebie",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Free Sweets on orders above ₹365",
            discountType: "Freebie",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2700,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2700,
        message: "",
        title: "Delivery Charge",
        amount: "2700",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "386987",
        deliveryTime: 20,
        minDeliveryTime: 20,
        maxDeliveryTime: 20,
        lastMileTravel: 2.799999952316284,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.4",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "1110",
      name: "Hitech Bawarchi",
      uuid: "69e1d9dd-b531-48f6-91dc-ce84ebe32515",
      city: "3",
      area: "Mega Hills",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "rrnedykouuteb0b9l9qy",
      cuisines: ["Biryani", "Chinese", "Indian", "Kebabs", "Tandoor"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 21,
      minDeliveryTime: 21,
      maxDeliveryTime: 21,
      slaString: "21 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "hitech-bawarchi-ayyappa-society-madhapur",
        city: "hyderabad",
      },
      cityState: "3",
      address: "Opp Indian Oil Petrol Bunk, Madhapur, Hyderabad",
      locality: "Kirshe Sapphire",
      parentId: 465,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FLAT125 off",
        shortDescriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "₹125 OFF",
        shortDescriptionList: [
          {
            meta: "Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3400,
        message: "",
        title: "Delivery Charge",
        amount: "3400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "1110",
        deliveryTime: 21,
        minDeliveryTime: 21,
        maxDeliveryTime: 21,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.6",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "487816",
      name: "Shoyu",
      uuid: "6e61b566-4657-4b3f-a181-1059eb3cea40",
      city: "3",
      area: "Madhapur",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "htihgh01jvclpaznbv88",
      cuisines: ["Asian", "Japanese"],
      tags: [],
      costForTwo: 120000,
      costForTwoString: "₹1200 FOR TWO",
      deliveryTime: 32,
      minDeliveryTime: 32,
      maxDeliveryTime: 32,
      slaString: "32 MINS",
      lastMileTravel: 2.5999999046325684,
      slugs: {
        restaurant: "shoyu-madhapur-madhapur",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "Sy No. 05, Door No. 1-52/1/G, 3rd Floor, Vijayalakshmi Pride, Madhapur, Hyderabad, Madhapur, Kandukur, Rangareddi, Telangana",
      locality: "Vijayalakshmi Pride",
      parentId: 255090,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "10% off",
        shortDescriptionList: [
          {
            meta: "10% off | Use PARTY",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "10% off | Use code PARTY",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "10% OFF",
        shortDescriptionList: [
          {
            meta: "Use PARTY",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "10% off | Use code PARTY",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2700,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2700,
        message: "",
        title: "Delivery Charge",
        amount: "2700",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5720508~p=7~eid=00000185-ed8e-952d-0ffa-dc1d002c0737",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "487816",
        deliveryTime: 32,
        minDeliveryTime: 32,
        maxDeliveryTime: 32,
        lastMileTravel: 2.5999999046325684,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.2",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "120129",
      name: "Shah Ghouse Hotel",
      uuid: "a3177899-355f-4109-8a1f-b24b31afbcd8",
      city: "3",
      area: "Land Mark Residency",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "von4k7mxgbgv0w58apx6",
      cuisines: ["Biryani", "North Indian", "Chinese", "Mughlai", "Tandoor"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 21,
      minDeliveryTime: 21,
      maxDeliveryTime: 21,
      slaString: "21 MINS",
      lastMileTravel: 4.400000095367432,
      slugs: {
        restaurant: "shah-ghouse-hotel-restaurant-kondapur-kondapur",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "2-25/A, Beside Apollo Hospital, Near Kondapur Kothaguda 'X' Road, Kondapur, Hyderabad",
      locality: "Kothaguda 'X' Road",
      parentId: 19271,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "10% off",
        shortDescriptionList: [
          {
            meta: "10% off | Use JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "10% off up to ₹100 on orders above ₹479 | Use code JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "10% OFF",
        shortDescriptionList: [
          {
            meta: "Use JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "10% off up to ₹100 on orders above ₹479 | Use code JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 4100,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 4100,
        message: "",
        title: "Delivery Charge",
        amount: "4100",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 1,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4.4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "120129",
        deliveryTime: 21,
        minDeliveryTime: 21,
        maxDeliveryTime: 21,
        lastMileTravel: 4.400000095367432,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "IT_IS_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.8",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "16177",
      name: "Shree Santosh Family Dhaba",
      uuid: "a9437b86-8647-4b5e-9d7c-0cd53ab18295",
      city: "3",
      area: "Mega Hills",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "pvziijk32nbka9yhvbj2",
      cuisines: ["North Indian", "Chinese"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 23,
      minDeliveryTime: 23,
      maxDeliveryTime: 23,
      slaString: "23 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "shree-santosh-family-dhaba-madhapur-madhapur",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "Pillar No C 1733, Above Big C Mobile, Madhapur, Hyderabad, 500081",
      locality: "Madhapur",
      parentId: 3003,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FLAT125 off",
        shortDescriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "₹125 OFF",
        shortDescriptionList: [
          {
            meta: "Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3400,
        message: "",
        title: "Delivery Charge",
        amount: "3400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5746224~p=10~eid=00000185-ed8e-952d-0ffa-dc1e002c0a2d",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "16177",
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.7",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "2790",
      name: "Kritunga Restaurant",
      uuid: "3d17521e-0e95-4b06-8cb8-73457a0a4bc2",
      city: "3",
      area: "Ameerpet",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "cfyerwmg4tpsrv5dsssk",
      cuisines: [
        "Biryani",
        "Andhra",
        "Rayalaseema",
        "South Indian",
        "North Indian",
        "Chinese",
      ],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 37,
      minDeliveryTime: 37,
      maxDeliveryTime: 37,
      slaString: "37 MINS",
      lastMileTravel: 8.199999809265137,
      slugs: {
        restaurant: "kritunga-restaurant-ameerpet",
        city: "hyderabad",
      },
      cityState: "3",
      address: "8/3/214/1/2, Srinivasa Nagar West, Ameerpet",
      locality: "Srinivasa Nagar",
      parentId: 20088,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 7100,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 7100,
        message: "",
        title: "Delivery Charge",
        amount: "7100",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "Closes soon",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "8.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "2790",
        deliveryTime: 37,
        minDeliveryTime: 37,
        maxDeliveryTime: 37,
        lastMileTravel: 8.199999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.8",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "398865",
      name: "Satti babu Biryani",
      uuid: "2b168d2d-0e96-4f96-93af-0bf6a1129405",
      city: "3",
      area: "Kukatpally",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "iopedxprr3nhibffb3ox",
      cuisines: [
        "Biryani",
        "Andhra",
        "Beverages",
        "Hyderabadi",
        "Fast Food",
        "Snacks",
        "Indian",
      ],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 28,
      minDeliveryTime: 28,
      maxDeliveryTime: 28,
      slaString: "28 MINS",
      lastMileTravel: 6.599999904632568,
      slugs: {
        restaurant: "satti-babu-biryani-kukatpally-kukatpally",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "#11-5-151/1, Pillar no 898, bhavani nagar,Moosapet, Hyderabad,500018",
      locality: "Kukatpally",
      parentId: 254591,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 5500,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 5500,
        message: "",
        title: "Delivery Charge",
        amount: "5500",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 1,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "398865",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        lastMileTravel: 6.599999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "IT_IS_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.5",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "431030",
      name: "Haldiram's Restaurant",
      uuid: "c3abe38a-c10e-4fee-9055-99e2b4aeaeca",
      city: "3",
      area: "Madhapur",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "ymwjojqftilodijsj1np",
      cuisines: ["Snacks", "Indian"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 28,
      minDeliveryTime: 28,
      maxDeliveryTime: 28,
      slaString: "28 MINS",
      lastMileTravel: 3.700000047683716,
      slugs: {
        restaurant: "haldirams-madhapur-madhapur-2",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "Plot no.2, Phase - I, Sy. No. 83/1, Raidurg Panmaktha Village, Serilingampally, Hyderabad",
      locality: "Raidurg Panmaktha Village",
      parentId: 351771,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3400,
        message: "",
        title: "Delivery Charge",
        amount: "3400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5788363~p=31~eid=00000185-ed8e-952d-0ffa-dc25002c1f4a",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "431030",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        lastMileTravel: 3.700000047683716,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.2",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "248771",
      name: "Raju Gari Biryani",
      uuid: "d28f6658-a92c-40ce-9d33-4233e075fd11",
      city: "3",
      area: "Chanda Naik Nagar",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "dunodvswg5nttqsl39kr",
      cuisines: ["Indian"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 14,
      minDeliveryTime: 14,
      maxDeliveryTime: 14,
      slaString: "14 MINS",
      lastMileTravel: 1.7000000476837158,
      slugs: {
        restaurant: "raju-gari-biryani-gachibowli-gachibowli",
        city: "hyderabad",
      },
      cityState: "3",
      address: "PLOT NO-64, AYYAPA SOCIETY,MADHAPUR,HYDERABAD,INDIA,500081",
      locality: "AYYAPA SOCIETY, MADHAPUR.",
      parentId: 165947,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FLAT125 off",
        shortDescriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "₹125 OFF",
        shortDescriptionList: [
          {
            meta: "Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2700,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2700,
        message: "",
        title: "Delivery Charge",
        amount: "2700",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "248771",
        deliveryTime: 14,
        minDeliveryTime: 14,
        maxDeliveryTime: 14,
        lastMileTravel: 1.7000000476837158,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.4",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "40781",
      name: "Punjabi Affair",
      uuid: "04df0627-abb7-40e7-84e8-d3832888db1c",
      city: "3",
      area: "Madhapur",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "s9aepmudegmtjtjhiyfx",
      cuisines: ["North Indian", "Punjabi", "Tandoor", "Chinese"],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 27,
      minDeliveryTime: 27,
      maxDeliveryTime: 27,
      slaString: "27 MINS",
      lastMileTravel: 2.299999952316284,
      slugs: {
        restaurant: "punjabi-affair-madhapur-madhapur",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "Oyster Uptown Building, 1st Floor, Opposite Krishe Sapphire Building, Hitech City Road, Madhapur, Hyderabad, Telangana 500081, India",
      locality: "Madhapur",
      parentId: 735,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "40% off",
        shortDescriptionList: [
          {
            meta: "40% off | Use GUILTFREEJAN",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹100 | Use code GUILTFREEJAN",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "40% OFF",
        shortDescriptionList: [
          {
            meta: "Use GUILTFREEJAN",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹100 | Use code GUILTFREEJAN",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2700,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2700,
        message: "",
        title: "Delivery Charge",
        amount: "2700",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5674032~p=16~eid=00000185-ed8e-952d-0ffa-dc20002c1049",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "40781",
        deliveryTime: 27,
        minDeliveryTime: 27,
        maxDeliveryTime: 27,
        lastMileTravel: 2.299999952316284,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "70891",
      name: "Vasista's Sri Lakshmi",
      uuid: "46869fcb-0908-4fbd-8465-c99d8880ea5e",
      city: "3",
      area: "Kondapur Main Road",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "x9xjymfjmmupziz6whzj",
      cuisines: ["Biryani", "North Indian", "Andhra", "Chinese", "Mughlai"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 5.599999904632568,
      slugs: {
        restaurant: "vasista-sri-lakshmi-kondapur-kondapur",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "1-55/12/M/1-A-5-B, Kondapur Main Road, Gautami Enclave, Kondapur, Hyderabad, Telangana 500084, India",
      locality: "Kondapur Main Road",
      parentId: 387872,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "30% off",
        shortDescriptionList: [
          {
            meta: "30% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "30% off up to ₹75 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "30% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "30% off up to ₹75 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 4800,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 4800,
        message: "",
        title: "Delivery Charge",
        amount: "4800",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 1,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "5.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "70891",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 5.599999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "IT_IS_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
];

const RestuarentCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  // const {name, cuisines, avgRating, cloudinaryImageId}= restuarent.data

  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restuarentcard">
      {restuarentList.map((restuarent) => {
        return <RestuarentCard {...restuarent.data} key={restuarent.data.id} />;
      })}
    </div>
  );
};

const Footer = () => {
  return <div> footer</div>;
};

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
