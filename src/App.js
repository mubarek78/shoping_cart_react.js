
import Header from './components/Header';
import Cart from './components/Cart';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Register from './components/Register/Register';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/register" element={<Register />} />
    <Route path="/nav" element={<Navbar />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
     
    
    </Routes>
  </BrowserRouter>
  );
}

export default App;
