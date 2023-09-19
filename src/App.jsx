function App() {
  return (
    <div className="container">
      <div className="calc-container">
        <div className="input-container">
          <label>
            DAY
            <input type="number" />
          </label>
          <label>
            MONTH
            <input type="number" />
          </label>
          <label>
            YEAR
            <input type="number" />
          </label>
        </div>
        <div>
          <h2>
            <span>--</span>years
          </h2>
          <h2>
            <span>--</span>months
          </h2>
          <h2>
            <span>--</span>days
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;