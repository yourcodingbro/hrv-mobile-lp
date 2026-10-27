import { createCn } from "cn/config"

// Teach the class merger the custom @theme tokens in globals.css; unknown `text-*` would otherwise be merged as colours.
export const cn = createCn({
  extend: {
    theme: {
      text: ["label"],
      radius: ["card", "tile"],
      spacing: ["gutter"],
      container: ["content"],
      breakpoint: ["compact"],
    },
  },
})
