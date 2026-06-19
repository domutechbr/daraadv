import { motion } from 'framer-motion';

const GOLD = '#C5A880';
const GOLD_DIM = 'rgba(197,168,128,0.65)';

const draw = (delay: number) => ({
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.2, ease: 'easeInOut' as const, delay },
      opacity:   { duration: 0.15, delay },
    },
  },
});

const SW = 2; // stroke-width

export default function TrabalhistaIllustration({ animate }: { animate: string }) {
  return (
    <motion.svg
      viewBox="0 0 198 145"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', maxWidth: 280, display: 'block' }}
      initial="hidden"
      animate={animate}
    >
      {/* ── Center Stand & Column ── */}
      {/* Base block */}
      <motion.path
        d="M107 87.5H99V82H107V87.5Z"
        stroke={GOLD} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0)}
      />
      {/* Center column outline */}
      <motion.path
        d="M115 74.5V89.5C114.326 92.3249 113.579 93.4375 111.5 94.5H95.5C93.5955 93.8753 92.7762 93.1275 91.5 91.5L91 74.5C91.282 72.5571 91.5256 71.5146 93.5 70.5H110.5C113.128 70.5844 114.252 71.1471 115 74"
        stroke={GOLD} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.15)}
      />

      {/* ── Top Beam / Hanger ── */}
      <motion.path
        d="M68 24V19H81V24"
        stroke={GOLD_DIM} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.3)}
      />
      <motion.path
        d="M125.5 24V19H138.5V24"
        stroke={GOLD_DIM} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.3)}
      />
      <motion.path
        d="M128.5 19V12C127.529 9.61113 126.693 9.02523 125 8.5H82.5C79.8627 9.062 78.9877 9.93039 78.5 12.5V18"
        stroke={GOLD_DIM} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.4)}
      />
      <motion.path
        d="M136 18.5V10C134.27 4.5076 132.776 2.07908 127.5 1H80C74.9045 2.3346 73.0034 4.1525 71.5 9.5V18"
        stroke={GOLD} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.5)}
      />

      {/* ── Horizontal Scale Beam ── */}
      <motion.path
        d="M182 30.5C180.68 27.1343 179.766 25.4202 176 24.5H31C27.5393 25.1934 25.8151 26.0735 24 30.5"
        stroke={GOLD} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.6)}
      />

      {/* ── Left Scale Plate & Chains ── */}
      <motion.path
        d="M24 31.5V63C24.712 65.1672 25.364 66.0549 27 67L34 71.5C35.2379 71.8127 36.0302 72.0475 37.5 72.5L90.5 80"
        stroke={GOLD_DIM} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.7)}
      />
      <motion.path
        d="M27 68V136.5C27.699 138.79 28.7375 139.606 31.5 142"
        stroke={GOLD} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.8)}
      />

      {/* ── Right Scale Plate & Chains ── */}
      <motion.path
        d="M182 31V61.5C182.015 64.5601 181.342 65.8617 179 67.5L172.5 71C170.735 72.0574 169.748 72.5148 168 73L116 80"
        stroke={GOLD_DIM} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.7)}
      />
      <motion.path
        d="M179 67V136C178.283 139.668 177.334 140.874 173.5 143.5"
        stroke={GOLD} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.8)}
      />

      {/* ── Ground Line ── */}
      <motion.line
        x1="1.00504" y1="143.005" x2="197.005" y2="143.995"
        stroke={GOLD} strokeWidth={1.2} strokeOpacity={0.3}
        strokeLinecap="round"
        variants={draw(1.0)}
      />
    </motion.svg>
  );
}
