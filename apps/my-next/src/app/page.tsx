// 'use client'
// import React, { useState, ChangeEvent } from 'react';
import styles from './page.module.css';
import { hexToRgb } from '@mono-paradise/ui';
import ClientComponent from '../components/clientComponent';
// import ServerComponent from '../components/serverComponent';

export default function Index() {
  // const [hexColor, setHexColor] = useState('#ff0000');

  // const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setHexColor(event.target.value);
  // };

  return (
    <div className={styles.page}>
      <ClientComponent />

      {/* <ClientComponent>
        <ServerComponent />
      </ClientComponent> */}
      {/* <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome my-next 👋
            </h1>
          </div>
          <div className="color_block">
            <div className="hex_block">
              HEX: <input type="text" value={hexColor} onChange={handleInputChange} />
            </div>
            <div className="color_view_block">
              <div style={{ backgroundColor: hexColor, width: '100%', height: '200px', borderRadius: '5px' }}></div>
            </div>
            <div className="rgb_block">
              <p>R: {hexToRgb(hexColor).r}</p>
              <p>G: {hexToRgb(hexColor).g}</p>
              <p>B: {hexToRgb(hexColor).b}</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
