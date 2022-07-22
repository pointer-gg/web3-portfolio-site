import MotionText, { MotionTextVariants } from "./MotionText";

const spring = {
  type: "spring",
  mass: 0.5,
  damping: 35,
  stiffness: 200,
  restDelta: 0.000001,
};

const CHAR_DELAY = 0.05;

interface TextRevealProps {
  text: string;
  delay?: number;
}

const variants: MotionTextVariants = {
  char: {
    hidden: (context) => ({
      y: "100%",
    }),
    visible: (context) => ({
      y: 0,
      transition: {
        ...spring,
        delay: context.char.index * CHAR_DELAY + (context.data?.delay || 0),
      },
    }),
  },
};

const TextReveal = ({ text, delay = 0 }: TextRevealProps) => {
  return (
    <MotionText
      initial="hidden"
      animate="visible"
      variants={variants}
      text={text}
      data={{ delay }}
    />
  );
};

export default TextReveal;
