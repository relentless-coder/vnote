import React, { useEffect, useRef } from 'react';
import { Setup } from '../../components/Page/index';

const SetupLayer = function () {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const setupPage = () => {
    const pixelRatio = window.devicePixelRatio || 1;
    const innerHeight = window.innerHeight * pixelRatio;
    const innerWidth = window.innerWidth * pixelRatio;
    const ctx = contextRef.current;
    console.log(ctx, innerWidth);
    ctx.beginPath();
    ctx.moveTo(0, 5);
    ctx.lineTo(50, 10);
    for (let i = 70; i < innerHeight - 70; i = i + 70) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(innerWidth, i);
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.moveTo(100, 0);
    ctx.lineTo(100, innerHeight);
    ctx.stroke();
  };


  useEffect(() => {
    const canvas = canvasRef.current;
    const pixelRatio = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * pixelRatio;
    canvas.height = window.innerHeight * pixelRatio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    canvas.style.border = `2px solid black`;
    const context = canvas.getContext('2d');
    contextRef.current = context;
    setupPage();
  }, []);

  return <Setup canvasRef={canvasRef} />;
};

export { SetupLayer };
