import { FaShare,FaPlay,FaSun,FaMoon } from "react-icons/fa";
import "./controlls.css"

const Controls = ({ onRun, onClear, onToggleTheme, theme }) => {

  
  return (

    <div style={{ padding: "10px", display: "flex", gap: "10px" ,inlineSize:"100%"}}>
        <div style={{inlineSize:"50%"}} className="left">
            <h3 style={{color:theme === "dark" ? "white":"black"}} >main.js</h3>
        </div>
     <div className="right-div">
         <button className="btn"  onClick={onRun}> <FaPlay size={15}/> Run</button>
         <button className="btn"  onClick={onClear}> <FaShare size={15}/> share</button>
         <button className="btn"   onClick={onToggleTheme}>
        {theme === "dark" ? (
  <>
              <FaSun size={15} /> Light
            </>
          ) : (
            <>
              <FaMoon size={15} /> Dark
            </>
          )}
      </button>
     </div>
    </div>
  );
};

export default Controls;