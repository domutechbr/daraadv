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

export default function ContratualIllustration({ animate }: { animate: string }) {
  return (
    <motion.svg
      viewBox="0 0 214 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', maxWidth: 300, display: 'block' }}
      initial="hidden"
      animate={animate}
    >
      {/* ── Document Outline ── */}
      {/* Left border */}
      <motion.line
        x1="56" y1="157" x2="56" y2="1"
        stroke={GOLD} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0)}
      />
      {/* Top border part 1 */}
      <motion.line
        x1="56" y1="1" x2="146" y2="1"
        stroke={GOLD} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.15)}
      />
      {/* Folded corner diagonal */}
      <motion.line
        x1="146.414" y1="1" x2="171" y2="25.5858"
        stroke={GOLD} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.3)}
      />
      {/* Right border */}
      <motion.line
        x1="171" y1="26.0001" x2="170.992" y2="158"
        stroke={GOLD} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.3)}
      />
      {/* Corner fold inside line */}
      <motion.path
        d="M145.5 1V26"
        stroke={GOLD_DIM} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.4)}
      />
      <motion.line
        x1="170" y1="26" x2="146" y2="26"
        stroke={GOLD_DIM} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.4)}
      />

      {/* ── Text Lines inside Document ── */}
      <motion.line
        x1="75" y1="43" x2="152" y2="43"
        stroke={GOLD_DIM} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.5)}
      />
      <motion.line
        x1="75" y1="61" x2="152" y2="61"
        stroke={GOLD_DIM} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.6)}
      />
      <motion.line
        x1="75" y1="80" x2="152" y2="80"
        stroke={GOLD_DIM} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.7)}
      />
      <motion.line
        x1="75" y1="99" x2="131" y2="99"
        stroke={GOLD_DIM} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.8)}
      />

      {/* ── Signature Line ── */}
      <motion.line
        x1="75" y1="143" x2="145" y2="143"
        stroke={GOLD} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.9)}
      />

      {/* ── Signature Ink ── */}
      <motion.path
        d="M75 130.5C91 109 103 108.5 87.5 136.5M88 136.5C96.9561 129.658 103.5 125.5 102 135M102.5 135C108.278 131.668 113.018 130.358 115.5 134C121.137 135.872 128.354 135.796 138 134.5"
        stroke={GOLD} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(1.0)}
      />

      {/* ── Ground line ── */}
      <motion.line
        x1="0.00469478" y1="158" x2="214.005" y2="159.005"
        stroke={GOLD} strokeWidth={1.2} strokeOpacity={0.3}
        variants={draw(1.2)}
      />
    </motion.svg>
  );
}
