import * as React from "react";
import { useScrollState, useScrollValue } from "scrollex";
import {
  useAnimationFrame,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

type ScrollStatus = "up" | "down" | "static";
type ScrollDirection = "up" | "down";

// Derive current scroll status from velocity
const useScrollStatus = (): ScrollStatus => {
  const status = useScrollState(({ velocity }) => {
    if (velocity > 0) {
      return "down";
    } else if (velocity < 0) {
      return "up";
    } else {
      return "static";
    }
  });
  return status || "static";
};

// This will never return to static, it will remember the last scroll direction
const useLastScrollDirection = (): ScrollDirection => {
  const [lastDirection, setLastDirection] =
    React.useState<ScrollDirection>("down");
  const scrollStatus = useScrollStatus();
  React.useEffect(() => {
    if (scrollStatus === "up" || scrollStatus === "down") {
      setLastDirection(scrollStatus);
    }
  }, [scrollStatus]);
  return lastDirection;
};

// Get scroll position as MotionValue
const useScrollPosition = () => {
  return useScrollValue(({ position }) => position);
};

// Reversible clock as MotionValue
const useClock = ({ defaultValue = 0, reverse = false } = {}) => {
  const rawClock = useMotionValue(0);
  const clock = useMotionValue(defaultValue);
  useAnimationFrame((t) => {
    const dt = t - rawClock.get();
    rawClock.set(rawClock.get() + dt);
    if (reverse) {
      clock.set(clock.get() - dt);
    } else {
      clock.set(clock.get() + dt);
    }
  });
  return clock;
};

// Compose all of our helper hooks into a clock
// that depends on scroll direction/position
export const useScrollClock = ({ scrollAccelerationFactor = 10 } = {}) => {
  const scrollPosition = useScrollPosition();
  const lastScrollDirection = useLastScrollDirection();
  const clock = useClock({
    defaultValue: Date.now(),
    reverse: lastScrollDirection === "up",
  });

  const scrollClock = useTransform(
    [clock, scrollPosition as any],
    ([time, pos]: number[]) => time + (pos || 0) * scrollAccelerationFactor
  );

  // Smooth out motion with a spring
  return useSpring(scrollClock, { mass: 0.05, stiffness: 100, damping: 10 });
};
