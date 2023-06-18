import React from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loggedIn, setLoggedIn] = React.useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@irl.com" && password === "admin@123") {
      setLoggedIn(true);
    } else {
      alert("Wrong Password");
    }
  };

  if (loggedIn) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          background: "#f7fafc",
          padding: "2rem",
          borderRadius: "0.5rem",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          Login
        </h2>
        <form>
          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="email"
              style={{
                display: "block",
                color: "#4a5568",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={{
                width: "100%",
                padding: "0.5rem",
                border: "1px solid #cbd5e0",
                borderRadius: "0.25rem",
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="password"
              style={{
                display: "block",
                color: "#4a5568",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={{
                width: "100%",
                padding: "0.5rem",
                border: "1px solid #cbd5e0",
                borderRadius: "0.25rem",
              }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              type="button"
              onClick={onSubmit}
              style={{
                background: "#4299e1",
                color: "white",
                fontWeight: "bold",
                padding: "0.5rem 1rem",
                border: "none",
                borderRadius: "0.25rem",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
