import { motion } from 'framer-motion';

const GOLD = '#C5A880';
const GOLD_DIM = 'rgba(197,168,128,0.65)';

const draw = (delay: number) => ({
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.4, ease: 'easeInOut' as const, delay },
      opacity:   { duration: 0.15, delay },
    },
  },
});

const SW = 2.8; // stroke-width

export default function CivelIllustration({ animate }: { animate: string }) {
  return (
    <motion.svg
      viewBox="0 0 260 175"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', maxWidth: 340, display: 'block' }}
      initial="hidden"
      animate={animate}
    >
      {/* ── LEFT PERSON (behind, smaller) ── */}
      {/* Head: cx=62, cy=68, r=22 → bottom at y=90 */}
      <motion.circle
        cx="62" cy="68" r="22"
        stroke={GOLD_DIM} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.35)}
      />
      {/* Body starts at y=90 (exact bottom of head) */}
      <motion.path
        d="M 32 152 C 32 115 44 90 62 90 C 80 90 92 115 92 152"
        stroke={GOLD_DIM} strokeWidth={SW}
        strokeLinecap="round" strokeLinejoin="round"
        variants={draw(0.5)}
      />

      {/* ── RIGHT PERSON (behind, smaller) ── */}
      {/* Head: cx=198, cy=68, r=22 → bottom at y=90 */}
      <motion.circle
        cx="198" cy="68" r="22"
        stroke={GOLD_DIM} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.35)}
      />
      {/* Body starts at y=90 */}
      <motion.path
        d="M 168 152 C 168 115 180 90 198 90 C 216 90 228 115 228 152"
        stroke={GOLD_DIM} strokeWidth={SW}
        strokeLinecap="round" strokeLinejoin="round"
        variants={draw(0.5)}
      />

      {/* ── CENTER PERSON (front, larger) ── */}
      {/* Head: cx=130, cy=50, r=28 → bottom at y=78 */}
      <motion.circle
        cx="130" cy="50" r="28"
        stroke={GOLD} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0)}
      />
      {/* Body starts at y=78 (exact bottom of head) */}
      <motion.path
        d="M 90 152 C 90 110 105 78 130 78 C 155 78 170 110 170 152"
        stroke={GOLD} strokeWidth={SW}
        strokeLinecap="round" strokeLinejoin="round"
        variants={draw(0.15)}
      />

      {/* ── Ground line ── */}
      <motion.line
        x1="22" y1="157" x2="238" y2="157"
        stroke={GOLD} strokeWidth={1.2} strokeOpacity={0.3}
        strokeLinecap="round"
        variants={draw(1.1)}
      />
    </motion.svg>
  );
}
