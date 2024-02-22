
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import PromoBar from './components/PromoBar';
import Home from './pages/Home';
import Products from './pages/Products';
import Footer from './components/Footer';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <PromoBar />
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sets" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
