import { useRef, useEffect, useState } from 'react';
import { useScrollProgress } from '../hooks/useScroll';
import './ScrollScrub.css';

const PLACEHOLDER_COLORS = [
  '#0f1d14', '#132a1a', '#183420', '#1e3d27',
  '#234730', '#295138', '#2f5b41', '#35664a',
];

export default function ScrollScrub({ sectionId, frameCount = 60, framePath = '', children }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [frames, setFrames] = useState([]);
  const progress = useScrollProgress(containerRef);

  const currentFrame = Math.min(
    Math.floor(progress * frameCount),
    frameCount - 1
  );

  useEffect(() => {
    if (!framePath || frameCount === 0) return;

    const loaded = [];
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = framePath.replace('{i}', String(i).padStart(4, '0'));
      loaded.push(img);
    }
    setFrames(loaded);
  }, [framePath, frameCount]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    if (frames.length > 0 && frames[currentFrame]?.complete) {
      const img = frames[currentFrame];
      canvas.width = img.naturalWidth || 1920;
      canvas.height = img.naturalHeight || 1080;
      ctx.drawImage(img, 0, 0);
    } else {
      canvas.width = 1920;
      canvas.height = 1080;
      const colorIndex = Math.floor((currentFrame / frameCount) * PLACEHOLDER_COLORS.length);
      ctx.fillStyle = PLACEHOLDER_COLORS[colorIndex] || PLACEHOLDER_COLORS[0];
      ctx.fillRect(0, 0, 1920, 1080);

      ctx.fillStyle = 'rgba(215, 185, 159, 0.06)';
      ctx.beginPath();
      ctx.arc(960, 540, 200 + currentFrame * 3, 0, Math.PI * 2);
      ctx.fill();
    }
  }, [currentFrame, frames, frameCount]);

  return (
    <section className="scroll-scrub" id={sectionId} ref={containerRef}>
      <div className="scroll-scrub__canvas-wrap">
        <canvas ref={canvasRef} className="scroll-scrub__canvas" />
      </div>
      <div className="scroll-scrub__overlay">
        {children && children(progress)}
      </div>
    </section>
  );
}
