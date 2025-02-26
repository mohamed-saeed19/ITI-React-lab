import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import SingleProduct from "../SingleProduct/SingleProduct";
import { fetchProducts } from "../../Redux/ProductSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [productsPerPage] = React.useState(5);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

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
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="btn btn-outline-primary"
        >
          Previous
        </button>
        <span className="mx-3">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="btn btn-outline-primary"
        >
          Next
        </button>
      </div>
    </>
  );
}
