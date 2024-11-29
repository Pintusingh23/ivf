import React from "react";
import Navbar from "./Navbar"; 
import ProgressCircle from "./ProgressCircle";
import "./ResultScreen.css";

const ResultScreen = ({ successRate, onGoBack }) => {
  return (
    <div className="result-screen">
      <Navbar /> {/* Add Navbar at the top */}
      <h1>Your Estimated IVF Success Rate</h1>
      <ProgressCircle percentage={successRate} />
      <p>With 1 IVF Cycle</p>
      <img
        src="https://s3-alpha-sig.figma.com/img/3083/cfdf/a3342bdeb14d22fce3f84a7131648fe0?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m3rcPSzyYXFQ3av1UzjVwX~ywz9ut1Jmpzmx6Z~RWwUd~~r9UxNnyNl4R9JldCD4zDCW7Q2IeQvOvnDs6u4pyH3CTfoUnO5v492UL1iuyJt3I3zHG387QUApgjGytHwEVS51em2fW5HQXigaiOLgI6ldEf-XgFWD-AZPB6squ7fJ1sPU5SEgs04SJJgSlkJzl1Ka-Ed1OsDBqFXjBxAf7zZ~60XEh1fn~sDWw58OaB~z-10gRcakHkeVapNSDVELmye3t0JjF7zlsu5d9JV7LvBxi6ry6D-l1bYi0r8uWHVFccwd~tuvdXccvuZZNeoqnR6oiSRnQkxLHAzIzIkmVQ__"
        alt="Happy Couple"
        className="result-image"
      />
      <button className="back-button" onClick={onGoBack}>
        Go Back 
      </button>
    </div>
  );
};

export default ResultScreen;
