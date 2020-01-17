import tokens from "../tokens";

export default {
  input: {
    boxSizing: "border-box",
    fontSize: tokens.fontSizes[1],
    fontWeight: tokens.fontWeights.light,
    lineHeight: tokens.lineHeights[2],
    fontFamily: tokens.fonts.body,
    padding: `0 ${tokens.space[4]}`,
    color: tokens.colors.black,
    width: "100%",
    height: tokens.space[11],
    border: 0,
    margin: 0,
    MozAppearance: "textfield" // Hides the input="number" spin buttons in Firefox
  },
  "input:focus": {
    outline: 0,
    borderRadius: tokens.radii[0],
    boxShadow: tokens.shadows.focus
  },
  "input.webkitSpinButton": {
    display: "none" // Hides the input="number" spin buttons in Chrome
  },
  "input.default": {
    backgroundColor: tokens.colors.grey.t05
  },
  "input.white": {
    backgroundColor: tokens.colors.white
  }
};
