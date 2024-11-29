import React, { useState } from "react";
import './InputScreen.css';  
import Navbar from "./Navbar";

const InputScreen = ({ onCalculate }) => {
  const [ageGroup, setAgeGroup] = useState("");
  const [ivfCycles, setIvfCycles] = useState(1);
  const [conditions, setConditions] = useState({
    PCOS: false,
    Endometriosis: false,
    LowOvarianReserve: false,
    MaleFactorInfertility: false,
  });
  const [procedures, setProcedures] = useState({
    IUI: false,
    EggFreezing: false,
    DonorEgg: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate({ ageGroup, ivfCycles, conditions, procedures });
  };

  return (
    <div>
      <Navbar/>
      <div className="input-screen">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <span className="logo-highlight">iVF</span> Pulse
        </div>
        <ul className="navbar-links">
          <li><a href="#donor-program">Donor Programme</a></li>
          <li><a href="#fertility-preservation">Fertility Preservation</a></li>
          <li><a href="#advanced-treatment">Advanced Treatments</a></li>
          <li><a href="#ivf-testing">IVF Testing</a></li>
          <li><a href="#about-us">About Us</a></li>
        </ul>
        <button className="navbar-button">
          Talk to Us <span className="arrow">&rarr;</span>
        </button>
      </nav>

      {/* Form Section */}
      <h3>Which age range applies to you?</h3>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <div className="radio-buttons">
            {/* Age Groups */}
            <div className="radio-row">
              <label>
                <input
                  type="radio"
                  name="ageGroup"
                  value="Under 30"
                  onChange={(e) => setAgeGroup(e.target.value)}
                />
                Under 30
              </label>
              <label>
                <input
                  type="radio"
                  name="ageGroup"
                  value="30-34"
                  onChange={(e) => setAgeGroup(e.target.value)}
                />
                30-34
              </label>
              <label>
                <input
                  type="radio"
                  name="ageGroup"
                  value="35-37"
                  onChange={(e) => setAgeGroup(e.target.value)}
                />
                35-37
              </label>
            </div>
            <div className="radio-row">
              <label>
                <input
                  type="radio"
                  name="ageGroup"
                  value="38-40"
                  onChange={(e) => setAgeGroup(e.target.value)}
                />
                38-40
              </label>
              <label>
                <input
                  type="radio"
                  name="ageGroup"
                  value="41-43"
                  onChange={(e) => setAgeGroup(e.target.value)}
                />
                41-43
              </label>
              <label>
                <input
                  type="radio"
                  name="ageGroup"
                  value="Above 43"
                  onChange={(e) => setAgeGroup(e.target.value)}
                />
                Above 43
              </label>
            </div>
          </div>
        </div>

        {/* IVF Cycles */}
        <div className="form-group">
          <label>Number of IVF Cycles:</label>
          <input
            type="range"
            min="1"
            max="5"
            value={ivfCycles}
            onChange={(e) => setIvfCycles(e.target.value)}
          />
          <p>{ivfCycles} IVF Cycle(s)</p>
        </div>

        {/* Previous Procedures */}
        <div className="form-group">
          <label>Have you undergone these procedures before?</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                onChange={(e) =>
                  setProcedures({ ...procedures, IUI: e.target.checked })
                }
              />

              yes
            </label>
            <label>
              <input
                type="checkbox"
                onChange={(e) =>
                  setProcedures({ ...procedures, EggFreezing: e.target.checked })
                }
              />
              no
            </label>
            {/* <label>
              <input
                type="checkbox"
                onChange={(e) =>
                  setProcedures({ ...procedures, DonorEgg: e.target.checked })
                }
              />
              Donor Egg
            </label> */}
          </div>
        </div>

        {/* Medical Conditions */}
        <div className="form-group">
          <label>Do you have any of these medical conditions?</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                onChange={(e) =>
                  setConditions({ ...conditions, PCOS: e.target.checked })
                }
              />
              PCOS
            </label>
            <label>
              <input
                type="checkbox"
                onChange={(e) =>
                  setConditions({ ...conditions, Endometriosis: e.target.checked })
                }
              />
              Endometriosis
            </label>
            <label>
              <input
                type="checkbox"
                onChange={(e) =>
                  setConditions({
                    ...conditions,
                    LowOvarianReserve: e.target.checked,
                  })
                }
              />
              Low Ovarian Reserve
            </label>
            <label>
              <input
                type="checkbox"
                onChange={(e) =>
                  setConditions({
                    ...conditions,
                    LowOvarianReserve: e.target.checked,
                  })
                }
              />
              Male Factor Infertility
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="calculate-button">
          Calculate
        </button>
      </form>
    </div>
    </div>
    
  );
};

export default InputScreen;
