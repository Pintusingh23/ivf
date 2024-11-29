import React from "react";
import './ProgressCircle.css';  // Make sure this is the correct relative path


const ProgressCircle = ({ percentage }) => {
  return (
    <div className="progress-circle">
      <svg viewBox="0 0 36 36" className="circular-chart">
        <path
          className="circle-bg"
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="circle"
          strokeDasharray={`${percentage}, 100`}
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <span className="percentage">{percentage}%</span>
    </div>
  );
};

export default ProgressCircle;
