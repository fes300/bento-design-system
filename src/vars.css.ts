import { createGlobalThemeContract } from "@vanilla-extract/css";

export const vars = createGlobalThemeContract({
  fontFamily: {
    default: "font-family-default",
  },
  fontWeight: {
    regular: "font-weight-regular",
    semibold: "font-weight-semibold",
  },
  fontSize: {
    12: "font-size-12",
    14: "font-size-14",
    16: "font-size-16",
  },
  lineHeight: {
    16: "font-size-16",
    18: "font-size-18",
    20: "font-size-20",
  },
  letterSpacing: {
    "1": "letter-spacing-1",
    "2": "letter-spacing-2",
  },
  space: {
    "0": "space-0",
    "4": "space-4",
    "8": "space-8",
    "16": "space-16",
    "24": "space-24",
    "32": "space-32",
    "40": "space-40",
    "80": "space-80",
  },
  color: {
    primary: "color-primary",
    neutral10: "color-neutral10",
    neutral20: "color-neutral20",
    neutral30: "color-neutral30",
    neutral40: "color-neutral40",
    neutral50: "color-neutral50",
    neutral60: "color-neutral60",
    neutral70: "color-neutral70",
    neutral80: "color-neutral80",
    neutral90: "color-neutral90",
    info05: "color-info05",
    info60: "color-info60",
    info80: "color-info80",
    positive05: "color-positive05",
    positive60: "color-positive60",
    positive80: "color-positive80",
    warning05: "color-warning05",
    warning60: "color-warning60",
    warning80: "color-warning80",
    negative05: "color-negative05",
    negative60: "color-negative60",
    negative80: "color-negative80",
    white: "color-white",
    black: "color-black",
    transparent: "color-transparent",
  },
});
