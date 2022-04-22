import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './Components/Layout'
import Home from './Components/Home'
import AnimatedCursor from "react-animated-cursor"
import About from './Components/About';
import Loader from 'react-loaders';
import Contact from './Components/Contact';


function App() {
  
  return (
    <div>
      <AnimatedCursor color='0, 0, 0'  
      innerSize={10}
      outerSize={5}/>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
    <Loader type='pacman' />
    </div>
  );
}

export default App;
