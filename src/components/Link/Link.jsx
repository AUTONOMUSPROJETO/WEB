import { useState } from 'react';
import { link, icon_style } from "./Link.module.css";
import { useNavigate } from "react-router-dom";

function Link({ children, icon, to, click, linkHoverColor }) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const linkClick = () => {
    if (click) {
      click();
    }
    if (to) {
      navigate(to);
    }
  };

  const linkStyle = {
    color: isHovered ? (linkHoverColor || '#ffb85c') : 'black',
  };

  return (
    <a 
      onClick={linkClick} 
      className={link}
      style={linkStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* <span className={icon_style}>{icon}</span> */}
      {children}
    </a>
  );
}

export default Link;