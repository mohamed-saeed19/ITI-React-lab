import React, { useState } from 'react'
export default function SingleProduct({ product }) {
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const truncateDescription = (description) => {
    const words = description.split(" ");
    return words.slice(0, 10).join(" ");
  };
  const toggleDescription = (productId) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };
  return <>
    <div className="card h-100 rounded-3">
      <img
        src={product.image}
        className="card-img-top h-75"
        alt={product.title}
      />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        {/* <p className="card-text">
                  {expandedDescriptions[product.id]
                    ? product.description
                    : truncateDescription(product.description) + "..."}
                </p>
                {product.description.split(" ").length > 10 && ( 
                  <button
                    className="btn btn-link p-0"
                    onClick={() => toggleDescription(product.id)}
                  >
                    {expandedDescriptions[product.id] ? "Read Less" : "Read More"}
                  </button>
                )} */}
        <div className="d-flex justify-content-between align-items-center">
          <p>{product.price} $</p>
          <p>{product.rating.rate} <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i></p>
        </div>
      </div>
    </div>
  </>
}