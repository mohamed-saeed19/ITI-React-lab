import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CounterContext } from "../../context/CounterContext";
import { ToastContainer, toast } from 'react-toastify';
export default function SingleProduct({ product }) {
  const { count, setCount } = useContext(CounterContext); 
  const addToCart = () => {
    setCount((prevCount) => prevCount + 1);
    toast("Added To Card!")
  };
  return (
    <>
      <div className="card h-100 rounded-3 ">
        <Link to={`/product-details/${product.id}`} className="text-decoration-none text-dark">
          <img
            src={product.image}
            className="card-img-top w-100"
            alt={product.title}
          />
          <div className="card-body">
            <h2 className="card-title">
              {product.title.split(" ").splice(0, 2).join(" ")}
            </h2>
            <span>{product.category}</span>
            <div className="d-flex justify-content-between align-items-center">
              <p>{product.price} $</p>
              <p>
                {product.rating.rate}{" "}
                <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
              </p>
            </div>
          </div>
        </Link>
        <button className="btn btn-outline-primary w-100 mt-2" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </>
  );
}