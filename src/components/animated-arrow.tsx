import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

export function AnimatedArrow({
  direction = "right",
  className = "",
}: {
  direction?: "right" | "left" | "diagonal";
  className?: string;
}) {
  const Icon = direction === "left" ? FaArrowLeft : direction === "diagonal" ? FiArrowUpRight : FaArrowRight;
  const motion = direction === "left"
    ? "group-hover/arrow:-translate-x-2 group-focus-visible/arrow:-translate-x-2"
    : direction === "diagonal"
      ? "group-hover/arrow:translate-x-1 group-hover/arrow:-translate-y-1 group-focus-visible/arrow:translate-x-1 group-focus-visible/arrow:-translate-y-1"
      : "group-hover/arrow:translate-x-2 group-focus-visible/arrow:translate-x-2";

  return <Icon aria-hidden="true" className={`inline-block size-3.5 shrink-0 align-middle transition-transform duration-200 motion-reduce:transform-none ${motion} ${className}`} />;
}
