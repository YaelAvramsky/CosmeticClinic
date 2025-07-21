import React from "react";
import { useNavigate } from "react-router-dom";
import SpaIcon from '@mui/icons-material/Spa';
import './css/HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <div style={{ marginBottom: 16 }}>
          <SpaIcon style={{ fontSize: 72, color: "#ad1457" }} />
        </div>

        <h1 className="welcome-text homepage-title">
          Welcome to Blossom Beauty Clinic 
        </h1>

        <p className="homepage-description">
          Book your next beauty treatment with ease.<br />
          Enjoy a relaxing and rejuvenating experience with our professional team.
        </p>

        <button className="homepage-button primary" onClick={() => navigate("/login")}>
          Book Appointment
        </button>

        <button className="homepage-button secondary" onClick={() => navigate("/about")}>
          Learn More About Us
        </button>

        <div className="homepage-quote">
          "Beauty begins the moment you decide to be yourself." – Coco Chanel
        </div>
      </div>

      <div className="homepage-footer">
        &copy; {new Date().getFullYear()} Blossom Beauty Clinic. All rights reserved.
      </div>
    </div>
  );
};

export default HomePage;