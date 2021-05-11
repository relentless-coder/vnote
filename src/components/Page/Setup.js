import React from 'react';
import './index.css';

const Setup = function({canvasRef}){
  return <canvas ref={canvasRef} style={{'zIndex': '0'}}/>;
}

export {Setup};
