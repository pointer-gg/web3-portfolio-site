import * as React from "react";
import {
  motion,
  MotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
} from "framer-motion";
import { useScrollClock } from "../hooks";

interface TickerProps extends React.HTMLProps<HTMLDivElement> {
  loopDuration?: number;
  direction?: "x" | "y";
  children: React.ReactNode;
}

const Ticker = ({
  loopDuration = 12000,
  direction = "x",
  children,
  ...otherProps
}: TickerProps) => {
  const clock = useScrollClock({ scrollAccelerationFactor: 15 });
  const progress = useTransform(
    clock,
    (time) => (time % loopDuration) / loopDuration
  );
  const percentage = useTransform(progress, (t) => t * 100);
  const translation = useMotionTemplate`-${percentage}%`;
  const styleAttr = direction === "y" ? "translateY" : "translateX";
  const leftOffset = direction === "y" ? 0 : "100%";
  const topOffset = direction === "y" ? "100%" : 0;

  return (
    <div
      {...otherProps}
      style={{
        position: "relative",
        display: "inline-block",
        overflow: "hidden",
        ...otherProps.style,
      }}
    >
      <motion.div style={{ [styleAttr]: translation }}>
        <div>{children}</div>
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            left: leftOffset,
            top: topOffset,
          }}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default Ticker;
