"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const x = useSpring(0, { damping: 32, stiffness: 260, mass: 0.42 });
  const y = useSpring(0, { damping: 32, stiffness: 260, mass: 0.42 });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setEnabled(mediaQuery.matches);

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX - 14);
      y.set(event.clientY - 14);
      setVisible(true);
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[120] hidden h-7 w-7 rounded-full border border-white/20 bg-white/[0.06] backdrop-blur-sm md:block"
      style={{ x, y, opacity: visible ? 1 : 0 }}
    >
      <span className="absolute inset-[5px] rounded-full border border-white/20" />
    </motion.div>
  );
}
