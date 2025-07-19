// src/components/TreatmentsWithDate.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTreatment } from "../redux/TreatmentsSlice";
import { checkClientTreatmentPackage } from "../../api"; // ודאי שהנתיב נכון
import "./css/TreatmentsButtons.css";

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

const TreatmentsWithDate: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clientId = useSelector((state: any) => state.login.id);
  const selectedTreatment = useSelector((state: any) => state.treatments.treatment);

  const handleCheckPackage = async () => {
    if (!selectedTreatment) {
      alert("Please select a treatment first 💡");
      return;
    }

    try {
      const hasPackage = await checkClientTreatmentPackage(clientId, selectedTreatment);
      if (hasPackage) {
        navigate("/newAppointment"); // מעביר לקומפוננטת בחירת תור
      } else {
        navigate("/Payment"); // מעביר למסך שמסביר שאין חבילה
      }
    } catch (error) {
      alert("Error checking treatment package ❌");
      console.error(error);
    }
  };

  return (
    <div className="treatments-container">
      {treatments.map((treatment) => (
        <button
          key={treatment}
          className="treatment-btn-fancy"
          type="button"
          onClick={() => dispatch(setTreatment(treatment))}
        >
          <span className="treatment-emoji">{treatmentEmojis[treatment]}</span>
          <span>{treatment}</span>
        </button>
      ))}

      <button className="choose-date-btn" onClick={handleCheckPackage}>
        Choose Date
      </button>
    </div>
  );
};

export default TreatmentsWithDate;