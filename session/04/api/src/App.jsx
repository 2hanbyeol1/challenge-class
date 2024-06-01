import { useEffect } from "react";
import "./App.css";
import { getBrand, getBrands } from "./api/api.brand";
import { getProduct, getProducts } from "./api/api.product";

function App() {
  useEffect(() => {
    const productId = 9587059;
    const brandId = getProducts();
    getProduct(productId);
    getBrands();
    getBrand(brandId);
  }, []);
  return <main>hello world</main>;
}

export default App;
