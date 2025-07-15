import React from "react";
import { useNavigate } from "react-router-dom";
import SpaIcon from '@mui/icons-material/Spa';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(120deg, #fbeee6 0%, #f7cac9 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 16px"
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "32px",
          boxShadow: "0 8px 32px rgba(200,150,150,0.13)",
          padding: "48px 32px",
          maxWidth: 420,
          width: "100%",
          textAlign: "center",
        }}
      >
        <div style={{ marginBottom: 24 }}>
          <SpaIcon style={{ fontSize: 64, color: "#e7c2c2" }} />
        </div>
        <h1 style={{ color: "#a05c5c", fontWeight: 700, marginBottom: 12 }}>
          Welcome to Blossom Beauty Clinic
        </h1>
        <p style={{ color: "#7a3e3e", fontSize: "1.1rem", marginBottom: 32 }}>
          Book your next beauty treatment with ease.<br />
          Enjoy a relaxing and rejuvenating experience with our professional team.
        </p>
        <button
          style={{
            width: "100%",
            padding: "16px 0",
            fontSize: "1.15rem",
            borderRadius: "28px",
            border: "none",
            background: "linear-gradient(90deg, #f7cac9 0%, #ffe5d9 100%)",
            color: "#7a3e3e",
            fontWeight: 700,
            boxShadow: "0 2px 10px rgba(231,194,194,0.10)",
            cursor: "pointer",
            transition: "background 0.18s, color 0.18s, transform 0.13s",
            marginBottom: 16
          }}
          onClick={() => navigate("/login")}
        >
          Book Appointment
        </button>
        <button
          style={{
            width: "100%",
            padding: "14px 0",
            fontSize: "1rem",
            borderRadius: "28px",
            border: "2px solid #e7c2c2",
            background: "#fff",
            color: "#a05c5c",
            fontWeight: 600,
            boxShadow: "0 1px 6px rgba(231,194,194,0.08)",
            cursor: "pointer",
            transition: "background 0.18s, color 0.18s, border-color 0.18s, transform 0.13s"
          }}
          onClick={() => navigate("/about")}
        >
          Learn More About Us
        </button>
      </div>
      <div style={{ marginTop: 40, color: "#b07a7a", fontSize: "0.95rem" }}>
        &copy; {new Date().getFullYear()} Blossom Beauty Clinic. All rights reserved.
      </div>
    </div>
  );
};

export default HomePage;