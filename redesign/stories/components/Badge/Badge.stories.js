import { createBadge } from "./Badge.js";

export default {
  title: "Components/Badge",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    return createBadge({ ...args });
  },
  argTypes: {
    text: {
      name: "Text",
      control: "text",
    },
    filled: {
      name: "Filled",
      control: "boolean",
    },
    textTransform: {
      name: "Text Transform",
      control: {
        type: "select",
        labels: {
          uppercase: "Uppercase",
          lowercase: "Lowercase",
          capitalize: "Capitalize",
          none: "None",
        },
      },
      options: ["uppercase", "lowercase", "capitalize", "none"],
    },
    size: {
      name: "Size",
      control: {
        type: "select",
        labels: {
          lg: "Default",
          sm: "Small",
        },
      },
      options: ["sm", "lg"],
    },
    variant: {
      name: "Variant",
      control: {
        type: "select",
        labels: {
          primary: "Primary",
          positive: "Positive",
          negative: "Negative",
          warning: "Warning",
          secondary: "Secondary",
          featured: "Featured",
        },
      },
      options: [
        "primary",
        "positive",
        "negative",
        "warning",
        "secondary",
        "featured",
      ],
    },
  },
};

export const Primary = {
  args: {
    text: "Primary",
    filled: false,
    variant: "primary",
  },
};

export const Positive = {
  args: {
    text: "Positive",
    filled: false,
    variant: "positive",
  },
};

export const Negative = {
  args: {
    text: "Negative",
    filled: false,
    variant: "negative",
  },
};

export const Warning = {
  args: {
    text: "Warning",
    filled: false,
    variant: "warning",
  },
};

export const Secondary = {
  args: {
    text: "Secondary",
    filled: false,
    variant: "secondary",
  },
};

export const Featured = {
  args: {
    text: "Featured",
    filled: false,
    variant: "featured",
  },
};