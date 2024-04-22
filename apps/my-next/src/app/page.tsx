'use client'
import React, { useState, ChangeEvent  } from 'react';
import styles from './page.module.css';
import { hexToRgb } from '@mono-paradise/ui';

export default function Index() {
  const [hexColor, setHexColor] = useState('#ff0000');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setHexColor(event.target.value);
  };

  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome my-next 👋
            </h1>
          </div>
          <input type="text" value={hexColor} onChange={handleInputChange} />
          <p>RGB: {hexToRgb(hexColor)}</p>
          <div style={{ backgroundColor: hexToRgb(hexColor), width: '100px', height: '100px' }}></div>
        </div>
      </div>
    </div>
  );
}
