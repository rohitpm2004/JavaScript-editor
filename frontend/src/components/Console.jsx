import "./console.css"
import { FaShare } from "react-icons/fa";
const Console = ({ output, theme ,onClear }) => {
  const isDark = theme === "dark";

  return (
    <div
    className="console-section"
      style={{
        background: isDark ? "#000" : "#fff",
        color: isDark ? "#0f0" : "#111",
        height: "100%",
        padding: "10px",
        overflowY: "auto",
        fontFamily: "monospace",
        whiteSpace : "pre"
      }}
    >
        <div className="wrap-btns" >  
      <h3 style={{ color: isDark ? "#fff" : "#000"}} className="console-h3" >Output</h3>
      <button className="clearbtn" onClick={onClear}> Clear</button>
        </div> 
      {output.length === 0
        ? <p style={{ color: "#888" }}>No output</p>
        : output.map((line, i) => <div key={i}>{line}</div>) 
      }                                                    
    </div>
  );
};
export default Console;