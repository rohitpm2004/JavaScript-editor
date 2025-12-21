import { FaShare } from "react-icons/fa";


const Controls = ({ onRun, onClear, onToggleTheme, theme }) => {
  return (

    <div style={{ padding: "10px", display: "flex", gap: "10px" ,inlineSize:"100%"}}>
        <div style={{inlineSize:"50%"}} className="left">
            <h3 style={{color:theme === "dark" ? "white":"black"}} >main.js</h3>
        </div>
     <div style={{padding: "10px", display: "flex", gap: "10px",justifyContent:"right",inlineSize:"50%"  }} className="right">
         <button style={{cursor: "pointer",display:"flex",inlineSize:"60px",blockSize:"30px",justifyContent:"center",alignItems:"center"}}  onClick={onRun}>▶ Run</button>
         <button style={{cursor: "pointer",display:"flex",inlineSize:"60px",blockSize:"30px",justifyContent:"center",alignItems:"center" }} onClick={onClear}> <FaShare size={15}/> share</button>
        <button style={{cursor: "pointer",display:"flex",inlineSize:"60px",blockSize:"30px",justifyContent:"center",alignItems:"center"}} onClick={onToggleTheme}>
        {theme === "dark" ? "☀ Light" : "🌙 Dark"}
      </button>
     </div>
    </div>
  );
};

export default Controls;