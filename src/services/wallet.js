import { db } from "./firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

// Function to calculate the user's wallet balance
const calculateWalletBalance = async (userId, initialBalance = 1000) => {
  try {
    const productsRef = collection(db, "Products");

    
    const spentQ = query(
      productsRef,
      where("BuyerId", "==", userId)
    );
    const spentQuerySnapshot = await getDocs(spentQ);
    let totalSpent = 0;
    if (!spentQuerySnapshot.empty) {
      spentQuerySnapshot.forEach((doc) => {
        totalSpent += doc.data().ProductPrice;
      });
    }

    // Query to get all closed products where the user is the seller
    const earnedQ = query(
      productsRef,
      where("SellerId", "==", userId),
    );
    const earnedQuerySnapshot = await getDocs(earnedQ);
    let totalEarned = 0;
    if (!earnedQuerySnapshot.empty) {
      earnedQuerySnapshot.forEach((doc) => {
        totalEarned += doc.data().ProductPrice;
      });
    }

    // Calculate final wallet balance
    const finalBalance = initialBalance - totalSpent + totalEarned;

    return finalBalance >= 0 ? finalBalance : 0; // Ensure the balance is not negative
  } catch (error) {
    console.error("Error calculating wallet balance:", error);
    return null;
  }
};

export { calculateWalletBalance };
