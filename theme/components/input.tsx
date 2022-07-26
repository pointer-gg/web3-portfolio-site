import { Input as ChakraComponent } from "@chakra-ui/react";

ChakraComponent.defaultProps = {
  ...ChakraComponent.defaultProps,
  focusBorderColor: "white",
  variant: "outline",
  rounded: "none",
};

export const Input = {
  variants: {
    outline: {
      field: {
        bg: "transparent",
        border: "sm",
        color: "text-contrast-md",

        _hover: {
          border: "sm",
        },
        _disabled: {
          border: "sm",
        },
        _placeholder: {
          color: "text-contrast-sm",
        },
      },
    },
  },
};
