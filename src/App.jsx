import React from 'react';
import { Cart, FlexContent, Footer, Hero, Navbar, Sales} from './components';
import { heroapi, popularsales, toprateslaes, highlight, sneaker, footerAPI } from './data/data.js';

const App = () => {
  return (
   <>
      <Navbar/>
      <Cart />
      <main className='flex flex-col gap-16 relative'>
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
      <Footer footerAPI={footerAPI} />
   </>
  )
}

export default App;