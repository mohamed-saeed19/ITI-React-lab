import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Home.css"; 
import SingleProduct from "../SingleProduct/SingleProduct";

export default function Home() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      console.log(response.data); 
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 my-4" key={product.id}>
          <SingleProduct product={product}/>
          </div>
        ))}
      </div>
    </>
  );
}