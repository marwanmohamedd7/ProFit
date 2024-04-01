import { jwtDecode } from "jwt-decode";

function checkTokenValidity(token) {
  // Decode the token
  const decoded = jwtDecode(token);

  // Check if the token has expired
  const currentTime = Date.now() / 1000; // Convert to seconds
  if (decoded.exp < currentTime) {
    return false;
  }
  // Return true if the token is valid
  return decoded;
}

export default checkTokenValidity;
