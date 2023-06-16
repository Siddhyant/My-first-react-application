import React, { useState }  from "react";
import Header from "./components/Header";
 import Navbar from './components/Navbar'
 import TextUtilsForm from './components/TextUtilsForm'
import Footer from "./components/Footer";
import "./components/Style.css"
import Counter from "./components/Mypractice";
import Stopwatch from "./components/Stopwatch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./components/Style.css";
import User from "./components/User";
import EmployesDetails from "./components/EmployesDetails";
import Product from "./components/Product";
import "./components/Product.css"

const App = () => {
  const [dark, setDark] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Header setDark={setDark} dark={dark} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employesDetails"element={<EmployesDetails/>}/>
          <Route path="/counter" element={<Counter />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/product" element={<Product/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>

      {/* <img src='https://assets.entrepreneur.com/content/3x2/2000/20150429160658-website-traffic.jpeg'/> */}

      {/* <Navbar/>
    <TextUtilsForm/> */}
    
    </>
  )
}
export default App