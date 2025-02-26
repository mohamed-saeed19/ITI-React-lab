import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../Redux/ProductSlice";

export default function SingleCard() {
  const dispatch = useDispatch();
  const { singleProduct, loading, error } = useSelector(
    (state) => state.products
  );
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  if (loading) return <h1>Loading Product Details...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  if (!singleProduct) return <h1>Product not found!</h1>;

  return (
    <div className="row mt-5">
      <div className="col-md-4 d-flex justify-content-center">
        <img
          src={singleProduct.image}
          alt={singleProduct.description}
          className="w-100"
        />
      </div>
      <div className="col-md-8">
        <h1 className="text-center">{singleProduct.title}</h1>
        <h4 className="my-4">{singleProduct.category}</h4>
        <p className="text-capitalize">{singleProduct.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <p>{singleProduct.price} $</p>
          {singleProduct.rating && (
            <p>
              {singleProduct.rating.rate}{" "}
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
