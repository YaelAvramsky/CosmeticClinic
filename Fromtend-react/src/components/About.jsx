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
      maxWidth: 1000,
      margin: "48px auto",
      padding: "48px 16px",
      background: "radial-gradient(circle at top left, #fffaf9 0%, #ffffff 100%)",
      borderRadius: "36px",
      boxShadow: "0 12px 40px rgba(200,150,150,0.12)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}
  >
    <h1
      style={{
        color: "#a05c5c",
        fontWeight: 800,
        fontSize: "2.6rem",
        marginBottom: 36,
        letterSpacing: "1.5px",
        textAlign: "center",
        textShadow: "0 2px 6px rgba(247,202,201,0.4)"
      }}
    >
      ✨ Discover Our Treatments ✨
    </h1>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "20px",
        width: "100%",
        maxWidth: 900
      }}
    >
      {treatments.map((treatment, idx) => (
        <div
          key={treatment}
          style={{
            background: gradientColors[idx % gradientColors.length],
            borderRadius: "18px",
            boxShadow: "0 3px 12px rgba(231,194,194,0.12)",
            padding: "16px 12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            minHeight: 100,
            maxWidth: 200,
            margin: "0 auto",
            textAlign: "center"
          }}
          onMouseOver={e => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(231,194,194,0.2)";
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 3px 12px rgba(231,194,194,0.12)";
          }}
        >
          <span
            style={{
              fontSize: "1.4em",
              marginBottom: 10,
              filter: "drop-shadow(0 1px 2px #ffe5d9)"
            }}
          >
            {treatmentEmojis[treatment]}
          </span>
          <h2
            style={{
              margin: 0,
              color: "#7a3e3e",
              fontSize: "1em",
              fontWeight: 700,
              letterSpacing: "0.5px"
            }}
          >
            {treatment}
          </h2>
          <p
            style={{
              marginTop: 8,
              color: "#4a2c2a",
              fontSize: "0.9em",
              lineHeight: 1.5
            }}
          >
            {treatmentDescriptions[treatment]}
          </p>
        </div>
      ))}
    </div>

    <div style={{ marginTop: 48, color: "#b07a7a", fontSize: "1.05rem", textAlign: "center" }}>
      <span style={{ fontWeight: 600 }}>Blossom Beauty Clinic</span> – Where beauty meets care.
    </div>
  </div>
);

export default About;