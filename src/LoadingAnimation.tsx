import React, { useEffect, useRef } from "react";

interface LoadingAnimationProps {
  className?: string;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("2D context not supported");
      return;
    }

    // Set canvas dimensions to fill the parent container
    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };

    // Initialize canvas size
    resizeCanvas();

    // Handle window resize
    window.addEventListener("resize", resizeCanvas);

    let animationFrameId: number;
    let rotation = 0;

    // Define cube colors
    const colors = [
      "#DAA520", // front - goldenrod
      "#FF4500", // back - orange red
      "#000000", // top - black
      "#FFFFFF", // bottom - white
      "#800080", // right - purple
      "#FFA500", // left - orange
      "#00FF00", // additional color - green
      "#0000FF", // additional color - blue
    ];

    // Draw cube
    const drawCube = () => {
      const width = canvas.width;
      const height = canvas.height;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Center point
      const centerX = width / 2;
      const centerY = height / 2;

      // Cube size (relative to the canvas size)
      const cubeSize = Math.min(width, height) * 0.3;

      // Save canvas state
      ctx.save();

      // Move to center
      ctx.translate(centerX, centerY);

      // Rotate
      ctx.rotate(rotation);

      // Draw front face
      ctx.fillStyle = colors[0];
      ctx.fillRect(-cubeSize / 2, -cubeSize / 2, cubeSize, cubeSize);
      ctx.strokeStyle = "#FFFFFF";
      ctx.lineWidth = 2;
      ctx.strokeRect(-cubeSize / 2, -cubeSize / 2, cubeSize, cubeSize);

      // Draw right face
      ctx.fillStyle = colors[1];
      ctx.beginPath();
      ctx.moveTo(cubeSize / 2, -cubeSize / 2);
      ctx.lineTo(cubeSize / 2 + cubeSize / 4, -cubeSize / 2 - cubeSize / 4);
      ctx.lineTo(cubeSize / 2 + cubeSize / 4, cubeSize / 2 - cubeSize / 4);
      ctx.lineTo(cubeSize / 2, cubeSize / 2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Draw top face
      ctx.fillStyle = colors[2];
      ctx.beginPath();
      ctx.moveTo(-cubeSize / 2, -cubeSize / 2);
      ctx.lineTo(-cubeSize / 2 + cubeSize / 4, -cubeSize / 2 - cubeSize / 4);
      ctx.lineTo(cubeSize / 2 + cubeSize / 4, -cubeSize / 2 - cubeSize / 4);
      ctx.lineTo(cubeSize / 2, -cubeSize / 2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Restore canvas state
      ctx.restore();

      // Update rotation
      rotation += 0.02;

      // Request next frame
      animationFrameId = requestAnimationFrame(drawCube);
    };

    // Start animation
    drawCube();

    // Clean up
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className={className}
      style={{
        position: "absolute", // Make it a background
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </div>
  );
};

export default LoadingAnimation;