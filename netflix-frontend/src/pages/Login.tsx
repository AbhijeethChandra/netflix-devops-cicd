import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useProfile } from "../context/ProfileContext";

function Login() {
  const { login } = useProfile();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    login();
    navigate("/profiles");
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#111",
          padding: "40px 50px",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          minWidth: "320px",
        }}
      >
        <h1 style={{ margin: 0 }}>Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "none",
            outline: "none",
            background: "#222",
            color: "white",
          }}
          required
        />
        <input
          type="password"
          placeholder="Password"
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "none",
            outline: "none",
            background: "#222",
            color: "white",
          }}
          required
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "none",
            background: "red",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;
