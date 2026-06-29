// let App = () => {
//   return (
//     <div>
//       <h1>hello</h1>
//       <p>mantu</p>
//     </div>
//   )
// }

import React from "react"

// let App = () => {
//   return 'Nabty jyanfa'
// }

import About from "./About";

let App = () => {
  return (
    <div>
      <h1>t1</h1>
      <h2>this is h2</h2>
      <h3>This is h3</h3>
      <About element={<h1>element attribut</h1>} />
      {/* <About id="hello" width="100px"/> */}
      {/* is js file me html ke andar about ko call karne ka tarika */}
      {/* { About('Mantu') } */}

    </div>
  ) 
  // let ui = React.createElement('div', {}, [
  //   React.createElement('h1', {}, "Good Morning"),
  //   React.createElement('h2', {}, "React"),
  //   React.createElement('h3', {}, "Mantu Tiwari"),
  // ])
  // return ui
}
export default App