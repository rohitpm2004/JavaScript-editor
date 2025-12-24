
import React from "react";
import { FaHeart } from "react-icons/fa";

import "./footer.css";

const Footer = ({ theme }) => {
  return (
    <footer
      className={`footer ${theme}`}
    >
      <h1>Made with <FaHeart color="red" fontSize="18px"/> by the Barabari EdTech Team</h1>
      <p>Practice today. Build tomorrow.</p>
    </footer>
  );
};

export default Footer;
