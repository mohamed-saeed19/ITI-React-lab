import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Home.css";
import SingleProduct from "../SingleProduct/SingleProduct";

export default function Home() {
  const [products, setProducts] = useState([]); 
  const [currentPage, setCurrentPage] = useState(1); 
  const [productsPerPage] = useState(5);
  async function getProducts() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data); 
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="row">
        {currentProducts.map((product) => (
          <div className="col-md-3 my-4" key={product.id}>
            <SingleProduct product={product} />
          </div>
        ))}
      </div>
      <div className="pagination my-5 d-flex justify-content-center align-items-center">
        <button onClick={handlePreviousPage} disabled={currentPage === 1} className="btn btn-outline-primary">
          Previous
        </button>
        <span className="mx-3">
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages} className="btn btn-outline-primary">
          Next
        </button>
      </div>
    </>
  );
}