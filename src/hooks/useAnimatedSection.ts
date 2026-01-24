"use client";

import { useSpring } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

const springConfig = { tension: 120, friction: 14 };

export function useAnimatedSection(delay: number = 100) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const style = useSpring({
    from: { y: 60, opacity: 0 },
    to: { y: inView ? 0 : 60, opacity: inView ? 1 : 0 },
    config: springConfig,
    delay,
  });

  return { ref, style };
}
