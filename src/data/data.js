import heroimg from "../assets/hero.png";

import hightlightimg from "../assets/hightlightimg.png";
import featured from "../assets/featured.png";

import clip from "../assets/video/clip.mp4";
import vcover1 from "../assets/video/vcover1.png";
import vcover2 from "../assets/video/vcover2.png";
import vcover3 from "../assets/video/vcover3.png";

import psale1 from "../assets/spacesuit.png";
import psale2 from "../assets/pngegg.png";
import psale3 from "../assets/moonrock.png";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";


import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import messenger from "../assets/messenger.svg";
import search from '../assets/search.png';





const heroapi = {
  title: "S T A R S C A P E",
  subtitle: "",
  img: heroimg,
  btntext: "Explore Product",

  searchbar: {
    placeholder: "Explore",
    img: search,
  },

  videos: [
    { imgsrc: vcover1, clip: clip },
    { imgsrc: vcover2, clip: clip },
    { imgsrc: vcover3, clip: clip },
  ],
  sociallinks: [
    { icon: facebook },
    { icon: messenger },
    { icon: instagram },
    { icon: twitter },
    { icon: youtube },
  ],
};

const popularsales = {
  title: "Popular on Starscape",
  items: [
    {
      id: "0p0x1",
      title: "Celstron Telescope",
      text: "Telescopes",
      rating: "4.9",
      btn: "Buy Now",
      img: psale2,
      price: "449",
      color: "from-blue-600 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0p0x2",
      title: "Apollo A7L Deluxe Spacesuit Replica",
      text: "Spacesuit models",
      rating: "4.5",
      btn: "Buy Now",
      img: psale1,
      price: "3500",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0p0x3",
      title: "Agoudal 2.0g",
      text: "Meteroits",
      rating: "5+",
      btn: "Buy Now",
      img: psale3,
      price: "78",
      color: "from-violet-500 to-indigo-500",
      shadow: "shadow-lg shadow-violet-500",
    },
  ],
};

const highlight = {
  heading: "OUR STORY",
 
  text: "Starscape was established as a local store with the purpose is to make science and astronomy more accessible to everyone. Wehave now grown to a worldwide chain. We take action by building community, protecting our planet and increasing access to space science",
  btn: "Join Starscape Community",
  url: "",
  img: hightlightimg,
  
};

const sneaker = {
  heading: "FEATURED",
  title: "ASTRA MAGAZINE",
  text: "Won AstroMania award for the best magazine of 2022! Place your order now.",
  btn: "Explore More",
  url: "https://sneakernews.com/2022/03/21/nike-lebron-2-retro-white-midnight-navy-varsity-crimson-dr0826-100/",
  img: featured,
};

const toprateslaes = {
  title: "Top Rated Sales",
  items: [
    {
      id: "0M0x1",
      title: "Personal Planetarium",
      text: "Planetariums",
      rating: "5+",
      btn: "Buy Now",
      img: product1,
      price: "50",
      color: "from-sky-600 to-indigo-600",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x2",
      title: "Royal Observatory Telescope",
      text: "Telescopes",
      rating: "5+",
      btn: "Buy Now",
      img: product2,
      price: "150",
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0M0x3",
      title: "Space Shuttle Model",
      text: "Space models",
      rating: "5+",
      btn: "Buy Now",
      img: product3,
      price: "75",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0M0x4",
      title: "Constellation Globe",
      text: "Space models",
      rating: "5+",
      btn: "Buy Now",
      img: product4,
      price: "25",
      color: "from-orange-500 to-amber-500",
      shadow: "shadow-lg shadow-orange-500",
    },
   
   
  ],
};





const footerAPI = {
  titles: [ {title: "About Nike"},{title: "Get Help"},{title: "Company"} ],
  links: [
    [
      {link: "News"},
      {link: "Careers"},
      {link: "Investors"},
      {link: "Prupose"},
      {link: "Sustainability"},
    ],
    [
      {link: "Order Status"},
      {link: "Shipping & Delivery"},
      {link: "Payment Options"},
      {link: "Gift Card Balance"},
      {link: "Contact Us"},
      {link: "FAQ"},
      {link: "Blog"},
    ],
    [
      {link: "Gift Cards"},
      {link: "Promotions"},
      {link: "Find A Store"},
      {link: "Signup"},
      {link: "Nike Jouneral"},
      {link: "Send Us Feeback"},
    ],
  ]
};


export { heroapi, footerAPI, sneaker, highlight, toprateslaes, popularsales };
