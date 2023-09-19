import { useState } from "react";

function App() {
  const [dateObject, setDateObject] = useState({
    day: "",
    month: "",
    year: "",
  });

  const [calcObj, setCalcObj] = useState({
    years: null,
    months: null,
    days: null,
  });

  const { day, month, year } = dateObject;

  const handleInput = (e) => {
    setDateObject((prevDate) => ({
      ...prevDate,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = () => {
    // Convert input values to integers
    const inputDay = parseInt(day, 10);
    const inputMonth = parseInt(month, 10);
    const inputYear = parseInt(year, 10);

    // Create Date objects for the input date and current date
    const inputDate = new Date(inputYear, inputMonth - 1, inputDay); // Month is zero-based
    const currentDate = new Date();

    // Calculate the time difference in milliseconds
    const timeDifference = currentDate - inputDate;

    // Calculate years, months, and days
    const years = Math.floor(timeDifference / (365 * 24 * 60 * 60 * 1000));
    const months = Math.floor(
      (timeDifference % (365 * 24 * 60 * 60 * 1000)) /
        (30 * 24 * 60 * 60 * 1000)
    );
    const days = Math.floor(
      ((timeDifference % (365 * 24 * 60 * 60 * 1000)) %
        (30 * 24 * 60 * 60 * 1000)) /
        (24 * 60 * 60 * 1000)
    );

    // Update calcObj state with the calculated values
    setCalcObj({
      years,
      months,
      days,
    });
  };

  return (
    <div className="container">
      <div className="calc-container">
        <div className="input-container">
          <label>
            DAY
            <input
              placeholder="DD"
              value={day}
              onChange={handleInput}
              name="day"
              type="number"
            />
          </label>
          <label>
            MONTH
            <input
              placeholder="MM"
              value={month}
              onChange={handleInput}
              name="month"
              type="number"
            />
          </label>
          <label>
            YEAR
            <input
              placeholder="YYYY"
              value={year}
              onChange={handleInput}
              name="year"
              type="number"
            />
          </label>
          <button onClick={handleClick}>
            <img src="/icon-arrow.svg" />
          </button>
        </div>
        <div className="text-container">
          <h2>
            <span>{calcObj.years ? calcObj.years : "--"} </span>years
          </h2>
          <h2>
            <span>{calcObj.months ? calcObj.months : "--"} </span>months
          </h2>
          <h2>
            <span>{calcObj.days ? calcObj.days : "--"} </span>days
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;
