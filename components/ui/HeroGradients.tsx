"use client"

import { useScroll } from "@/providers/scroll-context";
import Image from "next/image";

export default function HeroGradients() {
  const { scrolled } = useScroll();

  return (
    <div className="fixed top-0 z-0 pointer-events-none min-h-screen">
      <div
        className={`relative w-screen min-h-screen transition-all`}
        style={{opacity: scrolled > 500 ? 0.5 : 1}}
      >
        <Image
          src="/gradients/hero.png"
          style={{ objectFit: "cover" }}
          fill
          alt="hero background"
          className="z-10 pointer-events-none"
        />
      </div>
    </div>
  );
}
