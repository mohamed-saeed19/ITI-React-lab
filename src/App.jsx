import { useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard/SingleCard";

function App() {
  const [products, setProducts] = useState([
    { id: 1, title: "Toshiba", price: 25, image: "" },
    { id: 2, title: "HP", price: 55, image: "" },
    { id: 3, title: "Dell", price: 15, image: "" },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const increasePrice = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, price: product.price + 10 } : product
      )
    );
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleImageUpload = (event, id) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
        setProducts(
          products.map((product) =>
            product.id === id ? { ...product, image: imageUrl } : product
          )
        );
      };
      reader.readAsDataURL(file);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <input
          type="text"
          className="form-control mt-5 mb-3"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="row">
          {filteredProducts.map((product) => (
            <SingleCard
              key={product.id}
              product={product}
              increasePrice={increasePrice}
              deleteProduct={deleteProduct}
              handleImageUpload={handleImageUpload}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
