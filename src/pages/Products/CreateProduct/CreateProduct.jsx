import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { createProduct, getProductByProductName } from "../../../services/products";
import "./CreateProduct.css"; import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

const CreateProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const time = new Date().toLocaleString() + "";
    if (!productName || !description || !price) {
      alert("All fields are required!");
      return;
    }

    var productWithName = await getProductByProductName(productName);
    if (productWithName) {
      alert("Product with the same name already exists!");
      return;
    }

    const newProduct = await createProduct(
      productName,
      description,
      parseFloat(price),
      user.id,
      time,
    );

    if (newProduct) {
      alert("Product created successfully!");
      navigate("/dashboard");
    } else {
      alert("Error creating product.");
    }
  };

  return (
  <div>
    <div className="containerforproduct">
      <Header/>
      <h2>Sell New Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Product Name:</label>
        <input
          type="text"
          minLength={3}
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />

        <label>Description:</label>
        <textarea
          value={description}
          minLength={10}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label>Price:</label>
        <input
          type="number"
          value={price}
          min={1}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

       

        <br/> <br/>
        <button type="submit">Sell Product</button>
      </form>
      
    </div> <br/>

     <Footer/> </div>
  );
};

export default CreateProduct;
