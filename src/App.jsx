import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import CreateProduct from "./pages/Products/CreateProduct/CreateProduct";
import BuyProduct from "./pages/Products/BuyProduct/BuyProduct";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import FinancialDetails from "./pages/FinancialDetails/FinancialDetails";
import Homepage from "./pages/Homepage/Homepage";
import OurProducts from "./pages/OurProducts/OurProducts";
import FAQConstant from "./pages/FAQ/FAQ.jsx";

const App = () => {
  return (

    <AuthProvider>
      <Router>
        <Routes>
         <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />


         <Route
            path="/financialdetails"
            element={
              <ProtectedRoute>
                <FinancialDetails/>
              </ProtectedRoute>
            }/>


           <Route
            path="/faq"
            element={
              <ProtectedRoute>
                <FAQConstant/>
              </ProtectedRoute>
            }/>
          <Route
            path="/homepage"
            element={
            <ProtectedRoute>
              <Homepage/>
            </ProtectedRoute>
            }
          />






          <Route
            path="/ourproducts"
            element={
             <ProtectedRoute>
                <OurProducts/>
            </ProtectedRoute>
            }
          />
          <Route
            path="/create-product"
            element={
              <ProtectedRoute>
                <CreateProduct/>
              </ProtectedRoute>
            }
          />



          <Route
            path="/product/:productId"
            element={
              <ProtectedRoute>
                <BuyProduct/>
              </ProtectedRoute>
            }
          />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;