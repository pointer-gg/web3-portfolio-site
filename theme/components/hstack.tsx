import { HStack as ChakraComponent } from "@chakra-ui/react";

ChakraComponent.defaultProps = {
  ...ChakraComponent.defaultProps,
  spacing: "md"
};

export const HStack = {};
