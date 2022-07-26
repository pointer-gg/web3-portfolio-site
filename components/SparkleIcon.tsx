import React from "react";
import { chakra, ChakraComponent } from "@chakra-ui/react";

const Svg = chakra("svg");

function SparkleIcon(props: ChakraComponent<"svg">) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="1200"
      height="1200"
      fill="none"
      viewBox="0 0 1200 1200"
      display="inline-block"
      {...props}
    >
      <path
        fill="var(--chakra-colors-text-contrast-xl)"
        d="M0 600s242.071-115.807 361.352-234.406C482.258 245.378 600 0 600 0s114.481 245.669 234.406 365.594C954.331 485.519 1200 600 1200 600S954.162 712.448 834.406 831.754C713.638 952.07 600 1200 600 1200S483.1 952.353 361.352 831.754C242.247 713.774 0 600 0 600z"
      ></path>
    </Svg>
  );
}

SparkleIcon.defaultProps = {
  h: 4,
  w: 4,
};

export default SparkleIcon;
