// import Editor from "@monaco-editor/react";
// import Controls from "./Controlls";
// import "./editor.css";

// const CodeEditor = ({ code, setCode, theme, runCode, toggleTheme ,onShare,}) => {
//   return (
//     <div className="editor-section">
//       <Controls
//         onRun={runCode}
//         onToggleTheme={toggleTheme}
//         theme={theme}
//         code={code}
//         onShare={onShare}
//         // readOnly={readOnly}
//       />

//       <div className="editor-container">
//         <Editor
//           height="100%"
//           language="javascript"
//           theme={theme === "dark" ? "vs-dark" : "vs-light"}
//           value={code}
//           onChange={(v) => setCode(v)}
//           options={{
//             fontSize: 14,
//             minimap: { enabled: false },
//             automaticLayout: true
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default CodeEditor;
import Editor from "@monaco-editor/react";
import Controls from "./Controlls";
import "./editor.css";

const CodeEditor = ({
  code,
  setCode,
  theme,
  runCode,
  toggleTheme,
  onShare
}) => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="editor-section">
      <Controls
        onRun={runCode}
        onToggleTheme={toggleTheme}
        theme={theme}
        onShare={onShare}
      />

      <div className="editor-container">
        <Editor
          height="100%"
          language="javascript"
          theme={theme === "dark" ? "vs-dark" : "vs-light"}
          value={code}
          onChange={(v) => setCode(v ?? "")}
          options={{
            fontSize: isMobile ? 12 : 14,   // ✅ FIX
            lineHeight: isMobile ? 18 : 20, // ✅ VERY IMPORTANT
            minimap: { enabled: false },
            automaticLayout: true,
            scrollBeyondLastLine: false
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
