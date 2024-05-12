import { jwtDecode } from "jwt-decode";

const decodeJWT = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded;
  } catch (error) {
    console.error("Error decoding JWT token:", error);
    return null;
  }
};

export default decodeJWT;
