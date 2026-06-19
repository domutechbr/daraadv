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

export default function DigitalIllustration({ animate }: { animate: string }) {
  return (
    <motion.svg
      viewBox="0 0 240 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', maxWidth: 300, display: 'block' }}
      initial="hidden"
      animate={animate}
    >
      {/* ── Outer Shield Outline ── */}
      <motion.path
        d="M 120 5 C 150 25 180 30 205 35 C 205 90 185 145 120 175 C 55 145 35 90 35 35 C 60 30 90 25 120 5 Z"
        stroke={GOLD} strokeWidth={SW}
        strokeLinecap="round" strokeLinejoin="round"
        variants={draw(0)}
      />

      {/* ── Inner Shield Outline ── */}
      <motion.path
        d="M 120 22 C 145 39 170 43 193 47 C 193 90 175 135 120 162 C 65 135 47 90 47 47 C 70 43 95 39 120 22 Z"
        stroke={GOLD_DIM} strokeWidth={1.5}
        strokeLinecap="round" strokeLinejoin="round"
        variants={draw(0.25)}
      />

      {/* ── Padlock Double Shackle ── */}
      {/* Outer Shackle */}
      <motion.path
        d="M 92 80 V 55 C 92 37 148 37 148 55 V 80"
        stroke={GOLD} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.4)}
      />
      {/* Inner Shackle */}
      <motion.path
        d="M 102 80 V 57 C 102 47 138 47 138 57 V 80"
        stroke={GOLD_DIM} strokeWidth={1.5}
        strokeLinecap="round"
        variants={draw(0.5)}
      />

      {/* ── Padlock Body ── */}
      <motion.rect
        x="81" y="80" width="78" height="55" rx="8"
        stroke={GOLD} strokeWidth={SW}
        strokeLinecap="round" strokeLinejoin="round"
        variants={draw(0.65)}
      />

      {/* ── Keyhole Outline ── */}
      <motion.path
        d="M 120 94 C 124.5 94 128 97.5 128 102 C 128 105.5 126 108 123.5 109.5 L 125 124 H 115 L 116.5 109.5 C 114 108 112 105.5 112 102 C 112 97.5 115.5 94 120 94 Z"
        stroke={GOLD} strokeWidth={1.8}
        strokeLinecap="round" strokeLinejoin="round"
        variants={draw(0.85)}
      />

      {/* ── Ground Line ── */}
      <motion.line
        x1="5" y1="178" x2="235" y2="178"
        stroke={GOLD} strokeWidth={1.2} strokeOpacity={0.3}
        strokeLinecap="round"
        variants={draw(1.05)}
      />
    </motion.svg>
  );
}
