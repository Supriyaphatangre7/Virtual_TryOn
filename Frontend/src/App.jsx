import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Shop from "./components/Shop";
import ItemHome from "./components/ItemHome";
import Contactus from "./components/Contactus";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/itemhome" element={<ItemHome />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/slider" element={<Slider/>} />
        <Route path="/hero" element={<Hero/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/about" element={<AboutUs/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
=======
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
>>>>>>> fbc44b559228d30f0bcbbd2edd2e2ca4d09a2532
  );
}

export default App;
