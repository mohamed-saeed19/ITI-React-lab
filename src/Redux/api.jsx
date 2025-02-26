import axios from "axios";

export const fetchProducts = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};
export const fetchProductById = async (id) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return response.data;
};
export const fetchProductsByCategory = async (category) => {
  const response = await axios.get(
    `https://fakestoreapi.com/products/category/${category}`
  );
  return response.data;
};
