import About from './About.jsx'

let App = () => {

  return (
    <div>
      <p>always keep in mind that if you want to pass multiple elements then return in an eclosed div</p>
      <h4>This is App.jsx function component</h4>
      <About class='inherited' id='virtual' />
      {/* {About('mantu')} */}
    </div>
  )
}

export default App