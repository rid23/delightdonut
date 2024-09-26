import React, { useState, useEffect } from 'react';
import '../styles/MoveDoughnut.css'; 

function MoveDoughnut() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="container" onMouseMove={handleMouseMove}>
      <div 
        className="box" 
        style={{
          transform: `translate(${mousePosition.x / 20}px, ${mousePosition.y / 20}px)`
        }}
      >
        Move me hello !
      </div>
    </div>
  );
}

export default MoveDoughnut;