import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import React from 'react';
import {FlexContent, Footer, Hero, Navbar, Sales} from './components';
import { heroapi, popularsales, toprateslaes, highlight, sneaker, footerAPI } from './data/data.js';
import ORderDone from "./components/stripe/OrderDone";
import About from "./pages/About"; // import the About component
import Products from "./pages/Products";
import { Link } from "react-router-dom";
import PrivateRoute from "./pages/PrivateRoute";
import ProductsPage from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart"



const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<main className='flex flex-col gap-16 relative'>
            <Hero heroapi={heroapi} />
            <Sales endpoint={popularsales} ifExists />
            <br />
            <FlexContent endpoint={highlight} ifExists />
            <Sales endpoint={toprateslaes} />
            <br />
            <br />
            <FlexContent endpoint={sneaker} />
            <br />
            <br />
            <br />
          </main>
        }/>
        <Route path="/" element={<Hero />}/>
        <Route path="/about" element={<About />}/> // add the Route for the About component
        <Route path="/products" element={<Products />}/> // add the Route for the About component
        <Route path="/cart" element={<Cart />}/>
        <Route path="/products/:id" element={<SingleProduct />} />

      </Routes>
      <Footer footerAPI={footerAPI} />
    </BrowserRouter>
  )
}

export default App;