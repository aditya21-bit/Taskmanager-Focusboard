import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("/auth/login", {
        email: email.trim(),
        password,
      });

      // Save JWT Token
      localStorage.setItem("token", response.data.token);

      // Save User
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

     toast.success("Login Successful");

      navigate("/dashboard");

    } catch (error) {
      toast.error(
        error.response?.data?.message || "Invalid credentials"
      );
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h1>FocusBoard</h1>
        <p>Welcome back 👋</p>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        <div className="auth-footer">
          Don't have an account?
          <Link to="/register"> Register</Link>
        </div>

      </div>
    </div>
  );
}

export default Login;