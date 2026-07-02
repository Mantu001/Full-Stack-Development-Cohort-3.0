// import React from 'react'
// // import noName, {one, two} from './test'
// const App = () => {
//   // noName()
//   // one()
//   // two()
//   return (
//     <div>
//       <h1>Boiler Plate of React is rafce</h1>
//     </div>
//   )
// }
// export default App

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
