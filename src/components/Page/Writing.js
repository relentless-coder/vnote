import React from 'react';

const Writing = function ({canvasRef, onMouseDown, onMouseUp, onMouseMove}) {
	return (
    <canvas
      className="writing-layer"
      style={{ zIndex: 1 }}
      ref={canvasRef}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    />
  );
}

export { Writing };
