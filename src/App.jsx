import { useState } from "react";

function App() {
  const [dateObject, setDateObject] = useState({
    day: "",
    month: "",
    year: "",
  });

  const { day, month, year } = dateObject;

  const handleInput = (e) => {
    setDateObject((prevDate) => ({
      ...prevDate,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container">
      <div className="calc-container">
        <div className="input-container">
          <label>
            DAY
            <input
              value={day}
              onChange={handleInput}
              name="day"
              type="number"
            />
          </label>
          <label>
            MONTH
            <input
              value={month}
              onChange={handleInput}
              name="month"
              type="number"
            />
          </label>
          <label>
            YEAR
            <input
              value={year}
              onChange={handleInput}
              name="year"
              type="number"
            />
          </label>
          <button>
            <img src="/icon-arrow.svg" />
          </button>
        </div>
        <div className="text-container">
          <h2>
            <span>-- </span>years
          </h2>
          <h2>
            <span>-- </span>months
          </h2>
          <h2>
            <span>-- </span>days
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;
