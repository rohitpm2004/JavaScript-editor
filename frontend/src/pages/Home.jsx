import { useRef, useState, useEffect } from "react";
import CodeEditor from "../components/Editor";
import Console from "../components/Console";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShareModal from "../components/ShareModal";
import "./home.css";
import { saveCode } from "../services/api";

const Home = ({ initialCode = null, readOnly = false }) => {
  const [code, setCode] = useState(
    initialCode ?? `console.log("Hello World");`
  );
  const [output, setOutput] = useState([]);
  const [theme, setTheme] = useState("dark");

   // Share modal state
   const [isShareOpen, setIsShareOpen] = useState(false);
   const [shareUrl, setShareUrl] = useState("");

  // Listen for iframe logs
  useEffect(() => {
    const handleMessage = (event) => {
      if (!event.data || !event.data.type) return;

      if (event.data.type === "log") {
        setOutput((prev) => [...prev, event.data.data]);
      }

      if (event.data.type === "error") {
        setOutput((prev) => [...prev, "❌ " + event.data.data]);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
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

            console.log = (...args) => send("log", args.join(" "));
            console.error = (...args) => send("error", args.join(" "));

            try {
              ${code}
            } catch (err) {
              send("error", err.message);
            }
          </script>
        </body>
      </html>
    `;
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };



    const handleShare = async () => {
    try {
      const data = await saveCode(code);
      setShareUrl(data.url);
      setIsShareOpen(true);
    } catch {
      alert("Failed to share code");
    }
  };

  return (
    <>
      <Navbar theme={theme} />

      <div className={`container ${theme}`}>
        <div className="main-layout">
          <CodeEditor
            code={code}
            setCode={setCode}
            theme={theme}
            toggleTheme={toggleTheme}
            runCode={runCode}
            readOnly={readOnly}
            onShare={handleShare}
          />
        </div>

        <div className="console-layout">
          <Console
            output={output}
            theme={theme}
            onClear={() => setOutput([])}
          />
        </div>

        <iframe
          ref={iframeRef}
          sandbox="allow-scripts"
          style={{ display: "none" }}
          title="sandbox"
        />
      </div>
      <ShareModal
        isOpen={isShareOpen}
        url={shareUrl}
        onClose={() => setIsShareOpen(false)}
      />
     

      <Footer theme={theme} />
    </>
  );
};

export default Home;
