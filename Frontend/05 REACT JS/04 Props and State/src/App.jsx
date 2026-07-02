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

// // counter function
// import React, { useState } from "react";
// // import Navbar from "./components/Navbar";
// // import Hero from "./components/Hero";
// // import Footer from "./components/Footer";
// const App = () => {
//   let [count, setCount] = useState(0);
//   // console.log('hello');
//   return (
//     <div>
//       <h1>Count : {count}</h1>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//           // count++;
//           // console.log(count);
//         }}
//       >
//         Click to Increase
//       </button>
//       {/* <Navbar />
//       <Hero />
//       <Footer /> */}
//     </div>
//   );
// };
// export default App;


// Counter other example
import React, { useState } from "react";
const App = () => {
  let [rev, setRev] = useState(true);
  console.log(rev);
  return (
    <div>
      <h1>value : true</h1>
      <button onClick={() => {
        setRev(false)
      }}>Change</button>
    </div>
  );
};
export default App;
