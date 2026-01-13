// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
import { StrictMode } from "react"; 
import { createRoot } from "react-dom/client";
import ReactModal from "react-modal";
import "./index.css";
import App from "./App.jsx";

// ✅ REQUIRED for react-modal (accessibility)
ReactModal.setAppElement("#root");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
