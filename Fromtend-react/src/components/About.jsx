import React from "react";

const treatments = [
  "Facial Treatment",
  "Laser Hair Removal",
  "Manicure",
  "Pedicure",
  "Anti-Aging Treatment",
  "Acne Treatment",
  "Body Scrub",
  "Microdermabrasion"
];

const treatmentDescriptions = {
  "Facial Treatment": "A rejuvenating facial to cleanse, exfoliate, and nourish your skin for a radiant glow.",
  "Laser Hair Removal": "Safe and effective laser technology for long-lasting hair reduction on any area of the body.",
  "Manicure": "Professional nail care, shaping, cuticle treatment, and polish for beautiful hands.",
  "Pedicure": "Relaxing foot soak, exfoliation, nail care, and polish for soft, refreshed feet.",
  "Anti-Aging Treatment": "Advanced skincare to reduce wrinkles, firm skin, and restore youthful vitality.",
  "Acne Treatment": "Targeted solutions to clear acne, reduce inflammation, and prevent future breakouts.",
  "Body Scrub": "Full-body exfoliation to remove dead skin cells and reveal smooth, glowing skin.",
  "Microdermabrasion": "Gentle exfoliation using microcrystals to improve skin texture and tone."
};

const treatmentEmojis = {
  "Facial Treatment": "💆‍♀️",
  "Laser Hair Removal": "✨",
  "Manicure": "💅",
  "Pedicure": "🦶",
  "Anti-Aging Treatment": "🧴",
  "Acne Treatment": "🧖‍♀️",
  "Body Scrub": "🛁",
  "Microdermabrasion": "🔬"
};

const gradientColors = [
  "linear-gradient(120deg, #fbeee6 0%, #f7cac9 100%)",
  "linear-gradient(120deg, #ffe5d9 0%, #f7cac9 100%)",
  "linear-gradient(120deg, #f7cac9 0%, #ffe5d9 100%)",
  "linear-gradient(120deg, #fbeee6 0%, #ffe5d9 100%)",
  "linear-gradient(120deg, #ffe5d9 0%, #fbeee6 100%)",
  "linear-gradient(120deg, #f7cac9 0%, #fbeee6 100%)",
  "linear-gradient(120deg, #fbeee6 0%, #f7cac9 100%)",
  "linear-gradient(120deg, #ffe5d9 0%, #f7cac9 100%)"
];

const About = () => (
  <div
    style={{
      maxWidth: 900,
      margin: "48px auto",
      padding: "48px 16px",
      background: "linear-gradient(135deg, #fff1f1 0%, #ffe5d9 100%)",
      borderRadius: "36px",
      boxShadow: "0 12px 40px rgba(200,150,150,0.18)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      border: "2px solid #f7cac9"
    }}
  >
    <h1
      style={{
        color: "#a05c5c",
        fontWeight: 800,
        fontSize: "2.4rem",
        marginBottom: 36,
        letterSpacing: "1.5px",
        textShadow: "0 2px 8px #ffe5d9"
      }}
    >
      Discover Our Treatments
    </h1>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", // קטן יותר
        gap: "18px", // פחות רווח
        width: "100%",
        maxWidth: 800
      }}
    >
      {treatments.map((treatment, idx) => (
        <div
          key={treatment}
          style={{
            background: gradientColors[idx % gradientColors.length],
            borderRadius: "16px", // פחות עגלול
            boxShadow: "0 2px 9px rgba(231,194,194,0.11)",
            padding: "13px 8px", // פחות פדינג
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
            border: "1.5px solid #ffe5d9",
            transition: "transform 0.18s, box-shadow 0.18s",
            minHeight: 80, // יותר נמוך
            maxWidth: 190 // כל כרטיסיה צרה יותר
          }}
          onMouseOver={e => {
            e.currentTarget.style.transform = "scale(1.045)";
            e.currentTarget.style.boxShadow = "0 7px 20px rgba(231,194,194,0.18)";
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 2px 9px rgba(231,194,194,0.11)";
          }}
        >
          <span
            style={{
              fontSize: "1.3em", // אימוג'י קטן יותר
              marginBottom: 8,
              filter: "drop-shadow(0 1px 2px #ffe5d9)"
            }}
          >
            {treatmentEmojis[treatment]}
          </span>
          <h2
            style={{
              margin: 0,
              color: "#7a3e3e",
              fontSize: "0.98em", // קטן
              fontWeight: 700,
              letterSpacing: "0.5px",
              textAlign: "center"
            }}
          >
            {treatment}
          </h2>
          <p
            style={{
              margin: "7px 0 0 0",
              color: "#4a2c2a",
              fontSize: "0.87em", // קטן
              textAlign: "center",
              lineHeight: 1.4
            }}
          >
            {treatmentDescriptions[treatment]}
          </p>
        </div>
      ))}
    </div>
    <div style={{ marginTop: 48, color: "#b07a7a", fontSize: "1.05rem" }}>
      <span style={{ fontWeight: 600 }}>Blossom Beauty Clinic</span> – Where beauty meets care.
    </div>
  </div>
);

export default About;