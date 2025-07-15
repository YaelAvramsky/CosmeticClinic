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
    <div
      style={{
        maxWidth: 600,
        margin: "40px auto",
        padding: "40px 24px",
        background: "linear-gradient(120deg, #fbeee6 0%, #f7cac9 100%)",
        borderRadius: "28px",
        boxShadow: "0 10px 36px rgba(200,150,150,0.18)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <style>
        {`
          .treatment-btn-fancy {
            width: 98%;
            min-width: 320px;
            max-width: 540px;
            padding: 12px 0;
            font-size: 1.18rem;
            border-radius: 32px;
            border: none;
            background: linear-gradient(90deg, #f7cac9 0%, #ffe5d9 100%);
            color: #7a3e3e;
            font-weight: 700;
            margin-bottom: 20px;
            box-shadow: 0 4px 18px rgba(231,194,194,0.13);
            transition: 
              background 0.22s,
              color 0.22s,
              box-shadow 0.22s,
              transform 0.15s;
            cursor: pointer;
            letter-spacing: 1px;
            position: relative;
            overflow: hidden;
            outline: none;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 18px;
          }
          .treatment-btn-fancy:last-child {
            margin-bottom: 0;
          }
          .treatment-btn-fancy::after {
            content: "";
            position: absolute;
            left: 50%;
            top: 50%;
            width: 0;
            height: 0;
            background: rgba(231,194,194,0.18);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.3s, height 0.3s;
            z-index: 0;
          }
          .treatment-btn-fancy:hover, .treatment-btn-fancy:focus {
            color: #fff;
            background: linear-gradient(90deg, #e7c2c2 0%, #f9d5d5 100%);
            box-shadow: 0 8px 28px rgba(231,194,194,0.22);
            transform: scale(1.03);
          }
          .treatment-btn-fancy:hover::after, .treatment-btn-fancy:focus::after {
            width: 220%;
            height: 220%;
          }
          .treatment-btn-fancy span {
            position: relative;
            z-index: 1;
          }
          .treatment-emoji {
            font-size: 1.4em;
            margin-right: 10px;
            filter: drop-shadow(0 1px 2px #ffe5d9);
          }
        `}
      </style>
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
