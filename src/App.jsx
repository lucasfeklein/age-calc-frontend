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

  const [validation, setValidation] = useState({
    valid: true,
    day: true,
    month: true,
    year: true,
  });

  const { day, month, year } = dateObject;

  const validColor = validation.valid ? "" : "hsl(0, 100%, 67%)";

  const handleInput = (e) => {
    const { name, value } = e.target;
    setDateObject((prevDate) => ({
      ...prevDate,
      [name]: value,
    }));
  };

  const validateInput = (name, value) => {
    switch (name) {
      case "day":
        // Validate day input (1 to 31)
        return (
          /^\d{1,2}$/.test(value) &&
          parseInt(value, 10) >= 1 &&
          parseInt(value, 10) <= 31
        );

      case "month":
        // Validate month input (1 to 12)
        return (
          /^\d{1,2}$/.test(value) &&
          parseInt(value, 10) >= 1 &&
          parseInt(value, 10) <= 12
        );

      case "year":
        // Validate year input (a valid range for your use case)
        return (
          /^\d{4}$/.test(value) &&
          parseInt(value, 10) >= 1900 &&
          parseInt(value, 10) <= 2100
        );

      default:
        return true;
    }
  };

  const handleClick = () => {
    // Validate all inputs before proceeding
    const isValidDay = validateInput("day", day);
    const isValidMonth = validateInput("month", month);
    const isValidYear = validateInput("year", year);

    if (isValidDay && isValidMonth && isValidYear) {
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
      setValidation({
        valid: true,
        day: isValidDay,
        month: isValidMonth,
        year: isValidYear,
      });
    } else {
      setValidation({
        valid: false,
        day: isValidDay,
        month: isValidMonth,
        year: isValidYear,
      });
    }
  };

  return (
    <div className="container">
      <div className="calc-container">
        <div className="input-container">
          <label style={{ color: validColor }}>
            DAY
            <input
              placeholder="DD"
              value={day}
              onChange={handleInput}
              name="day"
              type="number"
              style={{
                borderColor: validColor,
              }}
            />
            {!validation.day && (
              <p className="invalid-alert">Must be a valid day</p>
            )}
          </label>
          <label style={{ color: validColor }}>
            MONTH
            <input
              placeholder="MM"
              value={month}
              onChange={handleInput}
              name="month"
              type="number"
              style={{
                borderColor: validColor,
              }}
            />
            {!validation.month && (
              <p className="invalid-alert">Must be a valid month</p>
            )}
          </label>
          <label style={{ color: validColor }}>
            YEAR
            <input
              placeholder="YYYY"
              value={year}
              onChange={handleInput}
              name="year"
              type="number"
              style={{
                borderColor: validColor,
              }}
            />
            {!validation.year && (
              <p className="invalid-alert">Must be a valid year</p>
            )}
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
