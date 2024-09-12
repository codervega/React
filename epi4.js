import React from "react";
import ReactDOM from "react-dom/client"
let root = ReactDOM.createRoot(document.getElementById("abhi"));



let Card = (props)=>{
  const { resdata } = props;
  return (
  <div className="container">
    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resdata.info.cloudinaryImageId} alt='abc' className="res-img"></img>
    <hr></hr>
    <h2>{resdata.info.name}</h2>
    <h4>{resdata.info.cuisines.join(", ")}</h4>
    <h4>{resdata.info.avgRating}</h4>
    <h4>{resdata.info.sla.slaString}</h4>
    
  </div>
)}
const resobj =[
  {
  "info": {
  "id": "77949",
  "name": "Burger King",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_77949.JPG",
  "locality": "Gandhi Bazar",
  "areaName": "Basavanagudi",
  "costForTwo": "₹350 for two",
  "cuisines": [
  "Burgers",
  "American"
  ],
  "avgRating": 4.3,
  "parentId": "166",
  "avgRatingString": "4.3",
  "totalRatingsString": "32K+",
  "sla": {
  "deliveryTime": 41,
  "lastMileTravel": 3,
  "serviceability": "SERVICEABLE",
  "slaString": "40-45 mins",
  "lastMileTravelString": "3.0 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-09-11 23:59:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
  "description": "Delivery!"
  },
  {
  "imageId": "Rxawards/_CATEGORY-Burger.png",
  "description": "Delivery!"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "Delivery!",
  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
  }
  },
  {
  "attributes": {
  "description": "Delivery!",
  "imageId": "Rxawards/_CATEGORY-Burger.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "ITEMS",
  "subHeader": "AT ₹99"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/city/bangalore/burger-king-gandhi-bazar-basavanagudi-rest77949",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "822315",
  "name": "Subway",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/2/1776fa6d-0969-4a43-a0d3-378ca449cede_822315.jpg",
  "locality": "Langford Road",
  "areaName": "Richmond Town",
  "costForTwo": "₹350 for two",
  "cuisines": [
  "Salads",
  "Snacks",
  "Desserts",
  "Beverages"
  ],
  "avgRating": 4.4,
  "parentId": "2",
  "avgRatingString": "4.4",
  "totalRatingsString": "415",
  "sla": {
  "deliveryTime": 27,
  "lastMileTravel": 2.1,
  "serviceability": "SERVICEABLE",
  "slaString": "25-30 mins",
  "lastMileTravelString": "2.1 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-09-12 01:00:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
  "description": "Delivery!"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "Delivery!",
  "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "ITEMS",
  "subHeader": "AT ₹119"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/city/bangalore/subway-langford-road-richmond-town-rest822315",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "352791",
  "name": "Grameen Kulfi",
  "cloudinaryImageId": "gjcslopkyvnsc1gjjguq",
  "locality": "8th Block",
  "areaName": "Koramangala",
  "costForTwo": "₹120 for two",
  "cuisines": [
  "Ice Cream",
  "Desserts"
  ],
  "avgRating": 4.8,
  "veg": true,
  "parentId": "12175",
  "avgRatingString": "4.8",
  "totalRatingsString": "695",
  "sla": {
  "deliveryTime": 34,
  "lastMileTravel": 5.5,
  "serviceability": "SERVICEABLE",
  "slaString": "30-35 mins",
  "lastMileTravelString": "5.5 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-09-11 23:00:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "v1695133679/badges/Pure_Veg111.png",
  "description": "pureveg"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "pureveg",
  "imageId": "v1695133679/badges/Pure_Veg111.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "₹125 OFF",
  "subHeader": "ABOVE ₹399",
  "discountTag": "FLAT DEAL"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/city/bangalore/grameen-kulfi-8th-block-koramangala-rest352791",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "622202",
  "name": "MOJO Pizza - 2X Toppings",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/295f1bfc-237b-4bd4-832b-a23fdf08f8aa_622202.JPG",
  "locality": "Langford Road",
  "areaName": "Shantinagar",
  "costForTwo": "₹250 for two",
  "cuisines": [
  "Pizzas",
  "Italian",
  "Fast Food",
  "Desserts"
  ],
  "avgRating": 4.6,
  "parentId": "11329",
  "avgRatingString": "4.6",
  "totalRatingsString": "444",
  "sla": {
  "deliveryTime": 20,
  "lastMileTravel": 2,
  "serviceability": "SERVICEABLE",
  "slaString": "15-25 mins",
  "lastMileTravelString": "2.0 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-09-12 02:00:00",
  "opened": true
  },
  "badges": {
  "textExtendedBadges": [
  {
  "iconId": "guiltfree/GF_Logo_android_3x",
  "shortDescription": "options available",
  "fontColor": "#7E808C"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {
  "badgeObject": [
  {
  "attributes": {
  "description": "",
  "fontColor": "#7E808C",
  "iconId": "guiltfree/GF_Logo_android_3x",
  "shortDescription": "options available"
  }
  }
  ]
  }
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "₹100 OFF",
  "subHeader": "ABOVE ₹299",
  "discountTag": "FLAT DEAL"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/city/bangalore/mojo-pizza-2x-toppings-langford-road-shantinagar-rest622202",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "750396",
  "name": "Daily Kitchen - Homely Meals",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/741d7d41-1341-4358-b6e0-cc22b8e82f9a_750396.JPG",
  "locality": "Lakshmi Road",
  "areaName": "Langford Road",
  "costForTwo": "₹400 for two",
  "cuisines": [
  "Home Food",
  "Indian",
  "North Indian",
  "Thalis"
  ],
  "avgRating": 4.4,
  "parentId": "444382",
  "avgRatingString": "4.4",
  "totalRatingsString": "313",
  "sla": {
  "deliveryTime": 20,
  "lastMileTravel": 2,
  "serviceability": "SERVICEABLE",
  "slaString": "15-25 mins",
  "lastMileTravelString": "2.0 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-09-12 02:00:00",
  "opened": true
  },
  "badges": {
  "textExtendedBadges": [
  {
  "iconId": "guiltfree/GF_Logo_android_3x",
  "shortDescription": "options available",
  "fontColor": "#7E808C"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {
  "badgeObject": [
  {
  "attributes": {
  "description": "",
  "fontColor": "#7E808C",
  "iconId": "guiltfree/GF_Logo_android_3x",
  "shortDescription": "options available"
  }
  }
  ]
  }
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "₹100 OFF",
  "subHeader": "ABOVE ₹299",
  "discountTag": "FLAT DEAL"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/city/bangalore/daily-kitchen-homely-meals-lakshmi-road-langford-road-rest750396",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "681612",
  "name": "LeanCrust Pizza- ThinCrust Experts",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/14414940-565f-4b31-8880-eb44478a5ec0_681612.jpg",
  "locality": "Lakshmi Road",
  "areaName": "Shanti Nagar",
  "costForTwo": "₹300 for two",
  "cuisines": [
  "Pizzas",
  "Italian",
  "Desserts"
  ],
  "avgRating": 4.6,
  "parentId": "11216",
  "avgRatingString": "4.6",
  "totalRatingsString": "218",
  "sla": {
  "deliveryTime": 20,
  "lastMileTravel": 2,
  "serviceability": "SERVICEABLE",
  "slaString": "15-25 mins",
  "lastMileTravelString": "2.0 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-09-12 02:00:00",
  "opened": true
  },
  "badges": {
  "textExtendedBadges": [
  {
  "iconId": "guiltfree/GF_Logo_android_3x",
  "shortDescription": "options available",
  "fontColor": "#7E808C"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {
  "badgeObject": [
  {
  "attributes": {
  "description": "",
  "fontColor": "#7E808C",
  "iconId": "guiltfree/GF_Logo_android_3x",
  "shortDescription": "options available"
  }
  }
  ]
  }
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "₹100 OFF",
  "subHeader": "ABOVE ₹299",
  "discountTag": "FLAT DEAL"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/city/bangalore/leancrust-pizza-thincrust-experts-lakshmi-road-shanti-nagar-rest681612",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "12808",
  "name": "A2B - Adyar Ananda Bhavan",
  "cloudinaryImageId": "pdod4o1em9potwsd22rs",
  "locality": "Shanti Nagar",
  "areaName": "Shanti Nagar",
  "costForTwo": "₹300 for two",
  "cuisines": [
  "South Indian",
  "North Indian",
  "Sweets",
  "Chinese"
  ],
  "avgRating": 4.6,
  "parentId": "22",
  "avgRatingString": "4.6",
  "totalRatingsString": "28K+",
  "sla": {
  "deliveryTime": 34,
  "lastMileTravel": 2.6,
  "serviceability": "SERVICEABLE",
  "slaString": "30-35 mins",
  "lastMileTravelString": "2.6 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-09-11 22:30:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png",
  "description": "Delivery!"
  },
  {
  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
  "description": "Delivery!"
  },
  {
  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
  "description": "OnlyOnSwiggy"
  },
  {
  "imageId": "v1695133679/badges/Pure_Veg111.png",
  "description": "pureveg"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "Delivery!",
  "imageId": "Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png"
  }
  },
  {
  "attributes": {
  "description": "Delivery!",
  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png"
  }
  },
  {
  "attributes": {
  "description": "OnlyOnSwiggy",
  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
  }
  },
  {
  "attributes": {
  "description": "pureveg",
  "imageId": "v1695133679/badges/Pure_Veg111.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "₹125 OFF",
  "subHeader": "ABOVE ₹249",
  "discountTag": "FLAT DEAL"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "4.1",
  "ratingCount": "10K+"
  },
  "source": "GOOGLE",
  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/city/bangalore/a2b-adyar-ananda-bhavan-shanti-nagar-rest12808",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "432976",
  "name": "KFC",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/9869efb0-ef0e-41eb-bffa-9d6e03eef55e_432976.JPG",
  "locality": "Double Road",
  "areaName": "Shanti Nagar",
  "costForTwo": "₹400 for two",
  "cuisines": [
  "Burgers",
  "Fast Food",
  "Rolls & Wraps"
  ],
  "avgRating": 4.3,
  "parentId": "547",
  "avgRatingString": "4.3",
  "totalRatingsString": "3.3K+",
  "sla": {
  "deliveryTime": 29,
  "lastMileTravel": 1.9,
  "serviceability": "SERVICEABLE",
  "slaString": "25-30 mins",
  "lastMileTravelString": "1.9 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-09-11 23:00:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "40% OFF",
  "subHeader": "UPTO ₹80"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/city/bangalore/kfc-double-road-shanti-nagar-rest432976",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "424558",
  "name": "La Pino'z Pizza",
  "cloudinaryImageId": "mocil3npmwpcdcfaxql1",
  "locality": "Gandhi Bazaar Main Road",
  "areaName": "Basavanagudi",
  "costForTwo": "₹220 for two",
  "cuisines": [
  "Pizzas",
  "Pastas",
  "Italian",
  "Desserts",
  "Beverages"
  ],
  "avgRating": 4.3,
  "parentId": "4961",
  "avgRatingString": "4.3",
  "totalRatingsString": "4.2K+",
  "sla": {
  "deliveryTime": 36,
  "lastMileTravel": 2.9,
  "serviceability": "SERVICEABLE",
  "slaString": "35-40 mins",
  "lastMileTravelString": "2.9 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-09-12 00:30:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "50% OFF",
  "subHeader": "UPTO ₹100"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "4.1",
  "ratingCount": "1.2K+"
  },
  "source": "GOOGLE",
  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/city/bangalore/la-pinoz-pizza-gandhi-bazaar-main-road-basavanagudi-rest424558",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "23846",
  "name": "Domino's Pizza",
  "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
  "locality": "Rehinus Street",
  "areaName": "Richmond Town",
  "costForTwo": "₹400 for two",
  "cuisines": [
  "Pizzas",
  "Italian",
  "Pastas",
  "Desserts"
  ],
  "avgRating": 4.3,
  "parentId": "2456",
  "avgRatingString": "4.3",
  "totalRatingsString": "17K+",
  "sla": {
  "deliveryTime": 25,
  "lastMileTravel": 2.4,
  "serviceability": "SERVICEABLE",
  "slaString": "20-25 mins",
  "lastMileTravelString": "2.4 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-09-12 02:59:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
  "description": "Delivery!"
  },
  {
  "imageId": "Rxawards/_CATEGORY-Pizza.png",
  "description": "Delivery!"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "Delivery!",
  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
  }
  },
  {
  "attributes": {
  "description": "Delivery!",
  "imageId": "Rxawards/_CATEGORY-Pizza.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "₹150 OFF",
  "subHeader": "ABOVE ₹299",
  "discountTag": "FLAT DEAL"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "3.8",
  "ratingCount": "2.2K+"
  },
  "source": "GOOGLE",
  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/city/bangalore/dominos-pizza-rehinus-street-richmond-town-rest23846",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "10575",
  "name": "Pizza Hut",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/5b9c53df-e0cb-48fc-ac31-f02735592edc_10575.jpg",
  "locality": "Richmond Town",
  "areaName": "Shanti Nagar",
  "costForTwo": "₹600 for two",
  "cuisines": [
  "Pizzas"
  ],
  "avgRating": 4.3,
  "parentId": "721",
  "avgRatingString": "4.3",
  "totalRatingsString": "10K+",
  "sla": {
  "deliveryTime": 35,
  "lastMileTravel": 2,
  "serviceability": "SERVICEABLE",
  "slaString": "35-40 mins",
  "lastMileTravelString": "2.0 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-09-12 01:00:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "ITEMS",
  "subHeader": "AT ₹189"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "4.0",
  "ratingCount": "1.6K+"
  },
  "source": "GOOGLE",
  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/city/bangalore/pizza-hut-richmond-town-shanti-nagar-rest10575",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "570511",
  "name": "Bakingo",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/5/4116f512-3b8d-4148-9f29-bfff041dca14_570511.JPG",
  "locality": "Puhlong X-road",
  "areaName": "Vasanth Nagar",
  "costForTwo": "₹299 for two",
  "cuisines": [
  "Bakery",
  "Desserts",
  "Beverages",
  "Snacks"
  ],
  "avgRating": 4.6,
  "parentId": "3818",
  "avgRatingString": "4.6",
  "totalRatingsString": "3.0K+",
  "sla": {
  "deliveryTime": 33,
  "lastMileTravel": 4.7,
  "serviceability": "SERVICEABLE",
  "slaString": "30-35 mins",
  "lastMileTravelString": "4.7 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-09-12 01:00:00",
  "opened": true
  },
  "badges": {
  "textExtendedBadges": [
  {
  "iconId": "Ratnesh_Badges/perfect-cake-3.svg",
  "shortDescription": "Perfect cake delivery",
  "fontColor": "#7E808C"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {
  "badgeObject": [
  {
  "attributes": {
  "description": "",
  "fontColor": "#7E808C",
  "iconId": "Ratnesh_Badges/perfect-cake-3.svg",
  "shortDescription": "Perfect cake delivery"
  }
  }
  ]
  }
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "60% OFF",
  "subHeader": "UPTO ₹120"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/city/bangalore/bakingo-puhlong-x-road-vasanth-nagar-rest570511",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "643832",
  "name": "WeFit - Protein Bowls, Salads & Sandwiches",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/23/d32dda02-869b-46d5-b16c-47c4c14314e2_643832.JPG",
  "locality": "Langford Road",
  "areaName": "Santhinagar",
  "costForTwo": "₹250 for two",
  "cuisines": [
  "Healthy Food",
  "Salads",
  "Keto",
  "Snacks"
  ],
  "avgRating": 4.7,
  "parentId": "355285",
  "avgRatingString": "4.7",
  "totalRatingsString": "402",
  "sla": {
  "deliveryTime": 25,
  "lastMileTravel": 2,
  "serviceability": "SERVICEABLE",
  "slaString": "20-30 mins",
  "lastMileTravelString": "2.0 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-09-12 02:00:00",
  "opened": true
  },
  "badges": {
  "textExtendedBadges": [
  {
  "iconId": "guiltfree/GF_Logo_android_3x",
  "shortDescription": "brand",
  "fontColor": "#7E808C"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {
  "badgeObject": [
  {
  "attributes": {
  "description": "",
  "fontColor": "#7E808C",
  "iconId": "guiltfree/GF_Logo_android_3x",
  "shortDescription": "brand"
  }
  }
  ]
  }
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "₹100 OFF",
  "subHeader": "ABOVE ₹299",
  "discountTag": "FLAT DEAL"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/city/bangalore/wefit-protein-bowls-salads-and-sandwiches-langford-road-santhinagar-rest643832",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "503003",
  "name": "ZAZA Mughal Biryani",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/a4f027d0-378c-4288-8d62-e1f5fb346b4a_503003.JPG",
  "locality": "Lakshmi Nagar Road",
  "areaName": "Shanti Nagar",
  "costForTwo": "₹250 for two",
  "cuisines": [
  "Biryani",
  "North Indian",
  "Awadhi"
  ],
  "avgRating": 4.4,
  "parentId": "22473",
  "avgRatingString": "4.4",
  "totalRatingsString": "359",
  "sla": {
  "deliveryTime": 15,
  "lastMileTravel": 2,
  "serviceability": "SERVICEABLE",
  "slaString": "10-20 mins",
  "lastMileTravelString": "2.0 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-09-12 02:00:00",
  "opened": true
  },
  "badges": {
  "textExtendedBadges": [
  {
  "iconId": "guiltfree/GF_Logo_android_3x",
  "shortDescription": "options available",
  "fontColor": "#7E808C"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {
  "badgeObject": [
  {
  "attributes": {
  "description": "",
  "fontColor": "#7E808C",
  "iconId": "guiltfree/GF_Logo_android_3x",
  "shortDescription": "options available"
  }
  }
  ]
  }
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "₹100 OFF",
  "subHeader": "ABOVE ₹299",
  "discountTag": "FLAT DEAL"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/city/bangalore/zaza-mughal-biryani-lakshmi-nagar-road-shanti-nagar-rest503003",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "503002",
  "name": "NH1 Bowls - Highway To North",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/34185028-1357-4551-a4f4-0d545597a73e_503002.JPG",
  "locality": "Lakshmi Road",
  "areaName": "Shanti Nagar",
  "costForTwo": "₹250 for two",
  "cuisines": [
  "North Indian",
  "Punjabi",
  "Home Food"
  ],
  "avgRating": 4.6,
  "parentId": "22452",
  "avgRatingString": "4.6",
  "totalRatingsString": "538",
  "sla": {
  "deliveryTime": 15,
  "lastMileTravel": 2,
  "serviceability": "SERVICEABLE",
  "slaString": "10-20 mins",
  "lastMileTravelString": "2.0 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-09-12 02:00:00",
  "opened": true
  },
  "badges": {
  "textExtendedBadges": [
  {
  "iconId": "guiltfree/GF_Logo_android_3x",
  "shortDescription": "options available",
  "fontColor": "#7E808C"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {
  "badgeObject": [
  {
  "attributes": {
  "description": "",
  "fontColor": "#7E808C",
  "iconId": "guiltfree/GF_Logo_android_3x",
  "shortDescription": "options available"
  }
  }
  ]
  }
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "₹100 OFF",
  "subHeader": "ABOVE ₹299",
  "discountTag": "FLAT DEAL"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/city/bangalore/nh1-bowls-highway-to-north-lakshmi-road-shanti-nagar-rest503002",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "688434",
  "name": "Kwality Walls Ice Cream and More",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/dfea08dc-9227-4ce8-addb-72012b13f58d_688434.JPG",
  "locality": "WEST PORTION",
  "areaName": "Shanthinagar",
  "costForTwo": "₹200 for two",
  "cuisines": [
  "Desserts",
  "Ice Cream",
  "Ice Cream Cakes"
  ],
  "avgRating": 4.5,
  "veg": true,
  "parentId": "582",
  "avgRatingString": "4.5",
  "totalRatingsString": "88",
  "sla": {
  "deliveryTime": 35,
  "lastMileTravel": 1.7,
  "serviceability": "SERVICEABLE",
  "slaString": "30-35 mins",
  "lastMileTravelString": "1.7 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-09-11 23:59:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "v1695133679/badges/Pure_Veg111.png",
  "description": "pureveg"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "pureveg",
  "imageId": "v1695133679/badges/Pure_Veg111.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "₹100 OFF",
  "subHeader": "ABOVE ₹349",
  "discountTag": "FLAT DEAL"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/city/bangalore/kwality-walls-ice-cream-and-more-west-portion-shanthinagar-rest688434",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "48230",
  "name": "Kanti Sweets",
  "cloudinaryImageId": "u0hhfifwmpsnobytv2yf",
  "locality": "Brigade Road",
  "areaName": "Central Bangalore",
  "costForTwo": "₹150 for two",
  "cuisines": [
  "Sweets"
  ],
  "avgRating": 4.7,
  "parentId": "4700",
  "avgRatingString": "4.7",
  "totalRatingsString": "5.8K+",
  "sla": {
  "deliveryTime": 43,
  "lastMileTravel": 3,
  "serviceability": "SERVICEABLE",
  "slaString": "40-45 mins",
  "lastMileTravelString": "3.0 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-09-11 22:00:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "Green%20Dot%20Awards/Best%20In%20Mithai.png",
  "description": "Delivery!"
  },
  {
  "imageId": "Rxawards/_CATEGORY-Mithai.png",
  "description": "Delivery!"
  },
  {
  "imageId": "v1695133679/badges/Pure_Veg111.png",
  "description": "pureveg"
  }
  ]
  },
  "isOpen": true,
  "aggregatedDiscountInfoV2": {},
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "Delivery!",
  "imageId": "Green%20Dot%20Awards/Best%20In%20Mithai.png"
  }
  },
  {
  "attributes": {
  "description": "Delivery!",
  "imageId": "Rxawards/_CATEGORY-Mithai.png"
  }
  },
  {
  "attributes": {
  "description": "pureveg",
  "imageId": "v1695133679/badges/Pure_Veg111.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "4.1",
  "ratingCount": "1.8K+"
  },
  "source": "GOOGLE",
  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/city/bangalore/kanti-sweets-brigade-road-central-bangalore-rest48230",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "58568",
  "name": "Sweet Chariot",
  "cloudinaryImageId": "aun89df8igfy1zu0xf5v",
  "locality": "Brigade Road",
  "areaName": "Ashok Nagar",
  "costForTwo": "₹200 for two",
  "cuisines": [
  "Desserts"
  ],
  "avgRating": 4.6,
  "parentId": "912",
  "avgRatingString": "4.6",
  "totalRatingsString": "495",
  "sla": {
  "deliveryTime": 33,
  "lastMileTravel": 3.6,
  "serviceability": "SERVICEABLE",
  "slaString": "30-35 mins",
  "lastMileTravelString": "3.6 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-09-11 21:00:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "aggregatedDiscountInfoV2": {},
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/city/bangalore/sweet-chariot-brigade-road-ashok-nagar-rest58568",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "146304",
  "name": "Hyderabad Biryaani House",
  "cloudinaryImageId": "taavokxehqfaugbzzhzk",
  "locality": "Victoria Road",
  "areaName": "Ashok Nagar",
  "costForTwo": "₹499 for two",
  "cuisines": [
  "Indian"
  ],
  "avgRating": 4.4,
  "parentId": "2403",
  "avgRatingString": "4.4",
  "totalRatingsString": "8.3K+",
  "sla": {
  "deliveryTime": 35,
  "lastMileTravel": 3.5,
  "serviceability": "SERVICEABLE",
  "slaString": "30-35 mins",
  "lastMileTravelString": "3.5 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-09-11 23:00:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "aggregatedDiscountInfoV2": {},
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/city/bangalore/hyderabad-biryaani-house-victoria-road-ashok-nagar-rest146304",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "160120",
  "name": "Asha Sweet Center - Since 1951",
  "cloudinaryImageId": "egm3aym4fa73hst2tv9b",
  "locality": "Gandhi Bazaar",
  "areaName": "Basavanagudi",
  "costForTwo": "₹250 for two",
  "cuisines": [
  "Sweets",
  "Snacks",
  "Fast Food",
  "Bakery",
  "Beverages"
  ],
  "avgRating": 4.6,
  "veg": true,
  "parentId": "472555",
  "avgRatingString": "4.6",
  "totalRatingsString": "4.5K+",
  "sla": {
  "deliveryTime": 26,
  "lastMileTravel": 3,
  "serviceability": "SERVICEABLE",
  "slaString": "25-30 mins",
  "lastMileTravelString": "3.0 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-09-11 21:30:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "Green%20Dot%20Awards/Best%20In%20Mithai.png",
  "description": "Delivery!"
  },
  {
  "imageId": "v1695133679/badges/Pure_Veg111.png",
  "description": "pureveg"
  }
  ],
  "textExtendedBadges": [
  {
  "iconId": "guiltfree/GF_Logo_android_3x",
  "shortDescription": "options available",
  "fontColor": "#7E808C"
  }
  ]
  },
  "isOpen": true,
  "aggregatedDiscountInfoV2": {},
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "Delivery!",
  "imageId": "Green%20Dot%20Awards/Best%20In%20Mithai.png"
  }
  },
  {
  "attributes": {
  "description": "pureveg",
  "imageId": "v1695133679/badges/Pure_Veg111.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {
  "badgeObject": [
  {
  "attributes": {
  "description": "",
  "fontColor": "#7E808C",
  "iconId": "guiltfree/GF_Logo_android_3x",
  "shortDescription": "options available"
  }
  }
  ]
  }
  }
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/city/bangalore/asha-sweet-center-since-1951-gandhi-bazaar-basavanagudi-rest160120",
  "type": "WEBLINK"
  }
  }
  ]
  

const Header = ()=>(
  <div className="head">
    <div>
      <img src="https://banner2.cleanpng.com/20180613/whi/aa7j7nkxw.webp" className="img-cl"></img>
    </div>
    <div className="nav">
      <ul className="nav-1">
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
        <li><a href="">Sign/login</a></li>
        <li><a href="">cart</a></li>
      </ul>

    </div>
  </div>
);
const Body = ()=>(
  <div className="boddy">
   <div className="Body1"><input type="text" placeholder="Seach" ></input>
   <span className="img1"><img src="https://www.pngall.com/wp-content/uploads/8/Vector-Search-PNG-Free-Download.png"></img></span>
   
   </div>
   <br></br>
   <div className="restaurant-card">
    {resobj.map((res)=>(
      <Card resdata={res} key = {res.info.id}/>
    ))}
    


    
   
</div>

   
   
  </div>
);
const Outer = ()=>(
  <div className="out">
    <Header></Header>
    <Body></Body>
  </div>

);
root.render(<Outer/>);