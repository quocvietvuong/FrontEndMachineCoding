import './App.css';
import { useState } from "react";
import usePasswordGenerator from './hooks/use-password-generator';

function App() {
  const [length, setLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);

  const { password, errorMessage, generatePassword } = usePasswordGenerator();

  const handleCheckboxChange = (i) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[i].state = !updatedCheckboxData[i].state
    setCheckboxData(updatedCheckboxData)
  }

  return (
    <div className="container">
      {/* Password Text and Copy Button */}
      {(password || errorMessage) && <div className="header">
        <div className={`title ${password ? "" : "em"}`}>{ password ? password : errorMessage }</div>
        <button className="copyBtn" onClick={() => { }}>Copy</button>
      </div>}
      {/* Character Length */}
      <div className="charlength">
        <span>
          <label>Character Length</label>
          <label>{length}</label>
        </span>
        <input
          type='range'
          min='4'
          max='20'
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      {/* Checkboxes */}
      <div className="checkboxes">
        {checkboxData.map((checkbox, index) => {
          return (
            <div key={index}>
              <input
                type='checkbox'
                checked={checkbox.state}
                onChange={() => handleCheckboxChange(index)}
              />
              <label>{checkbox.title}</label>
            </div>
          )
        })}
      </div>
      {/* Strength */}
      {/* Generate Button */}
      <button
        className="generateBtn"
        onClick={
          () => generatePassword(checkboxData, length)
        }
      >
        Generate Password
      </button>

    </div>
  );
}

export default App;
