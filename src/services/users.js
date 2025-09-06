import { db } from "./firebase";
import {
  doc,
  getDoc,
  addDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

// Get all users
const getAllUsers = async () => {
  try {
    const usersRef = collection(db, "Users"); // Reference to the Users collection
    const querySnapshot = await getDocs(usersRef); // Get all documents from the collection

    if (!querySnapshot.empty) {
      // Map through the documents and return the data
      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } else {
      console.log("No users found.");
      return [];
    }
  } catch (error) {
    console.error("Error fetching all users:", error);
    return [];
  }
};


// Get user by document ID
const getUserById = async (userId) => {
  try {
    const userRef = doc(db, "Users", userId);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      return { id: userSnap.id, ...userSnap.data() };
    } else {
      console.error("No such user found with ID:", userId);
      return null;
    }
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    return null;
  }
};

// Get user by username
const getUserByUsername = async (username) => {
  try {
    const usersRef = collection(db, "Users");
    const q = query(usersRef, where("Username", "==", username));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))[0]; // Return the first match
    } else {
      console.error("No user found with username:", username);
      return null;
    }
  } catch (error) {
    console.error("Error fetching user by username:", error);
    return null;
  }
};

const registerUser = async (
  firstName,
  lastName,
  username,
  password,
  wallet = 1000
) => {
  try {
    var user = await getUserByUsername(username);
    if (user) {
      console.error("Username already exists:", username);
      return null;
    }
    var response = await addDoc(collection(db, "Users"), {
      Username: username,
      Firstname: firstName,
      Lastname: lastName,
      Password: password,
      Wallet: wallet,
    });
    return {
      id: response.id,
      username,
      firstName,
      password,
      wallet,
    };
  } catch (error) {
    console.error("Error registering user:", error);
    return null;
  }
};

const loginUser = async (username, password) => {
  try {
    // Fetch user from Firestore
    const user = await getUserByUsername(username);
    if (!user) {
      throw new Error("User not found");
    }

    // Compare provided password with stored hashed password
    const isPasswordValid = user.Password === password;
    if (!isPasswordValid) {
      throw new Error("Invalid credentials");
    }

    // Generate JSON token
    const token = JSON.stringify({
      id: user.id,
      username: user.username,
      exp: Date.now() + 1000 * 60 * 60, // Expires in 1 hour
    });

    return { token, user };
  } catch (error) {
    console.error("Error logging in:", error);
    return null;
  }
};

export { registerUser, loginUser, getUserById, getUserByUsername, getAllUsers };
