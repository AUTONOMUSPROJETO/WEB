// CardHome.js
import React from 'react';
import styles from './CardHome.module.css';

const CardHome = ({ title, description, icon, iconColor, hoverBgColor }) => {
  return (
    <div 
      className={styles.card} 
      style={{ '--hover-bg-color': hoverBgColor }} // Set the CSS variable here
    >
      <div className={styles.icon} style={{ color: iconColor }}>
        {icon}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default CardHome;