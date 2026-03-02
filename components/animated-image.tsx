"use client";

import useFadeIn from "@/hooks/useFadeIn";
import { cn } from "@/lib/utils";

export default function AnimatedImage({
  url,
  className,
}: {
  url: string;
  className?: string;
}) {
  const { ref, isVisible } = useFadeIn({ threshold: 1 });

  return (
    <div
      ref={ref}
      className={cn(
        "transition-opacity duration-1000 ease-in-out",
        isVisible ? "opacity-100" : "opacity-0",
      )}
    >
      <img src={url} className={className} />
    </div>
  );
}
