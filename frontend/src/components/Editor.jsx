import Editor from "@monaco-editor/react";

const CodeEditor = ({ code, setCode, theme }) => {
  return (
    <Editor
      height="90%"
      language="javascript"
      theme={theme === "dark" ? "vs-dark" : "vs-light"}
      value={code}
      onChange={(v) => setCode(v)}
      options={{
        
        fontSize: 18,
        minimap: { enabled: false }
      }}
    />
  );
};

export default CodeEditor;