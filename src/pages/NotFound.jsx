import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "40px 20px",
    }}>
      <h1 className="gradient-text" style={{ fontSize: "4rem", marginBottom: "16px" }}>404</h1>
      <p style={{ color: "var(--text-secondary)", marginBottom: "28px" }}>
        This page doesn't exist.
      </p>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  );
}
