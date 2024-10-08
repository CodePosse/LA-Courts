import { createIcon } from "./Icon.js";

export default {
  title: "content/Icon",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return createIcon({ ...args });
  },
  argTypes: {
    icon: {
      name: "Icon",
      control: "text",
    },
  },
  args: {},
};

export const Icon = {
  args: {
    icon: "scale-balanced",
  },
};