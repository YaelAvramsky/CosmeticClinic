import React, { useState } from "react";
import './css/About.css';

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

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % treatments.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + treatments.length) % treatments.length);
  };

  return (
    <div className="about-container">
      <h1 className="about-title">✨ Discover Our Treatments ✨</h1>

      {!Number.isInteger(activeIndex) && (
        <div className="treatment-grid">
          {treatments.map((treatment, idx) => (
            <div
              key={treatment}
              className="treatment-card"
              style={{ background: `var(--gradient-${idx % 8})` }}
              onClick={() => setActiveIndex(idx)}
            >
              <span className="treatment-emoji">{treatmentEmojis[treatment]}</span>
              <h2 className="treatment-name">{treatment}</h2>
              <p className="treatment-description">{treatmentDescriptions[treatment]}</p>
            </div>
          ))}
        </div>
      )}

      {Number.isInteger(activeIndex) && (
        <div
          className="treatment-overlay"
          style={{ background: `var(--gradient-${activeIndex % 8})` }}
        >
          <button className="close-button" onClick={() => setActiveIndex(null)}>✕</button>
          <span className="overlay-emoji">{treatmentEmojis[treatments[activeIndex]]}</span>
          <h2 className="overlay-title">{treatments[activeIndex]}</h2>
          <p className="overlay-description">{treatmentDescriptions[treatments[activeIndex]]}</p>

          <div className="arrow left" onClick={handlePrev}>‹</div>
          <div className="arrow right" onClick={handleNext}>›</div>
        </div>
      )}

      <div className="about-footer">
        <span>Blossom Beauty Clinic</span> – Where beauty meets care.
      </div>
    </div>
  );
};

export default About;