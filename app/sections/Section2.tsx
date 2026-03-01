"use client";

import { useFadeIn } from "@/hooks/useFadeIn";
import { flower_3, leafe_1, flower_4 } from "../images";

import { animated } from "@react-spring/web";

interface Section2Props {
  paragraph1: string;
  paragraph2: string;
}

export default function Section2({ paragraph1, paragraph2 }: Section2Props) {
  const { ref, style } = useFadeIn({ amount: 0.5 });

  return (
    <animated.div
      ref={ref}
      style={style}
      className="container mx-auto mt-20 px-4 space-y-10"
    >
      <div className="space-y-10">
        <img src={flower_3.src} className="w-40" />
        <h2 className="text-7xl">Totul a început cu un swipe.</h2>
        <img src={leafe_1.src} className="w-20 -rotate-16 animate-floating" />
      </div>
      <div className="space-y-5">
        <p className="text-lg">{paragraph1}</p>
        <p className="text-lg">{paragraph2}</p>
      </div>
      <div>
        <img src={flower_4.src} className="w-40 animate-floating" />
      </div>
    </animated.div>
  );
}
