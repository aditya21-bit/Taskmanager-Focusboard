import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";
import { toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/register", {
        name,
        email,
        password,
      });

      toast.success("Registration Successful");

      setTimeout(() => {
        navigate("/");
      }, 1200);
      navigate("/");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h1>FocusBoard</h1>
        <p>Create your account</p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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
            Create Account
          </button>

        </form>

        <div className="auth-footer">
          Already have an account?
          <Link to="/"> Login</Link>
        </div>

      </div>
    </div>
  );
}

export default Register;