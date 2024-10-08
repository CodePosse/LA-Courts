import { createMenu } from "./Menu.js";

export default {
  title: "components/Menu",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return createMenu({ ...args });
  },
  argTypes: {
    text: {
      name: "Text",
      control: "text",
    },
    disabled: {
      name: "Disabled",
      control: "boolean",
    },
    options: {
      name: "Options",
      control: "object",
    },
  },
  args: {},
};

export const Menu = {
  args: {
    text: "Menu item",
    disabled: false,
    options: [
      {
        title: "Title",
        items: [
          { text: "Action", href: "#" },
          { text: "Another action", href: "#" },
          { text: "Something else here", href: "#" },
        ],
      },
      {
        title: "Title",
        items: [
          { text: "Action", href: "#" },
          { text: "Another action", href: "#" },
          { text: "Something else here", href: "#" },
        ],
      },
    ],
  },
};

export const Disabled = {
  args: {
    text: "Disabled item",
    disabled: true,
    options: [],
  },
};