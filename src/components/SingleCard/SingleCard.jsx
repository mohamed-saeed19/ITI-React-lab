import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleCard() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); 
  let { id } = useParams();

  async function getProduct() {
    try {
      let { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false); 
    }
  }

  useEffect(() => {
    getProduct();
  }, [id]); 

  if (loading) {
    return <h1>Loading Product Details...</h1>; 
  }

  if (!product) {
    return <h1>Product not found!</h1>; 
  }

  return (
    <div className="row mt-5">
      <div className="col-md-4 d-flex justify-content-center">
        <img src={product.image} alt={product.description} className="w-100 " />
      </div>
      <div className="col-md-8">
        <h1 className="text-center">{product.title}</h1>
        <h4 className="my-4">{product.category}</h4>
        <p className="text-capitalize">{product.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <p>{product.price} $</p>
          {product.rating && (
            <p>
              {product.rating.rate} <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}