
const Console = ({ output, theme ,onClear}) => {
  const isDark = theme === "dark";

  return (
    <div
      style={{
        background: isDark ? "#000" : "#fff",
        color: isDark ? "#0f0" : "#111",
        height: "100%",
        padding: "10px",
        overflowY: "auto",
        fontFamily: "monospace",
        borderLeft: "1px solid #ccc",
        whiteSpace : "pre"
      }}
    >
        <div style={{display:"flex",justifyContent:"space-between",borderBottom:isDark ? "2px solid white" : "2px solid black"}}>
      <h3 style={{ color: isDark ? "#fff" : "#000",paddingBlock:"8px" ,marginBottom:"15px" }}>Output</h3>
      <button style={{cursor: "pointer",blockSize:"30px",inlineSize:"70px"}} onClick={onClear}>🧹 Clear</button>
        </div>
      {output.length === 0
        ? <p style={{ color: "#888" }}>No output</p>
        : output.map((line, i) => <div key={i}>{line}</div>)
      }                                                    
    </div>
  );
};
export default Console;