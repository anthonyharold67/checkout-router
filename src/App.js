
import Main from "./pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewProduct from "./pages/NewProduct";
import UpdateProduct from "./pages/UpdateProduct";
import ProductList from "./pages/ProductList";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {

  

  return (
    <div className="bg-light app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/new-product" element={<NewProduct />} />
          <Route path="/update-product" element={<UpdateProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/product-list" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
