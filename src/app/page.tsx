"use client";

import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [refInView, inView] = useInView({ triggerOnce: true });

  // Define individual spring animations with staggered delays
  const navSpring = useSpring({
    from: { y: 100, opacity: 0 },
    to: { y: inView ? 0 : 100, opacity: inView ? 1 : 0 },
    config: { tension: 80, friction: 10 },
    delay: 0,
    reset: true,
  });

  const contentSpring = useSpring({
    from: { y: 100, opacity: 0 },
    to: { y: inView ? 0 : 100, opacity: inView ? 1 : 0 },
    config: { tension: 80, friction: 10 },
    delay: 300,
    reset: true,
  });

  const imageSpring = useSpring({
    from: { y: 100, opacity: 0 },
    to: { y: inView ? 0 : 100, opacity: inView ? 1 : 0 },
    config: { tension: 80, friction: 10 },
    delay: 600,
    reset: true,
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <animated.nav className="aero-theme aero-navbar" style={{ ...navSpring }} ref={refInView}>
        <div className="flex items-center justify-between">
          <div className="aero-nav-logo text-lg font-bold">Thanawat Fun</div>
          <nav className="aero-nav-menu flex space-x-4">
            <a href="#home" className="aero-theme aero-link">Home</a>
            <a href="#about" className="aero-theme aero-link">About</a>
            <a href="#contact" className="aero-theme aero-link">Contact</a>
          </nav>
        </div>
      </animated.nav>
      <animated.div
        className="flex flex-col items-center justify-center"
        style={{ ...contentSpring }}
        ref={refInView}
      >
        <h1 className="text-4xl font-bold">thanawat.fun</h1>
        <p className="mt-1 text-sm">This is my personal blog.</p>
      </animated.div>
      <div className="flex items-center justify-center">
        <animated.div
          className="aero-theme aero-image-profile"
          style={{ ...imageSpring }}
        >
          <Image
            src="/assets/profile.jpg"
            width={300}
            height={300}
            alt="Profile Picture"
            className="rounded-full"
          />
        </animated.div>
      </div>
      <animated.button className="aero-theme aero-button">ตรงใจสุด ๆ</animated.button>
      <animated.div className="aero-theme aero-footer" style={{ ...navSpring }}>
        © 2025 Thanawat Fun. All rights reserved.
      </animated.div>
    </main>
  );
}
