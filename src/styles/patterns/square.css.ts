import { StyleRule } from "@vanilla-extract/css";

export const square = (size: StyleRule["width"]): StyleRule => ({
    width: size,
    height: size
})