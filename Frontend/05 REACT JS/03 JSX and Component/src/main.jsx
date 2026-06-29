import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './About.jsx'

// passing multiople element (normally it do not pass because it is single page application)
// createRoot(document.getElementById('root')).render(
//   <div>
//     <h1>Welcome</h1>
//     <p>Mantu Kumar Tiwari</p>
//   </div>
// )

createRoot(document.getElementById('root')).render(<App/>)