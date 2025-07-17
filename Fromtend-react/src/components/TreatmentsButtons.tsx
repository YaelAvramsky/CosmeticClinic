import React from "react";
import "./css/TreatmentsButtons.css"; // ייבוא קובץ העיצוב

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

const treatmentEmojis: { [key: string]: string } = {
  "Facial Treatment": "💆‍♀️",
  "Laser Hair Removal": "✨",
  "Manicure": "💅",
  "Pedicure": "🦶",
  "Anti-Aging Treatment": "🧴",
  "Acne Treatment": "🧖‍♀️",
  "Body Scrub": "🛁",
  "Microdermabrasion": "🔬"
};

const TreatmentsButtons: React.FC = () => {
  return (
    <div className="treatments-container">
      {treatments.map((treatment) => (
        <button
          key={treatment}
          className="treatment-btn-fancy"
          type="button"
        >
          <span className="treatment-emoji">{treatmentEmojis[treatment]}</span>
          <span>{treatment}</span>
        </button>
      ))}
    </div>
  );
};

export default TreatmentsButtons;