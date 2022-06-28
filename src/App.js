
import './App.css';
import Header from './components/Header';
import Cart from './components/Cart';
import Home from './components/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path=":productId" element={<Team />} />     */}
    
    </Routes>
  </BrowserRouter>
  );
}

export default App;
