import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  getDoc,
  query,
  where,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { calculateWalletBalance } from "./wallet";

// Function to fetch all products from Firestore
const getProducts = async () => {
  try {
    const q = collection(db, "Products");
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};




// Function to create a new product in Firestore
const createProduct = async (
  productName,
  description,
  productPrice,
  sellerId,
  endTime
) => {
  try {
    const docRef = await addDoc(collection(db, "Products"), {
      ProductName: productName,
      Description: description,
      ProductPrice: productPrice,
      SellerId: sellerId,
      EndTime: endTime,
    });
    return {
      id: docRef.id,
      productName,
      description,
      
      
      
      
      sellerId,
      productPrice,
      BuyerId: undefined,
      endTime,
    };
  } catch (error) {
    console.error("Error adding product:", error);
    return null;
  }
};

// Function to delete a new productin Firestore
const deleteProduct = async (productId, userId) => {
  try {
    const product = await getProductById(productId);

    if (!product) {
      console.error("Product not found!");
      return false;
    }

    if (product.SellerId !== userId) {
      console.error("Only the owner can delete products.");
      return false;
    }

    await deleteDoc(doc(db, "Products", productId));
    console.log("Product deleted successfully.");
    return true;
  } catch (error) {
    console.error("Error deleting product:", error);
    return false;
  }
};







// Function to fetch a product by document ID
const getProductById = async (productId) => {
  try {
    const productRef = doc(db, "Products", productId);
    const productSnap = await getDoc(productRef);

    if (productSnap.exists()) {
      return { id: productSnap.id, ...productSnap.data() };
    } else {
      console.error("No such product found with ID:", productId);
      return null;
    }
  } catch (error) {

    console.error("Error fetching product by ID:", error);
    return null;
  }
};

// Function to fetch a product by product name

const getProductByProductName = async (productName) => {
  try {
    const productRef = collection(db, "Products");
    const q = query(productRef, where("ProductName", "==", productName));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))[0]; // Return the first match
    } else {
      console.error("No product found with product name:", productName);
      return null;
    }
  } catch (error) {

    console.error("Error fetching product by product name:", error);
    return null;
  }
};

// Function to update the bid and buyer
const updatePrice = async (productId, newPrice, buyerId) => {
  try {
    const productRef = doc(db, "Products", productId);
    const productSnap = await getDoc(productRef);





    if (!productSnap.exists()) {
      console.error("Product not found!");
      return null;
    }
   
    // Fetch the user's wallet balance
    const walletBalance = await calculateWalletBalance(buyerId);

    if (walletBalance < newPrice) {
      console.error("Insufficient funds for buying");
      return null;
    }

    await updateDoc(productRef, {
      ProductPrice: newPrice,
      BuyerId: buyerId,
    });

    return { id: productId, productPrice: newPrice, buyerId };
  } catch (error) {
    console.error("Error updating price:", error);
    return null;
  }
};

export {
  getProducts,
  createProduct,
  deleteProduct,
  getProductById,
  getProductByProductName,
  updatePrice,
};
