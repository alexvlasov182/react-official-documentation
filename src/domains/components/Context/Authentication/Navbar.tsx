import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const Navbar = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("Navbar must be used within an AuthProvider");
  }

  const { user, isAuthenticated, logout } = authContext;

  return (
    <nav>
      <ul>
        <li>{user ? user.name : "Guest"}</li>
        <li>{user ? user.email : "GuestEmail"}</li>
        <li>{isAuthenticated ? "Logged In" : "Logged Out"}</li>
        {isAuthenticated && (
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
