import { useInView, useSpring } from "@react-spring/web";

export function useFadeIn({ amount }: { amount: "all" | number }) {
  const [ref, inView] = useInView({
    once: true,
    amount: amount,
  });

  const style = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(40px)",
    config: { tension: 120, friction: 20 },
  });

  return { ref, style };
}
