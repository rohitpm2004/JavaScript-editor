import "./console.css";

const Console = ({ output, theme, onClear }) => {
  const isDark = theme === "dark";

  return (
    <div
      className="console-section"
      style={{
        background: isDark ? "#000" : "#fff",
        color: isDark ? "#0f0" : "#111",
      }}
    >
      {/* Header */}
      <div className="wrap-btns">
        <h3
          className="console-h3"
          style={{ color: isDark ? "#fff" : "#000" }}
        >
          Output
        </h3>
        <button className="clearbtn" onClick={onClear}>
          Clear
        </button>
      </div>

      {/* ✅ Scrollable Output */}
      <div className="console-output">
        {output.length === 0 ? (
          <p style={{ color: "#888" }}>No output</p>
        ) : (
          output.map((line, i) => <div key={i}>{line}</div>)
        )}
      </div>
    </div>
  );
};

export default Console;
