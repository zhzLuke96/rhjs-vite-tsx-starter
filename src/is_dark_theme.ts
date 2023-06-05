import { ref } from "@rhjs/core";

export const is_dark_theme = () =>
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

export const dark_theme_ref = ref(is_dark_theme());
