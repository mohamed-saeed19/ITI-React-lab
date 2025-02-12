import axios from 'axios';
import React, { useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

export default function Category() {
  const [products, setProducts] = useState([])
  async function getProducts(value) {
    const response = await axios.get(`https://fakestoreapi.com/products/category/${value}`);
    console.log(response.data);
    setProducts(response.data)
  }

  function printVal(value) {
    console.log(value);
  }

  return <>
  <div className="d-flex justify-content-center align-items-center">
      <button
        onClick={() => getProducts('electronics')}
        className="btn m-3 btn-outline-danger"
      >
        Electronics
      </button>
      <button
        onClick={() => getProducts('jewelery')}
        className="btn m-3 btn-outline-success"
      >
        Jewelery
      </button>
      <button
        onClick={() => getProducts("men's clothing")}
        className="btn m-3 btn-outline-warning"
      >
        Men clothing
      </button>
      <button
        onClick={() => getProducts("women's clothing")}
        className="btn m-3 btn-outline-info"
      >
        Women clothing
      </button>
    </div>
    <div className="row">
        {products.map((product) => (
          <div className="col-md-3 my-4" key={product.id}>
          <SingleProduct product={product}/>
          </div>
        ))}
      </div>
  </>
    
  
}