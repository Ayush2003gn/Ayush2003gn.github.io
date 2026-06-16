import { useEffect, useRef, useState } from "react";
import transparentLogo from "../assets/akm-logo-transparent.png";

const PARTICLE_COUNT = 720;

function sampleLogoPoints(image, count) {
  const canvas = document.createElement("canvas");
  const width = 360;
  const height = Math.round((image.naturalHeight / image.naturalWidth) * width);
  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext("2d", { willReadFrequently: true });
  context.drawImage(image, 0, 0, width, height);
  const pixels = context.getImageData(0, 0, width, height).data;
  const points = [];

  for (let y = 0; y < height; y += 4) {
    for (let x = 0; x < width; x += 4) {
      const index = (y * width + x) * 4;
      const alpha = pixels[index + 3];
      const brightness = pixels[index] + pixels[index + 1] + pixels[index + 2];
      if (alpha > 70 && brightness > 120) {
        points.push({ x: x - width / 2, y: y - height / 2 });
      }
    }
  }

  return Array.from({ length: count }, (_, index) => {
    const point = points[(index * 37) % points.length] || { x: 0, y: 0 };
    return {
      id: index,
      startX: Math.random() * 920 - 460,
      startY: Math.random() * 620 - 310,
      x: point.x,
      y: point.y,
      delay: Math.random() * 0.65,
      size: 1 + Math.random() * 1.8,
    };
  });
}

export default function LoadingScreen({ onComplete }) {
  const [particles, setParticles] = useState([]);
  const [phase, setPhase] = useState("boot");
  const completedRef = useRef(false);

  useEffect(() => {
    const image = new Image();
    image.src = transparentLogo;
    image.onload = () => setParticles(sampleLogoPoints(image, PARTICLE_COUNT));

    const timers = [
      setTimeout(() => setPhase("forming"), 250),
      setTimeout(() => setPhase("glow"), 2150),
      setTimeout(() => setPhase("exit"), 3450),
      setTimeout(() => {
        if (!completedRef.current) {
          completedRef.current = true;
          onComplete();
        }
      }, 4200),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className={`loader loader--${phase}`} aria-label="AKM system initializing">
      <div className="loader__field">
        <div className="loader__particles" aria-hidden="true">
          {particles.map((particle) => (
            <span
              className="loader__particle"
              key={particle.id}
              style={{
                "--sx": `${particle.startX}px`,
                "--sy": `${particle.startY}px`,
                "--tx": `${particle.x}px`,
                "--ty": `${particle.y}px`,
                "--delay": `${particle.delay}s`,
                "--size": `${particle.size}px`,
              }}
            />
          ))}
        </div>
        <img src={transparentLogo} alt="" className="loader__ghost-logo" />
      </div>
      <p className="loader__text">AKM SYSTEM INITIALIZING...</p>
    </div>
  );
}
