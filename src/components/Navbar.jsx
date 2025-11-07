import React from "react";

export default function Navbar() {
  return (
    <nav
      style={{
        background: "#1e293b",
        color: "white",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>SSB Prep</h1>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>Home</a>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>Resources</a>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>Login</a>
      </div>
    </nav>
  );
}
