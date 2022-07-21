import { mode } from "@chakra-ui/theme-tools";
import type { SystemStyleFunction } from "@chakra-ui/theme-tools";

const variantSolid: SystemStyleFunction = (props) => {
  const { colorScheme: c } = props;

  if (c === "gray") {
    const bg = mode(`gray.100`, `whiteAlpha.50`)(props);

    return {
      bg,
      _hover: {
        bg: mode(`gray.200`, `whiteAlpha.200`)(props),
        _disabled: {
          bg
        }
      },
      _active: { bg: mode(`gray.300`, `whiteAlpha.300`)(props) }
    };
  }

  let bg = `${c}.300`;
  let color = `${c}.50`;
  let hoverBg = `${c}.400`;
  let activeBg = `${c}.500`;
  let disabledBg = `${c}.300`;

  if (c === "contrast") {
    bg = "bg-contrast-sm";
    color = "text-contrast-lg";
    hoverBg = "bg-contrast-md";
    activeBg = "bg-contrast-lg";
    disabledBg = "bg-contrast-sm";
  }

  return {
    bgColor: bg,
    color: color,
    _hover: {
      bg: hoverBg,
      _disabled: {
        bg: disabledBg
      }
    },
    _active: { bg: activeBg }
  };
};

export const Button = {
  baseStyle: {
    border: "sm"
  },
  variants: {
    solid: variantSolid
  }
};
