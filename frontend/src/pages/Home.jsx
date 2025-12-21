import { useRef, useState ,useEffect} from "react";
import CodeEditor from "../components/Editor";
import Console from "../components/Console";
import Controls from "../components/Controlls";
import Navbar from "../components/Navbar";
const Home = () => {
  const [code, setCode] = useState(`console.log("Hello World");`);
  const [output, setOutput] = useState([]);
  const [theme, setTheme] = useState("dark");


  useEffect(() => {
  const handleMessage = (event) => {
    if (!event.data || !event.data.type) return;

    if (event.data.type === "log") {
      setOutput(prev => [...prev, event.data.data]);
    }

    if (event.data.type === "error") {
      setOutput(prev => [...prev, "❌ " + event.data.data]);
    }
  };

  window.addEventListener("message", handleMessage);

  return () => {
    window.removeEventListener("message", handleMessage);
  };
}, []);

  const iframeRef = useRef(null);

  const runCode = () => {
    setOutput([]);

    const iframe = iframeRef.current;

    iframe.srcdoc = `
      <!DOCTYPE html>
      <html>
        <body>
          <script>
            const send = (type, data) => {
              parent.postMessage({ type, data }, "*");
            };

            console.log = (...args) => {
              send("log", args.join(" "));
            };

            console.error = (...args) => {
              send("error", args.join(" "));
            };

            try { 
              ${code}
            } catch (err) {
              send("error", err.message);
            }
          <\/script>
        </body>
      </html>
    `;

    // Stop infinite loops after 2s
    setTimeout(() => {
      iframe.srcdoc = "";
      setOutput(prev => [
        ...prev,
        "⚠ Execution stopped (possible infinite loop)"
      ]);
    }, 2000);
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
    <Navbar theme={theme} />
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: theme === "dark" ? "#121212" : "#f5f5f5"
      }}
    >
       
      <div style={{ flex: 1 , inlineSize:"100%"}}>
        <Controls
          onRun={runCode}
          onClear={() => setOutput([])}
          onToggleTheme={toggleTheme}
          theme={theme}
        />

        <CodeEditor
          code={code}
          setCode={setCode}
          theme={theme}
        />
      </div>

      <div style={{ width: "40%" }}>
        <Console output={output} theme={theme} onClear={() => setOutput([])}/>
      </div>

      {/* Sandbox iframe */}
      <iframe
        ref={iframeRef}
        sandbox="allow-scripts"
        style={{ display: "none" }}
        title="sandbox"
      />
    </div>
    </>
  );
};
export default Home;