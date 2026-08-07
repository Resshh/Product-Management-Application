import { Routes, Route } from "react-router-dom";
import Navbar1 from "./components/Navbar1";
import Home from "./components/Home";
import AddProduct from "./components/AddProduct";
import "./App.css";
function App() {
  return (
    <>
      <Navbar1 />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
    </>
  );
}

export default App;