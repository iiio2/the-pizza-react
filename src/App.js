import React from 'react';
import Hero from './components/hero';
import Navigation from './components/navbar';
import EventAndTime from './components/eventAndTime';
import Highlights from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/footer';

const App = () => {
  return (
    <main>
      <Navigation />
      <Hero />
      <EventAndTime />
      <Highlights />
      <Pricing />
      <Location />
      <Footer />
    </main>
  );
};

export default App;
