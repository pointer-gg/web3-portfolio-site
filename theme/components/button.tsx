import { mode } from "@chakra-ui/theme-tools";
import type { SystemStyleFunction } from "@chakra-ui/theme-tools";
import { Button as ChakraComponent } from "@chakra-ui/react";

export const Button = {
  baseStyle: {
    border: "sm",
    rounded: "none",
  },
  variants: {
    outline: {
      borderColor: "border-contrast-xl",
      _hover: {
        bg: "bg-contrast-md",
      },
      _active: {
        bg: "bg-contrast-xl",
      },
      _disabled: {
        bg: "bg-contrast-md",
      },
    },
  },
};

ChakraComponent.defaultProps = {
  ...ChakraComponent.defaultProps,
  fontSize: "lg",
  variant: "outline",
};
