import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { getProductById, updatePrice } from "../../../services/products";
import { calculateWalletBalance } from "../../../services/wallet";
import "./BuyProduct.css";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

const BuyProduct = () => {
  const { user } = useContext(AuthContext);
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  const [walletBalance, setWalletBalance] = useState(0);
  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await getProductById(productId);
      if (productData) {
        setProduct(productData);
        const balance = await calculateWalletBalance(user.id);
        setWalletBalance(balance);
      } else {
        alert("Product was not found.");
        navigate("/dashboard");
      }
    };

    fetchProduct();
  }, [productId, navigate, user]);
  const handleBid = async (e) => {
    e.preventDefault();
    const productData = await getProductById(productId);

    if (walletBalance < parseFloat(productData.ProductPrice)) {
      alert("Insufficient funds!");
      return;
    }

    const success = await updatePrice(
      productId,
      parseFloat(productData.ProductPrice),
      user.id
    );

    if (success) {
      alert("Product bought successfully!");

      navigate("/dashboard");
    } else {
      alert("Error selling product.");
    }
  };

  if (!product) return <p>Loading product details...</p>;

  // Check if the current user is the seller
  const isSeller = product.SellerId === user.id;

  return (
    <div>
      {" "}
      <br /> <br /> <br /> <br /> <br />
      <div className="bid-container">
        <Header />
        <h2>Confirm Product Purchase</h2>
        <h3>Product Name: {product.ProductName}</h3>
        <p>Current Product Price: ${product.ProductPrice}</p>
        <p>Your Wallet Balance: ${walletBalance}</p>
        <p>Description: {product.Description}</p>

        {isSeller ? (
          <p className="error-message">You cannot buy your own product.</p>
        ) : (
          <form onSubmit={handleBid}>
            <button> Buy Product</button>
          </form>
        )}
      </div>
      <br /> <br /> <Footer />
    </div>
  );
};
export default BuyProduct;
