const FONT_SCALE_BASE = 1;
const FONT_SCALE_MULTIPLIER = 1.5;

export const fonts = {
  heading: `'Major Mono Display', sans-serif`,
  body: `'Space Mono', sans-serif`,
};

export const textStyles = {
  xs: {
    fontFamily: fonts.body,
    fontSize: FONT_SCALE_BASE * FONT_SCALE_MULTIPLIER ** -1 + "rem",
    fontWeight: 400,
    lineHeight: "150%",
    letterSpacing: "0",
  },
  sm: {
    fontFamily: fonts.body,
    fontSize: FONT_SCALE_BASE * FONT_SCALE_MULTIPLIER ** 0 + "rem",
    fontWeight: 400,
    lineHeight: "150%",
    letterSpacing: "0",
  },
  md: {
    fontFamily: fonts.body,
    fontSize: FONT_SCALE_BASE * FONT_SCALE_MULTIPLIER ** 1 + "rem",
    fontWeight: 400,
    lineHeight: "150%",
    letterSpacing: "0",
  },
  lg: {
    fontFamily: fonts.heading,
    fontSize: FONT_SCALE_BASE * FONT_SCALE_MULTIPLIER ** 2 + "rem",
    fontWeight: 400,
    lineHeight: "150%",
    letterSpacing: "0",
  },
  xl: {
    fontFamily: fonts.heading,
    fontSize: FONT_SCALE_BASE * FONT_SCALE_MULTIPLIER ** 3 + "rem",
    fontWeight: 600,
    lineHeight: "120%",
    letterSpacing: "0",
  },
  "2xl": {
    fontFamily: fonts.heading,
    fontSize: FONT_SCALE_BASE * FONT_SCALE_MULTIPLIER ** 4 + "rem",
    fontWeight: 600,
    lineHeight: "120%",
    letterSpacing: "0",
  },
  "3xl": {
    fontFamily: fonts.heading,
    fontSize: FONT_SCALE_BASE * FONT_SCALE_MULTIPLIER ** 5 + "rem",
    fontWeight: 600,
    lineHeight: "110%",
    letterSpacing: "0",
  },
  "4xl": {
    fontFamily: fonts.heading,
    fontSize: FONT_SCALE_BASE * FONT_SCALE_MULTIPLIER ** 6 + "rem",
    fontWeight: 600,
    lineHeight: "110%",
    letterSpacing: "0",
  },
  "5xl": {
    fontFamily: fonts.heading,
    fontSize: FONT_SCALE_BASE * FONT_SCALE_MULTIPLIER ** 7 + "rem",
    fontWeight: 600,
    lineHeight: "100%",
    letterSpacing: "0",
  },
  "6xl": {
    fontFamily: fonts.heading,
    fontSize: FONT_SCALE_BASE * FONT_SCALE_MULTIPLIER ** 8 + "rem",
    fontWeight: 600,
    lineHeight: "100%",
    letterSpacing: "0",
  },
};
