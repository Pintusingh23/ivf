import React, { useState } from "react";
import InputScreen from "./components/InputScreen";
import ResultScreen from "./components/ResultScreen";

function App() {
  const [showResult, setShowResult] = useState(false);
  const [successRate, setSuccessRate] = useState(0);

  const handleCalculate = (data) => {
    // Logic to calculate success rate
    const randomRate = Math.floor(Math.random() * 100);
    setSuccessRate(randomRate);
    setShowResult(true);
  };

  return (
    <div className="App">
      {showResult ? (
        <ResultScreen successRate={successRate} />
      ) : (
        <InputScreen onCalculate={handleCalculate} />
      )}
    </div>
  );
}

export default App;

