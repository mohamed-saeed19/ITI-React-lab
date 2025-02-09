import React from "react";

const SingleCard = ({ product, increasePrice, deleteProduct, handleImageUpload }) => {
  return (
    <div className="col-md-4 shadow-3 rounded-4 p-3 mb-3">
      {product.image && (
        <img
          src={product.image}
          alt={product.title}
          className="img-fluid mb-3"
          style={{ maxHeight: "150px", borderRadius: "8px" }}
        />
      )}
      {product.image === "" ? (
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageUpload(e, product.id)}
          className="form-control mb-3"
        />
      ) : null}
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <button
        className="btn btn-primary me-2"
        onClick={() => increasePrice(product.id)}
      >
        Change Price
      </button>
      <button
        className="btn btn-danger"
        onClick={() => deleteProduct(product.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default SingleCard;