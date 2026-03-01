"use client";

import { animated } from "@react-spring/web";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function AnimatedImage({
  url,
  className,
}: {
  url: string;
  className?: string;
}) {
  const { ref, style } = useFadeIn({ amount: "all" });

  return (
    <animated.img ref={ref} style={style} src={url} className={className} />
  );
}
