 
// import Editor from "@monaco-editor/react";
// import Controls from "./Controlls";
// import "./editor.css"
// const CodeEditor = ({ code, setCode, theme,onRun, onClear, onToggleTheme,toggleTheme ,runCode}) => {
//   return (
//     <>
//     <div className="editor-section">
//     <Controls
//           onRun={runCode}
//           onClear={() => setOutput([])}
//           onToggleTheme={toggleTheme}
//           theme={theme}
//         />
//     <div
//     // className="editor-section"
//       style={{
//         width: "100%",
//         height: "92.5%",
//         resize: "horizontal",
//         overflow: "auto",
//         border: "1px solid #333"
//       }}
//     >
//       <div className="editor-wrap" style={{backgroundColor:"red"}}>
//       <Editor
//       // className="edit"
//         // height="100%"
//         language="javascript"
//         theme={theme === "dark" ? "vs-dark" : "vs-light"}
//         value={code}
//         onChange={(v) => setCode(v)}
//         options={{
//           className:"edit",
//           fontSize:"16px",
//           minimap: { enabled: false },
//           // automaticLayout: true
//         }}
//       />
//       </div>
//     </div>
//     </div>
//     </>
//   );
// };

// export default CodeEditor;


import Editor from "@monaco-editor/react";
import Controls from "./Controlls";
import "./editor.css";

const CodeEditor = ({ code, setCode, theme, runCode, toggleTheme }) => {
  return (
    <div className="editor-section">
      <Controls
        onRun={runCode}
        onToggleTheme={toggleTheme}
        theme={theme}
      />

      <div className="editor-container">
        <Editor
           
          width="100%"
          language="javascript"
          theme={theme === "dark" ? "vs-dark" : "vs-light"}
          value={code}
          onChange={(v) => setCode(v)}
          options={{
            fontSize: 16,
            minimap: { enabled: false },
            automaticLayout: true
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
