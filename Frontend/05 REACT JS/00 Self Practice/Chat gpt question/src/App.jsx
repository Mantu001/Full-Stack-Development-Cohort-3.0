import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skill from './components/Skill';

let App = () => {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Skill/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App