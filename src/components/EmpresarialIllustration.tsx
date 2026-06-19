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

export default function EmpresarialIllustration({ animate }: { animate: string }) {
  return (
    <motion.svg
      viewBox="0 0 264 183"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', maxWidth: 320, display: 'block' }}
      initial="hidden"
      animate={animate}
    >
      {/* ── Tallest Central Column/Spine ── */}
      <motion.line
        x1="157" y1="0.0231781" x2="157" y2="182.023"
        stroke={GOLD} strokeWidth={SW}
        variants={draw(0)}
      />
      <motion.line
        x1="90" y1="32.0232" x2="90" y2="182.023"
        stroke={GOLD} strokeWidth={SW}
        variants={draw(0.15)}
      />

      {/* ── Left Roof & Outer Wall ── */}
      <motion.line
        x1="156.431" y1="0.92554" x2="89.431" y2="32.9255"
        stroke={GOLD} strokeWidth={SW}
        variants={draw(0.25)}
      />
      <motion.line
        x1="89.4256" y1="70.3155" x2="52.2923" y2="84.5975"
        stroke={GOLD} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.35)}
      />
      <motion.line
        x1="52" y1="85.0232" x2="52" y2="181.023"
        stroke={GOLD} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.4)}
      />

      {/* ── Right Building Blocks ── */}
      <motion.line
        x1="157.414" y1="0.999997" x2="186.977" y2="29.6092"
        stroke={GOLD} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.3)}
      />
      <motion.line
        x1="187" y1="30.0232" x2="187" y2="80.0232"
        stroke={GOLD} strokeWidth={SW}
        variants={draw(0.4)}
      />
      <motion.line
        x1="157.784" y1="85.8465" x2="190.823" y2="79.2387"
        stroke={GOLD} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.45)}
      />
      <motion.line
        x1="191" y1="79.0232" x2="191" y2="182.023"
        stroke={GOLD} strokeWidth={SW}
        variants={draw(0.5)}
      />
      <motion.line
        x1="191.364" y1="79.6511" x2="224.628" y2="98.6588"
        stroke={GOLD} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.55)}
      />
      <motion.line
        x1="225.012" y1="99.0112" x2="225.988" y2="181.011"
        stroke={GOLD} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.6)}
      />

      {/* ── Left Column Windows ── */}
      <motion.line
        x1="102.514" y1="53.7055" x2="141.682" y2="36.5095"
        stroke={GOLD_DIM} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.5)}
      />
      <motion.path
        d="M102.563 70.1776L142.348 54.4605"
        stroke={GOLD_DIM} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.6)}
      />
      <motion.line
        x1="102.497" y1="87.4167" x2="141.846" y2="73.7405"
        stroke={GOLD_DIM} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.7)}
      />
      <motion.line
        x1="102.276" y1="103.77" x2="142.43" y2="92.6809"
        stroke={GOLD_DIM} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.8)}
      />
      <motion.line
        x1="102.568" y1="120.796" x2="143.041" y2="110.929"
        stroke={GOLD_DIM} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.9)}
      />

      {/* ── Right Column Windows ── */}
      <motion.line
        x1="200.294" y1="109.454" x2="216.43" y2="115.729"
        stroke={GOLD_DIM} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.7)}
      />
      <motion.line
        x1="200.268" y1="125.397" x2="216.664" y2="130.959"
        stroke={GOLD_DIM} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.8)}
      />
      <motion.line
        x1="200.193" y1="142.264" x2="216.241" y2="145.83"
        stroke={GOLD_DIM} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.9)}
      />

      {/* ── Internal Pillars / Structural Lines ── */}
      <motion.line
        x1="65" y1="93.0232" x2="65" y2="170.023"
        stroke={GOLD_DIM} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.5)}
      />
      <motion.line
        x1="78" y1="88.0232" x2="78" y2="170.023"
        stroke={GOLD_DIM} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.55)}
      />
      <motion.line
        x1="105.903" y1="146.511" x2="137.958" y2="144.539"
        stroke={GOLD} strokeWidth={SW}
        strokeLinecap="square"
        variants={draw(0.75)}
      />
      <motion.line
        x1="106" y1="147.023" x2="106" y2="181.023"
        stroke={GOLD_DIM} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.8)}
      />
      <motion.line
        x1="122" y1="146.023" x2="122" y2="181.023"
        stroke={GOLD_DIM} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.85)}
      />
      <motion.line
        x1="138" y1="145.023" x2="138" y2="181.023"
        stroke={GOLD_DIM} strokeWidth={SW}
        strokeLinecap="round"
        variants={draw(0.9)}
      />

      {/* ── Ground Line ── */}
      <motion.line
        x1="0" y1="181.023" x2="264" y2="181.023"
        stroke={GOLD} strokeWidth={1.2} strokeOpacity={0.3}
        variants={draw(1.1)}
      />
    </motion.svg>
  );
}
