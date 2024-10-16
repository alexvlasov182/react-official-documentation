import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";

const Login = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("Login must be used within an AuthProvider");
  }

  const { login } = authContext;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    login({ name, email });
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
