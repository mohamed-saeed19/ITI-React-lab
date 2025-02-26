import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleProduct from "../SingleProduct/SingleProduct";
import { fetchProductsByCategory } from "../../Redux/ProductSlice";

export default function Category() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  const handleCategoryClick = (category) => {
    dispatch(fetchProductsByCategory(category));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <button
          onClick={() => handleCategoryClick("electronics")}
          className="btn m-3 btn-outline-danger"
        >
          Electronics
        </button>
        <button
          onClick={() => handleCategoryClick("jewelery")}
          className="btn m-3 btn-outline-success"
        >
          Jewelery
        </button>
        <button
          onClick={() => handleCategoryClick("men's clothing")}
          className="btn m-3 btn-outline-warning"
        >
          Men clothing
        </button>
        <button
          onClick={() => handleCategoryClick("women's clothing")}
          className="btn m-3 btn-outline-info"
        >
          Women clothing
        </button>
      </div>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 my-4" key={product.id}>
            <SingleProduct product={product} />
          </div>
        ))}
      </div>
    </>
  );
}
