import { Textarea as ChakraComponent } from "@chakra-ui/react";

ChakraComponent.defaultProps = {
  ...ChakraComponent.defaultProps,
  focusBorderColor: "purple.200",
  variant: "filled"
};

export const Textarea = {
  variants: {
    filled: {
      bg: "bg-contrast-sm",
      _hover: {
        bg: "bg-contrast-md"
      },
      _disabled: {
        bg: "bg-contrast-sm"
      }
    }
  }
};
