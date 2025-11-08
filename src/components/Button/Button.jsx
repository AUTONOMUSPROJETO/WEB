import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { btn, outroBtn } from "./Button.module.css";

function Button({ text, variante, to, onClick, btnColor, btnHoverColor }) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const buttonClick = (e) => {
    if (onClick) onClick(e);
    if (to) navigate(to);
  };

  const buttonStyle = {
    backgroundColor: isHovered ? (btnHoverColor || '#000') : (btnColor || '#FFC300'),
    color: isHovered ? '#fff' : '#000',
    transition: '0.3s ease-in-out',
  };

  return (
    <button
      onClick={buttonClick}
      className={variante === 'outroBtn' ? outroBtn : btn}
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </button>
  );
}

export default Button;