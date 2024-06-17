import React, { useRef, useState } from 'react';
import CanvasDraw from 'react-canvas-draw';
import './App.css';

const SignaturePad = () => {
  const canvasRef = useRef();
  const [penColor, setPenColor] = useState('#000000');
  const [penThickness, setPenThickness] = useState(2);

  const saveImage = (format) => {
    const canvas = canvasRef.current.canvasContainer.childNodes[1];
    const dataUrl = canvas.toDataURL(`image/${format}`);
    
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = `signature.${format}`;
    link.click();
  };

  const clearCanvas = () => {
    canvasRef.current.clear();
  };

  const handleColorChange = (color) => {
    // Clear and redraw the canvas with the new color
    setPenColor(color);
    console.log(color);
    setTimeout(() => {
        if (canvasRef.current) {
            // Attempt to clear the canvas
            canvasRef.current.clear();
            
            // Load empty or default data to reset the canvas
            const defaultSaveData = '{"lines":[],"width":500,"height":300}';
            canvasRef.current.loadSaveData(defaultSaveData, true);
          }
      }, 0);
  };

  return (
    <div className="signature-pad">
      <CanvasDraw 
        ref={canvasRef}
        style={{ width: '100%', maxWidth: '100%' }}
        canvasHeight={300}
        brushColor={penColor}
        brushRadius={penThickness}
        lazyRadius={0}
      />
      <div className="controls">
        <label>
            Pen Color: &nbsp;&nbsp;
          <input
            type="color"
            value={penColor}
            onChange={(e) => handleColorChange(e.target.value)}
          />
        </label>
        <label>
          Pen Thickness:&nbsp;&nbsp;
          <input
            type="number"
            value={penThickness}
            onChange={(e) => setPenThickness(e.target.value)}
            min="1"
            max="20"
          />
        </label>
        <button className='clear-button' onClick={clearCanvas}>
          Clear
        </button>
      </div>
      <div className="save-buttons">
        <button onClick={() => saveImage('png')}>Save as PNG</button>
        <button onClick={() => saveImage('jpeg')}>Save as JPEG</button>
      </div>
    </div>
  );
};

export default SignaturePad;
