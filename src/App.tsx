
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import PromoBar from './components/PromoBar';
import Home from './screens/Home';

function App() {
  return (
    <>
      <PromoBar />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
    </>
  )
}

export default App
