import React, { useEffect, useState, useRef } from 'react';
import { Writing } from '../../components/Page/index';

const WritingLayer = function () {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isWriting, setIsWriting] = useState(false);
  const [steps, updateSteps] = useState([]);
  const pixelRatio = window.devicePixelRatio || 1;
  const innerHeight = window.innerHeight * pixelRatio;
  const innerWidth = window.innerWidth * pixelRatio;
  const setupTool = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const savedSteps = [];
    context.scale(2, 2);
    context.lineCap = 'round';
    context.strokeStyle = 'black';
    context.lineWidth = 1;
    contextRef.current = context;
    savedSteps.forEach((el) => {
      switch (`${el.step}`) {
        case 'mT':
          contextRef.current.beginPath();
          const [a, b] = el.points;
          contextRef.current.moveTo(a, b);
          break;
        case 'cP':
          contextRef.current.closePath();
          break;
        case 'lT':
          const [c, d] = el.points;
          contextRef.current.lineTo(c, d);
          contextRef.current.stroke();
          break;
      }
    });
  };
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    canvas.style.border = `2px solid black`;
    setupTool();
  }, []);
  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    updateSteps([
      ...steps,
      { step: 'bP' },
      { step: 'mT', points: [offsetX, offsetY] },
    ]);
    setIsWriting(true);
  };
  const stopDrawing = () => {
    contextRef.current.closePath();
    updateSteps([...steps, { step: 'cP' }]);
    console.log(steps);
    setIsWriting(false);
  };
  const draw = ({ nativeEvent }) => {
    if (!isWriting) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    updateSteps([
      ...steps,
      { step: 'lT', points: [offsetX, offsetY] },
      { step: 'sT' },
    ]);
  };
  return (
    <Writing
      canvasRef={canvasRef}
      onMouseDown={startDrawing}
      onMouseUp={stopDrawing}
      onMouseMove={draw}
    />
  );
};

export { WritingLayer };
