import { useEffect, useRef } from 'react';
import balancaVideo from '../assets/balanca.mp4';

export default function ScaleAnimation() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Create a temporary canvas for offscreen processing
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    if (!tempCtx) return;

    let animationFrameId: number;

    const processFrame = () => {
      if (video.paused || video.ended) {
        animationFrameId = requestAnimationFrame(processFrame);
        return;
      }

      const width = canvas.width;
      const height = canvas.height;

      tempCanvas.width = width;
      tempCanvas.height = height;

      // Draw the current video frame to the temporary canvas
      tempCtx.drawImage(video, 0, 0, width, height);

      try {
        const frame = tempCtx.getImageData(0, 0, width, height);
        const length = frame.data.length / 4;

        for (let i = 0; i < length; i++) {
          const r = frame.data[i * 4 + 0];
          const g = frame.data[i * 4 + 1];
          const b = frame.data[i * 4 + 2];

          // If the pixel is white or near-white (background of the stock video)
          if (r > 235 && g > 235 && b > 235) {
            frame.data[i * 4 + 3] = 0; // Make background pixel fully transparent
          } else {
            // Force the scale color to be exactly #e7aa56 (RGB: 231, 170, 86)
            frame.data[i * 4 + 0] = 231;
            frame.data[i * 4 + 1] = 170;
            frame.data[i * 4 + 2] = 86;

            // Calculate opacity based on original pixel intensity to preserve anti-aliasing & details
            const intensity = (r + g + b) / 3;
            const alpha = Math.max(0, 255 - (intensity * 1.08));
            frame.data[i * 4 + 3] = alpha;
          }
        }

        // Draw the processed transparent/gold pixels to the visible canvas
        ctx.putImageData(frame, 0, 0);
      } catch (e) {
        // Prevent CORS or draw issues from breaking execution
      }

      animationFrameId = requestAnimationFrame(processFrame);
    };

    const handlePlay = () => {
      processFrame();
    };

    video.addEventListener('play', handlePlay);

    if (!video.paused) {
      processFrame();
    }

    return () => {
      video.removeEventListener('play', handlePlay);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '50px', height: '50px', display: 'inline-block', transform: 'translateY(-6px)' }}>
      {/* Hidden video element supplying raw frames */}
      <video
        ref={videoRef}
        src={balancaVideo}
        autoPlay
        loop
        muted
        playsInline
        style={{ position: 'absolute', width: '1px', height: '1px', opacity: 0, pointerEvents: 'none' }}
      />
      {/* Rendered transparent canvas */}
      <canvas
        ref={canvasRef}
        width={100}
        height={100}
        style={{ width: '50px', height: '50px', display: 'block', pointerEvents: 'none' }}
      />
    </div>
  );
}
