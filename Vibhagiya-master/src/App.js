import React from 'react';
import Home1 from './components/Home/Home1';
import Header from './components/Layout/Header/Header';
// import Header2 from './components/Layout/Header/Header2';
// import Home2 from './components/Home/Home2';
// import CategoryType from './components/CategoryType/CategoryType';
import Footer from './components/Layout/Footer/Footer';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Benefits from './components/Benefits/Benefits';
import Trending from './components/Trending/Trending';
import Customer from './components/Customer/Customer';
import MobileApp from './components/MobileApp/MobileApp';
import Map from './components/Map/Map';
import Offer from './components/Offer/Offer';
import PlayStore from './components/PlayStore/PlayStore';
import Categories from './components/Categories/Categories';
import About from './components/About/About';
import Social from './components/Social/Social';
import ContactInfo from './components/ContactInfo/ContactInfo';
import WhatsApp from './components/WhatsApp/WhatsApp';
import BrandPartners from './components/BrandPartners/BrandPartners';
import AboutDirector from './components/AboutDirector/AboutDirector';
import VissionMission from './components/VissionMission/VissionMission';

function App() {
  return (
    <>
      <Header />
      {/* <Header2 /> */}
      <PlayStore />
      <WhatsApp />
      <Home1 />
      {/* <Home2 /> */}
      {/* <CategoryType /> */}
      <BrandPartners />
      <Contact />
      <Services />
      <Categories />
      <Offer />
      <Benefits />
      <Trending />
      <Customer />
      <MobileApp />
      <VissionMission />
      <Map />
      <AboutDirector />
      <About />
      <Social />
      <Footer />
      <ContactInfo />
    </>
  );
}

export default App;
