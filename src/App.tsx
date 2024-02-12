
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import PromoBar from './components/PromoBar';
import Home from './screens/Home';
import Products from './screens/Products';
import Footer from './components/Footer';
import Contact from './screens/Contact';

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
