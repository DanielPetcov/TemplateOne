import { useSpring } from "@react-spring/web";

export function useFloating() {
  const style = useSpring({
    from: { transform: "translateY(0px)" },
    to: { transform: "translateY(-10px)" },
    loop: { reverse: true },
    config: { duration: 3000 },
  });

  return style;
}
