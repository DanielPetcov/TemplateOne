"use client";

import { useFadeIn } from "@/hooks/useFadeIn";
import { flower_1, leafe_2, leafe_1, flower_2 } from "../images";

import { animated } from "@react-spring/web";
import { useFloating } from "@/hooks/useFloating";

interface Section1Props {
  couplePhoto1Url: string;
  herName: string;
  hisName: string;
  date: string;
  location: string;
}

export default function Section1({
  couplePhoto1Url,
  herName,
  hisName,
  date,
  location,
}: Section1Props) {
  const { ref, style } = useFadeIn({ amount: 0.5 });

  const floatingStyle = useFloating();

  return (
    <animated.div
      ref={ref}
      style={style}
      className="container mx-auto bg-custom-main px-2"
    >
      <div className="flex flex-col gap-10 items-center justify-center">
        <div>
          <div className="max-w-sm md:max-w-md relative">
            <img src={couplePhoto1Url} />
            <animated.div
              style={floatingStyle}
              className="absolute top-10 -translate-1/2 w-40 h-40 z-1"
            >
              <img src={flower_1.src} className="w-40 absolute  z-1" />
              <img
                src={leafe_2.src}
                className="w-20 absolute top-15 left-25 -translate-y-1/2 rotate-90 z-0"
              />
            </animated.div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-10">
          <h1 className="text-8xl text-center">
            {herName} <br /> & {hisName}
          </h1>
          <div className="w-full flex flex-col md:flex-row gap-5 items-center justify-between">
            <div className="text-center text-xl">
              <p>{date}</p>
              <p>{location}</p>
            </div>
            <div className="max-w-3xs relative w-20 h-20 mt-10">
              <img
                src={leafe_1.src}
                className="w-16 absolute -top-10 -left-20 -rotate-45 z-0"
              />
              <img
                src={flower_2.src}
                className="max-w-none w-52 absolute z-1 top-1/2 left-[calc(50%+2rem)] -translate-1/2"
              />
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
}
