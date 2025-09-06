import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { getProducts, deleteProduct } from "../../services/products";
import { calculateWalletBalance } from "../../services/wallet";
import "./Dashboard.css";
import { getUserById } from "../../services/users";
import Header from "../Header/Header";

import Footer from "../Footer/Footer";

const Dashboard = () => {
  const { token, user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [balance, setBalance] = useState(0);
  const [sellerNames, setSellerNames] = useState({});

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    const fetchSellerNames = async () => {
      const names = {};
      for (const product of products) {
        if (product.SellerId && !names[product.SellerId]) {
          const seller = await getUserById(product.SellerId); // Fetch seller by ID
          if (seller) {
            names[product.SellerId] = seller.Username || "Unknown"; // Save seller name
          }
        }
      }
      setSellerNames(names); // Set all seller names
    };
    const fetchProducts = async () => {
      
      const productList = (await getProducts())
        .sort((a, b) => new Date(a.ProductPrice) - new Date(b.ProductPrice));
      setProducts(productList);
    };
    const fetchBalance = async () => {
      if (user?.id) {
        const balanceData = await calculateWalletBalance(user.id);
        setBalance(balanceData);
      }
    };

    fetchProducts();
    fetchBalance();
    fetchSellerNames();
  }, [token, navigate, user, products]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  
  // Handle product deletion (only for the owner)
  const handleDelete = async (productId) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this product? This action cannot be undone."
    );

    if (isConfirmed) {
      const success = await deleteProduct(productId, user.id);
      if (success) {
        
        setProducts(products.filter((product) => product.id !== productId));
      }
    }
  };

  return (
  <div> 
    <div>
    <Header/> 
    <br/>  <br/>  <br/>  <br/>  <br/>  <br/>
    <div className="dashboard-container">
      <h2 className="greeting">
        Welcome to your dashboard, {user?.Username ? <strong>{user.Username}</strong> : "User"}!
      </h2>

      <div className="dashboard-info">
        {/* Add wallet balance section */}
        <div className="wallet-balance">
          <h4>Your Wallet Balance</h4>
          <p>${balance}</p>
        </div>

        <div className="dashboard-actions">
          <button className="logout-btn" onClick={() => handleLogout()}>
            Logout
          </button>
          <button className="addproductdashboard"
            onClick={() => navigate("/create-product")}
          >
           
           
            + Add Product
          </button>
        </div>

        <h3>Current Products</h3>
        {products.length ? (
          <ul className="productlistdashboard">
            {products.map((product) => (
              <li key={product.id} className="productitemdashboard">
                <div className="productdetailsdashboard">
                  <strong>{product.ProductName}</strong>
                  <p>
                    Price: ${product.ProductPrice}
                  </p>
                  <p>
                    Date Listed: {new Date(product.EndTime).toLocaleString("en-GB")}
                  </p>
                  <p>
                    Seller:{" "}
                    {product.SellerId === user.id
                      ? "You"
                      : sellerNames[product.SellerId] || product.SellerId}
                  </p>
                </div>
                {product.SellerId === user.id && (
                  <span
                    className="delete-btn"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </span>
                )}
                <span
                  className="bid-btn"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  Buy Product
                </span>
              </li>
            ))}
          </ul>
        ) : ( <p>No active products.</p>
        )}
      </div>
    </div> 
    </div>
    <br/> <br/>
     <Footer/> 
    
    </div>
  );
};

export default Dashboard;
