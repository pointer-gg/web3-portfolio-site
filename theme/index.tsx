import { extendTheme } from "@chakra-ui/react";
import { styles } from "./styles";
import { textStyles, fonts } from "./text";
import { semanticTokens } from "./tokens";
import { colors } from "./colors";
import { components } from "./components";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  fonts,
  config,
  styles,
  colors,
  textStyles,
  semanticTokens,
  shadows: { outline: "0 0 0 3px var(--chakra-colors-focus-ring)" },
  components,
});
