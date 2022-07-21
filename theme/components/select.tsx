import { Select as ChakraComponent } from "@chakra-ui/react";

ChakraComponent.defaultProps = {
  ...ChakraComponent.defaultProps,
  focusBorderColor: "purple.200",
  variant: "filled"
};

export const Select = {
  variants: {
    filled: {
      field: {
        bg: "bg-contrast-sm",
        _hover: {
          bg: "bg-contrast-md"
        },
        _disabled: {
          bg: "bg-contrast-sm"
        }
      }
    }
  }
};
