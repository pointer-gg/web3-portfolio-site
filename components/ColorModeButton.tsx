import { IconButton, useColorMode } from "@chakra-ui/react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const ColorModeButton = () => {
  const colorMode = useColorMode();
  return (
    <IconButton
      as={DarkModeSwitch}
      checked={colorMode.colorMode === "dark"}
      onChange={(checked) => {
        if (checked) {
          colorMode.setColorMode("dark");
        } else {
          colorMode.setColorMode("light");
        }
      }}
      size="md"
      p="sm"
      rounded={"full"}
      aria-label="Switch app theme"
    />
  );
};
export default ColorModeButton;
